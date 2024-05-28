import Card, { CardProps } from "@/components/ui/Card";
import PageTitle from "@/components/ui/PageTitle";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import { CardContent } from "@/components/ui/Card";
import BarChart from "@/components/ui/BarChart";
import SalesCard, { SalesProps } from "@/components/ui/SalesCard";

const cardData: CardProps[] = [
  {
    label: 'Total Revenue',
    amount: '$1234',
    description: '+20.1% from last month',
    icon: DollarSign, // Replace with your Shadcn icon component name
  },
  {
    label: 'Subscriptions',
    amount: "+2350",
    description: '+180.1% from last month',
    icon: Users, // Replace with your Shadcn icon component name
  },
  {
    label: 'Sales',
    amount: "+12.234",
    description: 'Number of orders placed today.',
    icon: CreditCard, // Replace with your Shadcn icon component name
  },
  {
    label: 'Active Now',
    amount: '10,234',
    description: 'Total website visitors today (consider using a formatted number if needed).',
    icon: Activity, // Replace with your Shadcn icon component name
  },
];

const userSalesData: SalesProps[] = [
  {
    name: "Mthokozisi Martin",
    email: "mthokozisimartin@gmail.com",
    salesAmount:"+1,999.00"
  },
  {
    name: "Mthokozisi Martin",
    email: "mthokozisimartin@gmail.com",
    salesAmount:"+1,999.00"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard"/>
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all
      sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i)=>
        <Card key={i} amount={d.amount}
            description={d.description} icon={d.icon} 
            label={d.label} />)}
      </section>
      <section className="grid grid-cols-1 gap-4 
      transition-all lg:grid-cols-2">
     
      <CardContent>
         <p className="p-4 font-semibold">Overview</p>
          <BarChart  />
      </CardContent>
      <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month
            </p>
          </section>
        {userSalesData.map((d,i)=>(

        <SalesCard key={i}
        email={d.email}
        name={d.name}
        salesAmount={d.salesAmount}/>)
        )}
      </CardContent>
      </section>
    </div>
  );
}
