import Card, { CardProps } from "@/components/ui/Card";
import PageTitle from "@/components/ui/PageTitle";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

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
    </div>
  );
}
