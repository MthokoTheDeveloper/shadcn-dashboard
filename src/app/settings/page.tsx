'use client'

import { DataTable } from "@/components/ui/DataTable"
import PageTitle from "@/components/ui/PageTitle"
import { cn } from "@/lib/utils"
import { ColumnDef } from "@tanstack/react-table"
import { number } from "prop-types"

export interface Settings{
  category: string
  value: string | number | boolean
 
}

export const columns: ColumnDef<Settings>[] = [
  
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
]

export const data: Settings[] = [
  {
    category: "Account",
    value: true, // Boolean value indicating account status (active/inactive)
  },
  {
    category: "Notifications",
    value: false, // Numerical value representing number of users
  },
  {
    category: "Language",
    value: "English", // String value representing revenue amount
  },
  {
    category: "Theme",
    value: "Dark", // Numerical value representing number of orders
  },



]



export default function SettingsPage() {

  
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Settings" />
      <DataTable columns={columns} data={data} />
      </div>
  )
}




