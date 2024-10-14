/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { UserPlus } from "lucide-react";

export default function AddUserForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  //   const handleSubmit = async (e) => {
  //     e.preventDefault()
  //     setError('')
  //     setSuccess(false)

  //     try {
  //       const response = await fetch('http://localhost:3000/api/register', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': localStorage.getItem('token')
  //         },
  //         body: JSON.stringify({ username, password, role }),
  //       })
  //       const data = await response.json()
  //       if (response.ok) {
  //         setSuccess(true)
  //         setUsername('')
  //         setPassword('')
  //         setRole('employee')
  //       } else {
  //         setError(data.message || 'Failed to register user')
  //       }
  //     } catch (error) {
  //       setError('An error occurred. Please try again.')
  //     }
  //   }

  function handleAddUser(e) {
    e.preventDefault();
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
          <form onSubmit={handleAddUser} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
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
            <div className="space-y-2">
              <label
                htmlFor="role"
                className="text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="employee">Employee</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {success && (
              <Alert>
                <AlertDescription>
                  User registered successfully!
                </AlertDescription>
              </Alert>
            )}
            <Button type="submit" className="w-full" onClick={() => {}}>
              <UserPlus className="w-4 h-4 mr-2" />
              Register User
            </Button>
          </form>
          {/* <div className="mt-4 text-center">
            <Button variant="link" onClick={() => navigate('/dashboard')}>
            Back to Dashboard
            </Button>
            </div> */}
        </CardContent>
      </Card>
    </div>
  );
}
