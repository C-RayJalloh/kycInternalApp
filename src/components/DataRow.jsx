/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { TableCell, TableRow } from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CheckCircle, Eye, Heading3, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Heading from "./Heading";
import { useApproval } from "../../Mutations/useApprove";
import { useRejection } from "../../Mutations/useRejection";

function DataRow({ customer }) {
  const { isPending: isApproved, ApproveCustomer } = useApproval();
  const { isPending: isRejected, RejectCustomer } = useRejection();
  const navigate = useNavigate();

  const {
    id: customerId,
    name,
    phoneNumber: phone,
    address,
    email,
    status,
    NIN: nationalId,
    dob,
    created_at: SubmittedDate,
    image,
  } = customer;

  console.log(customer);

  function formateDate() {
    const date = new Date(SubmittedDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  function handleApproval() {
    ApproveCustomer({ id: customerId, newCustomer: { status: "Approved" } });
    setTimeout(() => {
      navigate("/customers");
    }, 2000);
  }

  function handleRejection() {
    RejectCustomer({ id: customerId, newCustomer: { status: "Rejected" } });
    setTimeout(() => {
      navigate("/customers");
    }, 2000);
  }

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{formateDate(SubmittedDate)}</TableCell>
      <TableCell
        style={{
          color:
            status === "Pending"
              ? "blue"
              : status === "Approved"
              ? "green"
              : status === "Rejected"
              ? "red"
              : "black",
        }}
      >
        {status}
      </TableCell>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="mr-2">
              <Eye className="w-4 h-4 mr-1" />
              View
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Customer Details</DialogTitle>
              <DialogDescription>
                Review information and update KYC status.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name:
                </Label>
                <div id="name" className="col-span-3">
                  {name}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone:
                </Label>
                <div id="phone" className="col-span-3">
                  {phone}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="nationalId" className="text-right">
                  National ID:
                </Label>
                <div id="nationalId" className="col-span-3">
                  {nationalId}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="dob" className="text-right">
                  Date of Birth:
                </Label>
                <div id="dob" className="col-span-3">
                  {dob}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="address" className="text-right">
                  Address:
                </Label>
                <div id="address" className="col-span-3">
                  {address}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="address" className="text-right">
                  ID Card
                </Label>
                <div id="address" className="col-span-3">
                  {/* <img
                    src="https://www.pngitem.com/pimgs/m/277-2779849_view-larger-image-colourful-green-leaves-id-card.png"
                    alt="Customer ID"
                  /> */}
                  <img
                    src={image}
                    alt="Customer ID"
                    style={{ maxWidth: "250px", maxHeight: "250px" }}
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              {status === "Rejected" ? (
                <Heading as="h4">This customer has been rejected 🚫</Heading>
              ) : status === "Approved" ? (
                <Heading as="h4">This customer has been approved ✅</Heading>
              ) : (
                <>
                  <Button
                    variant="outline"
                    onClick={handleApproval}
                    disabled={isApproved}
                  >
                    <CheckCircle className="w-4 h-4 mr-1" />
                    {isApproved ? "Approving..." : "Approve"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleRejection}
                    disabled={isRejected}
                  >
                    <XCircle className="w-4 h-4 mr-1" />
                    {isRejected ? "Rejecting..." : "Reject"}
                  </Button>
                </>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  );
}

export default DataRow;
