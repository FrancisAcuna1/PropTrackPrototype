'use client'
import Navbar from "@/app/Dashboard/navbar";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function AddTenant(){
    return(
        <>
            <Navbar/>
            <h1>Add Tenant</h1>
        </>
    )
}