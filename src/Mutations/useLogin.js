import { useMutation } from "@tanstack/react-query";
import { Login } from "../Services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const { isPending: isLoggingIn, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => Login({ email, password }),
    onSuccess: () => {
      toast.success("Login successful");
      navigate("/");
    },
    onError: (error) => {
      toast.error(
        `${error.message}, The provided email and password are incorrect. Please try again 😉`
      );
    },
  });

  return {
    login,
    isLoggingIn,
  };
}
