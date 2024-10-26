/* eslint-disable no-unused-vars */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "../features/Auth/LoginForm";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
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
      <footer className=" text-white py-4">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Kyc Digital System. All rights
            reserved.
          </p>
          <p className="text-sm">
            Developed by <span className="font-semibold">C Ray</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Login;
