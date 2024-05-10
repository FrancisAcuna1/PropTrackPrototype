"use client"
import React from "react";
import { useState } from "react";
import Chart from "react-apexcharts";



export default function ExpenseChart (){
   const [expenses, setExpenses] = useState({
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            },
            fill: {
                colors: ["#9575cd"],
            },
            legend: {
                show: true,
                position: "bottom",
                horizontalAlign: "left",
            }
        },
        series: [
            {
                name: "Series-1",
                data: [1000, 2000, 4000, 4500, 6000, 5500, 3000, 4500, 5000, 7000, 6500, 1500],
            }, 
        ],
        
        
    })





    return (
        <>
             <Chart options={expenses.options} series={expenses.series} type="bar" height={500} />
        </>
    )
}