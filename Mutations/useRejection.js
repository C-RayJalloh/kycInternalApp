import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { updateCustomer } from "../src/Services/apiCustomers";

export function useRejection() {
  const queryClient = useQueryClient();

  const { isPending, mutate: RejectCustomer } = useMutation({
    mutationFn: ({ id, newCustomer }) => updateCustomer(id, newCustomer), // Adjust for the reject mutation
    onSuccess: () => {
      toast.success("Customer rejected successfully");

      // Invalidate the customer query to refresh the data
      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });

  return {
    RejectCustomer,
    isPending,
  };
}
