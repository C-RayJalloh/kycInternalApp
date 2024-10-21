/* eslint-disable no-unused-vars */

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Spinner from "./Spinner";

import DataRow from "./DataRow";
import { useCustomer } from "../Queries/useCustomers";

function DataTable() {
  const { customers, isPending, isError } = useCustomer();

  //  console.log(customers);

  if (isPending) return <Spinner />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Customers</h1>

      <Card>
        <CardHeader>
          <CardTitle>Recent KYC Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <DataRow customer={customer} key={customer.id} />
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default DataTable;
