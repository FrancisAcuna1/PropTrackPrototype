'use client'
import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import { Box, Grid, Paper, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, Breadcrumbs, Link} from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { DataGrid  } from '@mui/x-data-grid';
import CustomerTable from "../component/customer";


export default function home (){
      

    return (
        <>
       
            <Navbar/>
            <div className="bgcolor">
            <Box sx={{ flexGrow: '1', display: 'flex', marginX: '1%',}}>
                <Sidebar/>
                <Grid container spacing={2} sx={{marginTop: '3rem',  display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ width: '100%', marginBottom: '3rem',}}>
                        <Grid spacing={2} sx={{ marginTop: '5rem', marginX: '1rem', flexDirection: 'column' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{marginLeft: '20px'}}>
                                    <Breadcrumbs aria-label="breadcrumb">
                                        <Link underline="hover" color="inherit" href="./home">
                                            Home
                                        </Link>
                                        {/* <Link
                                        underline="hover"
                                        color="inherit"
                                        href="/material-ui/getting-started/installation/"
                                        >
                                            Core
                                        </Link> */}
                                        <Typography color="text.primary">Customers</Typography>
                                    </Breadcrumbs>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1"  sx={{marginLeft: '20px', fontSize: '22px', fontWeight: 'bold', letterSpacing: '1px'}}>
                                        Customer
                                    </Typography>
                                    <hr style={{ width: '100%', backgroundColor: '#ecebee', height: '1px', marginTop: '20px',}} />
                                </Grid>    
                                
                                {/* Room List */}
                                <Grid item xs={12} lg={11} sx={{maxWidth: '100%', margin: 'auto', marginTop: '2rem'}}>
                                    <Paper elevation={3} style={{'@media (max-width: 100px)': {width: 'auto'}, marginLeft: '20px', paddingTop: '20px',  justifyContent: "center", alignItems: "center",}}>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="h6" letterSpacing={2} sx={{marginLeft: '20px'}} >
                                                    List of Customer's
                                                </Typography>
                                            </Grid>
                                            <CustomerTable/>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                {/* Customers */}
                                {/* <Grid item xs={12} lg={5} sx={{maxWidth: '100%'}}>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '18px', letterSpacing: '1px', marginTop: '25px', marginLeft: "30px" }}>
                                        Customer's
                                    </Typography>
                                    <Paper elevation={2} sx={{ '@media (max-width: 100px)': {width: 'auto'}, height: '62vh', marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 3, marginLeft: '20px' }}>

                                    </Paper>
                                </Grid> */}
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
          </div>    
        </>
    )
}
