/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signup } from "../Services/apiAuth";

export function useSignUp() {
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signup,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verufy the new account from the user's email address."
      );
    },
  });

  return { signUp, isPending };
}
