'use client'

import { DataTable } from "@/components/ui/DataTable"
import PageTitle from "@/components/ui/PageTitle"
import { ColumnDef } from "@tanstack/react-table"

type Payment = {
  name: string
  method: string
  lastOrder: string
  email: string
}

 const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({row})=>{
      return (
      <div className="flex gap-2 items-center">
        <img 
        className="h-10 w-10"
        src={`https://api.dicebar.com/7.x/lorelei/svg?seed=${row.getValue("name"
        )}`}
        alt="user-image" 
        />
        <p>Name - {row.getValue("name")}</p>
          </div>)
    }
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
]

 const data: Payment[] = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    lastOrder: "2024-05-27", // Sample date format
    method: "Credit Card"
  },
  {
    name: "Jane Smith",
    email: "jane.smith@company.com",
    lastOrder: "2024-05-20", // Sample date format
    method: "PayPal"
  },
  {
    name: "Michael Brown",
    email: "michael.brown@domain.com",
    lastOrder: "2024-05-27", // Can be null if there's no last order
    method: "Cash on Delivery"
  },
  {
    name: "John Doe",
    email: "john.doe@example.com",
    lastOrder: "2024-05-27", // Sample date format
    method: "Credit Card"
  },
  {
    name: "Jane Smith",
    email: "jane.smith@company.com",
    lastOrder: "2024-05-20", // Sample date format
    method: "PayPal"
  },
  {
    name: "Michael Brown",
    email: "michael.brown@domain.com",
    lastOrder: "2024-05-27", // Can be null if there's no last order
    method: "Cash on Delivery"
  },



]



export default function UsersPage() {

  
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Users" />
      <DataTable columns={columns} data={data} />
      </div>
  )
}




