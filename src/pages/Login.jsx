/* eslint-disable no-unused-vars */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Login() {
  const [email, setEmail] = useState("jahrulo.example@gmail.com");
  const [password, setPassword] = useState("querty123456");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const response = await fetch('http://localhost:3000/api/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ username, password }),
  //     })
  //     const data = await response.json()
  //     if (response.ok) {
  //       localStorage.setItem('token', data.token)
  //       localStorage.setItem('username', data.username)
  //       localStorage.setItem('role', data.role)
  //       navigate('/dashboard')
  //     } else {
  //       setError(data.message)
  //     }
  //   } catch (error) {
  //     setError('An error occurred. Please try again.')
  //   }
  // }

  // state login
  function handleLogin(e) {
    e.preventDefault();

    navigate("/");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            KYC Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-white-700"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
