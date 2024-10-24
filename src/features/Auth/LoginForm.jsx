/* eslint-disable no-unused-vars */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SpinnerMini from "../../components/SpinnerMini";
import { LogIn } from "lucide-react";
import { useLogin } from "../../Mutations/useLogin";

function LoginForm() {
  const { isLoggingIn, login } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) return;

    login({ email, password });
  }

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-white-700">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoggingIn}
          required
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-sm font-medium text-white-700"
        >
          Password
        </label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoggingIn}
          required
        />
      </div>
      {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
      <Button type="submit" className="w-full" disabled={isLoggingIn}>
        <LogIn className="w-4 h-4 mr-2" />
        {!isLoggingIn ? "Log in" : <SpinnerMini />}
      </Button>
    </form>
  );
}

export default LoginForm;
