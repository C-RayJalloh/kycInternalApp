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
import { ScrollArea } from "@/components/ui/scroll-area";
import { useApproval } from "../Mutations/useApprove";
import { useRejection } from "../Mutations/useRejection";

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
    image: idImage,
    customerImage,
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
          <DialogContent className="sm:max-w-[90vw] lg:max-w-[900px] w-full h-[90vh] p-0 bg-gray-100">
            <DialogHeader className="p-6 bg-primary text-primary-foreground">
              <DialogTitle className="text-2xl font-semibold">
                Customer Details
              </DialogTitle>
              <DialogDescription className="text-primary-foreground/70">
                Review information and update KYC status.
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-[calc(90vh-180px)] p-6">
              <div className="grid gap-6">
                {/* Name */}
                <div className="grid grid-cols-4 items-center gap-6">
                  <Label htmlFor="name" className="text-right font-semibold">
                    Name:
                  </Label>
                  <div id="name" className="col-span-3">
                    {name}
                  </div>
                </div>

                {/* Phone */}
                <div className="grid grid-cols-4 items-center gap-6">
                  <Label htmlFor="phone" className="text-right font-semibold">
                    Phone:
                  </Label>
                  <div id="phone" className="col-span-3">
                    {phone}
                  </div>
                </div>

                {/* National ID */}
                <div className="grid grid-cols-4 items-center gap-6">
                  <Label
                    htmlFor="nationalId"
                    className="text-right font-semibold"
                  >
                    NIN
                  </Label>
                  <div id="nationalId" className="col-span-3">
                    {nationalId}
                  </div>
                </div>

                {/* Date of Birth */}
                <div className="grid grid-cols-4 items-center gap-6">
                  <Label htmlFor="dob" className="text-right font-semibold">
                    Date of Birth:
                  </Label>
                  <div id="dob" className="col-span-3">
                    {dob}
                  </div>
                </div>

                {/* Address */}
                <div className="grid grid-cols-4 items-center gap-6">
                  <Label htmlFor="address" className="text-right font-semibold">
                    Address:
                  </Label>
                  <div id="address" className="col-span-3">
                    {address}
                  </div>
                </div>

                {/* ID Card */}
                <div className="grid grid-cols-4 items-center gap-6">
                  <Label htmlFor="idImage" className="text-right font-semibold">
                    National ID
                  </Label>
                  <div id="idImage" className="col-span-3">
                    <img
                      src={idImage}
                      alt="Customer ID"
                      className="max-w-full h-auto max-h-[300px] object-contain"
                    />
                  </div>
                </div>

                {/* Customer Image */}
                <div className="grid grid-cols-4 items-center gap-6">
                  <Label
                    htmlFor="customerImage"
                    className="text-right font-semibold"
                  >
                    Customer Image
                  </Label>
                  <div id="customerImage" className="col-span-3">
                    <img
                      src={customerImage}
                      alt="Customer Image"
                      className="max-w-full h-auto max-h-[300px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </ScrollArea>
            <DialogFooter className="my-0 mx-6">
              {status === "Rejected" ? (
                <h4 className="text-lg font-semibold text-destructive">
                  This customer has been rejected 🚫
                </h4>
              ) : status === "Approved" ? (
                <h4 className="text-lg font-semibold text-success">
                  This customer has been approved ✅
                </h4>
              ) : (
                <div className="flex justify-between w-full">
                  <Button
                    variant="outline"
                    onClick={handleApproval}
                    disabled={isApproved}
                    className="bg-success hover:bg-success/90 text-success-foreground"
                  >
                    <CheckCircle className="w-4 h-4 mr-1" />
                    {isApproved ? "Approving..." : "Approve"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleRejection}
                    disabled={isRejected}
                    className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                  >
                    <XCircle className="w-4 h-4 mr-1" />
                    {isRejected ? "Rejecting..." : "Reject"}
                  </Button>
                </div>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  );
}

export default DataRow;
