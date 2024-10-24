/* eslint-disable no-unused-vars */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "../features/Auth/LoginForm";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center font-serif">
            Qcell KYC Admin Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
