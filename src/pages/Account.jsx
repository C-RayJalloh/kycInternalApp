import Heading from "../components/Heading";
import Row from "../components/Row";

import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function Account() {
  const [isResetting, setIsResetting] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const handleResetPassword = () => {
    setIsResetting(false);
    // onResetPassword(newPassword);
  };

  const username = "Jahrulo";
  const email = "jahrulo@example.com";
  const role = "Admin";

  return (
    <>
     <div>
     <Row>
        <Heading as="h1">Welcome {username} </Heading>
      </Row>
     </div>
     <hr />
      <Card className="max-w-md mx-auto p-4 shadow-md">
        <div className="mb-4">
          <Label htmlFor="username" className="font-semibold">
            Username:
          </Label>
          <Input id="username" value={username} disabled />
        </div>

        <div className="mb-4">
          <Label htmlFor="email" className="font-semibold">
            Email:
          </Label>
          <Input id="email" value={email} disabled />
        </div>

        <div className="mb-4">
          <Label htmlFor="role" className="font-semibold">
            Role:
          </Label>
          <Badge variant="secondary">{role}</Badge>
        </div>

        <div className="mb-4">
          {isResetting ? (
            <>
              <Label htmlFor="newPassword" className="font-semibold">
                New Password:
              </Label>
              <Input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <div className="mt-2 flex justify-between">
                <Button onClick={handleResetPassword} variant="primary">
                  Confirm Reset
                </Button>
                <Button
                  onClick={() => setIsResetting(false)}
                  variant="secondary"
                >
                  Cancel
                </Button>
              </div>
            </>
          ) : (
            <Button onClick={() => setIsResetting(true)} variant="primary">
              Reset Password
            </Button>
          )}
        </div>
      </Card>
    </>
  );
}

export default Account;
