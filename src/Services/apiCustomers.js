import supabase from "./supabase";
const supabaseUrl = import.meta.env.VITE_DB_URL;

export async function getCustomers() {
  const { data, error } = await supabase.from("customers").select("*");

  if (error) {
    throw new Error(`Error fetching customers: ${error.message}`);
  }

  return data;
}

export async function registerCustomer(newCustomer) {
  const imageName = `${Math.random()}-${newCustomer.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${imageName}`;

  try {
    // 1. Insert the customer data with the image URLs (to be uploaded next)
    const { data, error } = await supabase.from("customers").insert([
      {
        ...newCustomer,
        image: `${supabaseUrl}/storage/v1/object/public/images/${imagePath}`,
      },
    ]);

    if (error) {
      // Handle unique constraint violation
      if (error.code === "23505") {
        if (error.message.includes("phoneNumber")) {
          throw new Error(
            `The phone number ${newCustomer.phoneNumber} is already registered.`
          );
        }
        if (error.message.includes("email")) {
          throw new Error(
            `The email address ${newCustomer.email} is already registered.`
          );
        }
        if (error.message.includes("NIN")) {
          throw new Error(
            `The national Id number ${newCustomer.NIN} is already registered.`
          );
        }
      }
      console.error(error);
      throw new Error("Customer could not be added.");
    }

    const { error: idImageError } = await supabase.storage
      .from("images")
      .upload(imagePath, newCustomer.image);

    if (idImageError) {
      await supabase.from("customers").delete().eq("id", data.id);
      console.error(idImageError);
      throw new Error("ID Card upload failed, form submission canceled.");
    }

    return data;
  } catch (err) {
    console.error("Form submission error:", err);
    throw err;
  }
}

export async function updateCustomer(id, newCustomer) {
  const { data, error } = await supabase
    .from("customers")
    .select("status")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching customer:", error);
    throw error;
  }

  if (!data) {
    throw new Error("Customer not found.");
  }

  const { error: updateError } = await supabase
    .from("customers")
    .update(newCustomer)
    .eq("id", id);

  if (updateError) {
    console.error("Error updating customer status:", updateError);
    throw updateError;
  }

  return "Customer status updated to 'approved'.";
}
