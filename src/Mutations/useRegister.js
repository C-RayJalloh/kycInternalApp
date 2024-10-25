import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerCustomer } from "../Services/apiCustomers";
import toast from "react-hot-toast";

export function useRegister() {
  const queryClient = useQueryClient();

  const { isPending, mutate: register } = useMutation({
    mutationFn:  registerCustomer,
    onSuccess: () => {
        toast.success("Registration successful");
        queryClient.invalidateQueries("Customers");
      },
      onError: (error) => {
        toast.error(error.message);
      },
  });

  return { isPending, register };
}
