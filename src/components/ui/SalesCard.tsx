import React from 'react'

export type SalesProps = {
  name: string;
  email: string;
  salesAmount: string;
}

export default function SalesCard(props: SalesProps) {
  return (
    <div className='flex flex-wrap justify-between gap-3'>
      <section className='flex justify-between gap-3'>
        <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
          <img width={200} height={200} src={`https://api.dicebear.com/7.x.lorelei/
          svg?seed=${props.name}`} alt='avatar' />
        </div>
        <div>
          <p className='text-sm'>{props.name}</p>
        </div>
        <div>
          <p className='text-ellipsis overflow-hidden whitespace-nowrap
          w-[120px] sm:w-auto text-gray-400'>{props.email}</p>
        </div>
        {/* <div className="">
        </div> */}
      </section>
          <p className="">{props.salesAmount}</p> 
    </div>
  )
}