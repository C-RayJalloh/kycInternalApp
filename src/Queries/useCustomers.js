import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../Services/apiCustomers";

export function useCustomer() {
  const {
    data: customers,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers,
  });

  return { customers, isPending, isError };
}
