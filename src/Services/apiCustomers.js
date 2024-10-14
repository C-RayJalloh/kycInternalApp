import supabase from "./supabase";

export async function getCustomers() {
  const { data, error } = await supabase.from("customers").select("*");

  if (error) {
    throw new Error(`Error fetching customers: ${error.message}`);
  }

  return data;
}

export async function updateCustomer(id, newCustomer) {
  // Fetch the customer's current status
  const { data, error } = await supabase
    .from("customers")
    .select("status")
    .eq("id", id)
    .single(); // .single() ensures we are getting one record.

  if (error) {
    console.error("Error fetching customer:", error);
    throw error;
  }

  // Check if the customer was found
  if (!data) {
    throw new Error("Customer not found.");
  }

  // Update the customer's status to "approved"
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
