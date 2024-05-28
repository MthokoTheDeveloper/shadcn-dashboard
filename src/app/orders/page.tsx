'use client'

import { DataTable } from "@/components/ui/DataTable"
import PageTitle from "@/components/ui/PageTitle"
import { cn } from "@/lib/utils"
import { ColumnDef } from "@tanstack/react-table"

type Payment = {
  method: string
  status: string
  lastOrder: string
  order: string
}

const columns: ColumnDef<Payment>[] = [
  

  {
    accessorKey: "order",
    header: "Order",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({row})=>{
      return (
        <div className={cn("font-medium w-fit px-4 py2 rounded-lg", {
          "bg-red-200" : row.getValue("status") === "Pending",
          "bg-orange-200" : row.getValue("status") === "Processing",
          "bg-green-200" : row.getValue("status") === "Completed",
          
        }
        
      )}>{row.getValue("status")}
          </div>)
    }
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
    order: "ORD001",
    status: "Pending",
    lastOrder: "2024-05-27", // Sample date format
    method: "Credit Card"
  },
  {
    order: "ORD002",
    status: "Processing", // Different status
    lastOrder: "2024-05-26", // Different date
    method: "Debit Card" // Different method
  },
  {
    order: "ORD003",
    status: "Completed", // Different status
    lastOrder: "2024-05-25", // Different date
    method: "Cash on Delivery" // Different method
  },
  {
    order: "ORD004",
    status: "Cancelled", // Different status
    lastOrder: "2024-05-24", // Different date
    method: "PayPal" // Different method
  },
  {
    order: "ORD005",
    status: "Pending", // Same status as first entry for variation
    lastOrder: "2024-05-28", // Different date
    method: "Apple Pay" // Different method
  },



]



export default function OrdersPage() {

  
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Orders" />
      <DataTable columns={columns} data={data} />
      </div>
  )
}




