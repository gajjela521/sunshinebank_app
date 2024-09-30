'use client'
import React from 'react'
import { Chart as chartJS,ArcElement,Tooltip,Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

chartJS.register(ArcElement,Tooltip,Legend)
const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data={
        datasets:[
            {
                label:'Banks',
                data:[100, 2500,1250],
                backgroundColor:['#0747b6','#2265d8','#2f91fa']
            }
        ],
        labels:['Bank1','Bank2','Bank3']
    }
  return (
   <Doughnut 
   data={data}
   options={{
        cutout:'50%',
        plugins:{
            legend:{
            display:false
            }
       }
    }}
   />
  )
}

export default DoughnutChart
