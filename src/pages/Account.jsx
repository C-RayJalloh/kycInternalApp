/* eslint-disable no-unused-vars */
import Heading from "../components/Heading";
import Row from "../components/Row";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { useUser } from "../Queries/useUser";

function Account() {
  const {
    user: {
      email,
      user_metadata: { fullName },
    },
  } = useUser();

  return (
    <>
      <div>
        <Row>
          <Heading as="h3">Hi {fullName} 🤗</Heading>
        </Row>
      </div>

      <Card className="max-w-md mx-auto p-4 shadow-md mt-5">
        <div className="mb-4">
          <Label htmlFor="username" className="font-semibold">
            Username:
          </Label>
          <Input id="username" value={fullName} disabled />
        </div>

        <div className="mb-4">
          <Label htmlFor="email" className="font-semibold">
            Email:
          </Label>
          <Input id="email" value={email} disabled />
        </div>

        {/* <div className="mb-4">
          <>
            <Label htmlFor="newPassword" className="font-semibold">
              New Password:
            </Label>
            <Input id="newPassword" type="password" />
            <div className="mt-2 flex justify-between">
              <Button variant="outline">Confirm Reset</Button>
              <Button variant="default">Cancel</Button>
            </div>
          </>
        </div> */}
      </Card>
    </>
  );
}

export default Account;
