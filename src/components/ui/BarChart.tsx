'use client'
import React from 'react';
import {BarChart as BarGraph, ResponsiveContainer, XAxis, YAxis, Bar} from 'recharts'
type Props = {}

const data = [
  {
    name: "Jan",
    value: Math.floor(Math.random() * 1000) + 1, // Random value between 1 and 1000
  },
  {
    name: "Feb",
    value: Math.floor(Math.random() * 1000) + 1, // Random value between 1 and 1000
  },
  {
    name: "Mar",
    value: Math.floor(Math.random() * 1000) + 1, // Random value between 1 and 1000
  },
  {
    name: "Apr",
    value: Math.floor(Math.random() * 1000) + 1, // Random value between 1 and 1000
  },
  {
    name: "May",
    value: Math.floor(Math.random() * 1000) + 1, // Random value between 1 and 1000
  },
  {
    name: "Jun",
    value: Math.floor(Math.random() * 1000) + 1, // Random value between 1 and 1000
  },
  {
    name: "Jul",
    value: Math.floor(Math.random() * 1000) + 1, // Random value between 1 and 1000
  },
  {
    name: "Aug",
    value: Math.floor(Math.random() * 1000) + 1, // Random value between 1 and 1000
  },
  {
    name: "Sep",
    value: Math.floor(Math.random() * 1000) + 1, // Random value between 1 and 1000
  },
  {
    name: "Oct",
    value: Math.floor(Math.random() * 1000) + 1, // Random value between 1 and 1000
  },
  {
    name: "Nov",
    value: Math.floor(Math.random() * 1000) + 1, // Random value between 1 and 1000
  },
  {
    name: "Dec",
    value: Math.floor(Math.random() * 1000) + 1, // Random value between 1 and 1000
  },
];


export default function BarChart({}: Props) {
  return (
    
      <ResponsiveContainer width={'100%'} height={'100%'}>
          <BarGraph data={data}>
          <XAxis 
          dataKey={"name"}
          tickLine={false}
          axisLine={false}
          stroke='#888888'
          fontSize={12} />
          <YAxis 
          tickLine={false}
          axisLine={false}
          stroke='#888888'
          fontSize={12}
          tickFormatter ={(value)=>`$${value}`}/>
          <Bar dataKey={"total"} radius={[4,4,0,0]} />
          </BarGraph>

      </ResponsiveContainer>
    
  )
}