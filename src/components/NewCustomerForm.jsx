import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRegister } from "../Mutations/useRegister";
import SpinnerMini from "./SpinnerMini";

function CustomerForm() {
  const { isPending: isCreating, register: registerCustomer } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newCustomer = {
      name: data.fullName,
      phoneNumber: data.phoneNumber,
      NIN: data.nationalIdNumber,
      dob: data.dateOfBirth,
      address: data.address,
      email: data.email,
      created_at: new Date(),
      status: "Approved",
    };

    registerCustomer({ ...newCustomer, image: data.image[0] });
    reset();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>New Customer</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block font-semibold">
              Full Name
            </label>
            <Input
              type="text"
              id="fullName"
              placeholder="Enter Full Name"
              {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && (
              <p className="text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold">
              Email
            </label>
            <Input
              type="email"
              id="email"
              placeholder="Enter email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block font-semibold">
              Phone Number
            </label>
            <Input
              type="tel"
              id="phoneNumber"
              placeholder="Enter Phone Number"
              {...register("phoneNumber", {
                required: "Phone Number is required",
              })}
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="nationalIdNumber" className="block font-semibold">
              National ID Number (NIN)
            </label>
            <Input
              type="text"
              id="nationalIdNumber"
              placeholder="Enter National ID Number - NIN"
              {...register("nationalIdNumber", {
                required: "National ID is required",
              })}
            />
            {errors.nationalIdNumber && (
              <p className="text-red-500">{errors.nationalIdNumber.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="dateOfBirth" className="block font-semibold">
              Date of Birth
            </label>
            <Input
              type="date"
              id="dateOfBirth"
              placeholder="Date of Birth"
              {...register("dateOfBirth", {
                required: "Date of Birth is required",
              })}
            />
            {errors.dateOfBirth && (
              <p className="text-red-500">{errors.dateOfBirth.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="address" className="block font-semibold">
              Address
            </label>
            <Input
              type="text"
              id="address"
              placeholder="Enter Address"
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <p className="text-red-500">{errors.address.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="image" className="block font-semibold">
              Upload ID Card
            </label>
            <Input
              type="file"
              id="image"
              accept="image/*"
              {...register("image", { required: "Image is required" })}
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>

          <Button type="submit" disabled={isCreating}>
            <UserPlus className="w-4 h-4 mr-2" />
            {isCreating ? <SpinnerMini /> : "Add new customer"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default CustomerForm;
