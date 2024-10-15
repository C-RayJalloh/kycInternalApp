/* eslint-disable no-unused-vars */
import { useSignUp } from "../Mutations/useSignUp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { UserPlus2, X } from "lucide-react";
import SpinnerMini from './SpinnerMini';

export default function AddUserForm() {
  const { isPending, signUp} = useSignUp();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  function onSubmit({ fullName, email, password }) {
    signUp(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <div className="flex justify-center w-full p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Add New Employee
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="Enter Full Name"
              disabled={isPending}
              {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && (
              <p className="text-red-500">{errors.fullName.message}</p>
            )}
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter email"
              disabled={isPending}
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
            <Label>Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter password"
               disabled={isPending}
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password needs a minimum of 8 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <Label>Repeat Password</Label>
            <Input
              type="password"
              id="passwordConfirm"
              placeholder="Confirm password"
              disabled={isPending}
              {...register("passwordConfirm", {
                required: "This field is required",
                validate: (value) =>
                  value === getValues().password || "Passwords need to match",
              })}
            />
            {errors.passwordConfirm && (
              <p className="text-red-500">{errors.passwordConfirm.message}</p>
            )}

            <div className="flex justify-normal gap-2">
              <Button type="submit">
                {/* <UserPlus2 className="w-4 h-4 mr-2" /> */}
                {!isPending ?   <UserPlus2 className="w-4 h-4 mr-2" />: <SpinnerMini />}
                Add Employee
              </Button>
              <Button type="submit">
                <X className="w-4 h-4 mr-2" />
                {/* {isCreating ? "Submitting" : "Submit KYC"} */}
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
