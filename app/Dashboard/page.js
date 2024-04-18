"use client"
import * as React from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import { Box } from '@mui/system';
export default function Dashboard() {
    return (
     <>
      <Navbar/>
      <Box sx={{ display: 'flex' }}>
        <Sidebar/>
        <h1 sx={{ margin: '4rem' }}>hgshdgsdg</h1>
      </Box>
     </>

    );
}