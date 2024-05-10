"use client"
import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../navbar"
import {useTheme, Grid, Card, CardActionArea, CardHeader, CardContent, ListItemIcon, Box, Typography, Paper} from "@mui/material";
import GroupOutlinedIcon from "@mui/icons-material/Group";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import NightShelterOutlinedIcon from "@mui/icons-material/NightShelterOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import CustomerTable from "../component/customer";
import Sidebar from "../sidebar";
import Chart from "react-apexcharts";
import RoomList from "../component/roomlist";



export default function Home (){
    const [income, setIncome] = useState({
        options: {
            chart: {
                id: "basic-line",
            },
            xaxis: {
                categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
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
                data: [5000, 6000, 4000, 10000, 12000, 5500, 3000, 4500, 5000, 7000, 6500, 6700],
            }
        ],
        
    });

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
       
            <Navbar/>
            <div className="bgcolor">
            <Box sx={{ flexGrow: '1', display: 'flex', marginX: '1%',}}>
                <Sidebar/>
                <Grid container spacing={2} sx={{marginTop: '2rem',  display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ width: '100%', marginBottom: '3rem',}}>
                        <Grid spacing={2} sx={{ marginTop: '6rem', marginX: '1rem', flexDirection: 'column' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                <Typography variant="body1" sx={{marginLeft: '20px', fontSize: '22px', fontWeight: 'bold', letterSpacing: '1px'}}>
                                    Dashboard
                                </Typography>
                                </Grid>  
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Paper elevation={2} style={{maxWidth: 490, padding: '25px', marginLeft: '20px', borderRadius: '10px'}}>
                                        <Grid container justifyContent={'space-between'}>  
                                            <Grid item>
                                            <Typography variant="h5" sx={{color: '#ffb74d', fontWeight: 550}}>5000</Typography>
                                            
                                            </Grid>
                                            <Grid item>
                                            <Box   sx={{bgcolor: '#ffb74d', borderRadius: '15px', height: '55px', padding: '13px', justifyContent: 'center' }}>
                                            <GroupOutlinedIcon fontSize="medium" sx={{color: 'white', fontSize: '30px'}}/>
                                            </Box>
                                            </Grid>
                                        </Grid>
                                        <Typography variant="body1" color={'black'} sx={{marginTop: '-12px',}} letterSpacing={2} gutterBottom>Tenants</Typography>
                                        <Box sx={{bgcolor: '#ffb74d', borderRadius: '5px', display:'flex', justifyContent: 'space-between', width: '95px', padding: '2px', marginTop: '1px'}}>
                                            <TrendingUpOutlinedIcon fontSize="small" sx={{color: 'white', marginLeft: '8px', marginTop: '2px'}}/>
                                            <Typography sx={{fontSize: '15px', marginRight: '10px', color: 'white'}}>50.5%</Typography>
                                        </Box>
                                    </Paper>
                                </Grid> 
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Paper elevation={2} style={{maxWidth: 490, padding: '25px', marginLeft: '20px', borderRadius: '10px'}}>
                                        <Grid container justifyContent={'space-between'}>  
                                            <Grid item>
                                            <Typography variant="h5" sx={{color: '#00796b', fontWeight: 550}}>10</Typography>
                                            
                                            </Grid>
                                            <Grid item>
                                            <Box   sx={{bgcolor: '#00796b', borderRadius: '15px', height: '55px', padding: '13px', justifyContent: 'center' }}>
                                            <ApartmentOutlinedIcon fontSize="medium" sx={{color: 'white', fontSize: '30px'}}/>
                                            </Box>
                                            </Grid>
                                        </Grid>
                                        <Typography variant="body1" color={'black'} sx={{marginTop: '-10px',}} letterSpacing={2} gutterBottom>Apartments</Typography>
                                        <Box sx={{bgcolor: '#00796b', borderRadius: '5px', display:'flex', justifyContent: 'space-between', width: '95px', padding: '2px', marginTop: '2px'}}>
                                            <TrendingUpOutlinedIcon fontSize="small" sx={{color: 'white', marginLeft: '8px', marginTop: '2px'}}/>
                                            <Typography sx={{fontSize: '15px', marginRight: '10px', color: 'white'}}>50.5%</Typography>
                                        </Box>
                                    </Paper>
                                </Grid>  
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Paper elevation={2} style={{maxWidth: 490, padding: '25px', marginLeft: '20px', borderRadius: '10px'}}>
                                        <Grid container justifyContent={'space-between'}>  
                                            <Grid item>
                                            <Typography variant="h5" sx={{color: '#ff3d00', fontWeight: 550}}>500</Typography>
                                            
                                            </Grid>
                                            <Grid item>
                                            <Box   sx={{bgcolor: '#ff3d00', borderRadius: '15px', height: '55px', padding: '13px', justifyContent: 'center' }}>
                                            <NightShelterOutlinedIcon fontSize="medium" sx={{color: 'white', fontSize: '30px'}}/>
                                            </Box>
                                            </Grid>
                                        </Grid>
                                        <Typography variant="body1" color={'black'} sx={{marginTop: '-10px',}} letterSpacing={2} gutterBottom>Rooms</Typography>
                                        <Box sx={{bgcolor: '#ff3d00', borderRadius: '5px', display:'flex', justifyContent: 'space-between', width: '95px', padding: '2px', marginTop: '2px'}}>
                                            <TrendingUpOutlinedIcon fontSize="small" sx={{color: 'white', marginLeft: '8px', marginTop: '2px'}}/>
                                            <Typography sx={{fontSize: '15px', marginRight: '10px', color: 'white'}}>50.5%</Typography>
                                        </Box>
                                    </Paper>    
                                </Grid> 
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Paper elevation={2} style={{maxWidth: 490, padding: "25px", marginLeft: "20px", borderRadius: "10px"}}>
                                        <Grid container justifyContent={"space-between"}>  
                                            <Grid item>
                                            <Typography variant="h5" sx={{color: "#0277bd", fontWeight: 550}}>₱100,000.00</Typography>
                                            
                                            </Grid>
                                            <Grid item>
                                            <Box   sx={{bgcolor: '#0277bd', borderRadius: 'px', height: '55px', padding: '13px', justifyContent: 'center' }}>
                                            <AccountBalanceWalletOutlinedIcon fontSize="medium" sx={{color: 'white', fontSize: '30px'}}/>
                                            </Box>
                                            </Grid>
                                        </Grid>
                                        <Typography variant="body1" color={'black'} sx={{marginTop: '-10px',}} letterSpacing={2} gutterBottom>Income</Typography>
                                        <Box sx={{bgcolor: '#0277bd', borderRadius: '5px', display:'flex', justifyContent: 'space-between', width: '95px', padding: '2px', marginTop: '2px'}}>
                                            <TrendingUpOutlinedIcon fontSize="small" sx={{color: 'white', marginLeft: '8px', marginTop: '2px'}}/>
                                            <Typography sx={{fontSize: '15px', marginRight: '10px', color: 'white'}}>50.5%</Typography>
                                        </Box>
                                    </Paper> 
                                </Grid>

                                <Grid item xs={12} lg={7} sx={{maxWidth: '100%'}}>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '18px', letterSpacing: '1px', marginTop: '55px', marginLeft: "30px" }}>
                                        Income
                                    </Typography>
                                    <Paper elevation={2} sx={{'@media (max-width: 100px)': {width: 'auto'}, height: '62vh', p: 3, marginTop: '10px', justifyContent: "center", alignItems: "center", borderRadius: 3, marginLeft: '20px' }}>
                                        <Chart options={income.options} series={income.series} type="area" height={500} />
                                    </Paper>
                                </Grid>
                                {/* Expenses Chart */}
                                <Grid item xs={12} lg={5} sx={{maxWidth: '100%'}}>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '18px', letterSpacing: '1px', marginTop: '55px', marginLeft: "30px" }}>
                                        Expenses
                                    </Typography>
                                    <Paper elevation={2} sx={{'@media (max-width: 100px)': {width: 'auto'}, height: '62vh', p: 2, marginTop: '10px', justifyContent: "center", alignItems: "center", borderRadius: 3, marginLeft: '20px' }}>
                                        <Chart options={expenses.options} series={expenses.series} type="bar" height={500} />
                                    </Paper>
                                </Grid>
                                {/* Room List */}
                                <Grid item xs={12} lg={7} sx={{maxWidth: '100%'}}>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '18px', letterSpacing: '1px', marginTop: '25px', marginLeft: "30px" }}>
                                        List of Rooms
                                    </Typography>
                                    <Paper elevation={2} sx={{'@media (max-width: 100px)': {width: 'auto'}, height: '62vh', marginTop: '10px', justifyContent: "center", alignItems: "center", borderRadius: 3, marginLeft: '20px' }}>
                                        <RoomList />
                                    </Paper>
                                </Grid>
                                {/* Customers */}
                                <Grid item xs={12} lg={5} sx={{maxWidth: '100%'}}>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '18px', letterSpacing: '1px', marginTop: '25px', marginLeft: "30px" }}>
                                        Customers
                                    </Typography>
                                    <Paper elevation={2} sx={{ '@media (max-width: 100px)': {width: 'auto'}, height: '62vh', marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 3, marginLeft: '20px' }}>
                                        <CustomerTable/>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
          </div>    
        </>
    )
}
