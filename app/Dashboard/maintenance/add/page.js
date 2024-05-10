"use client"
import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../../navbar"
import Sidebar from "../../sidebar";
import {Grid, Box, Typography, Paper, TextField, InputLabel, FormControl, Select, MenuItem, Button, Breadcrumbs, Link} from "@mui/material";
import dayjs from 'dayjs';
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";






export default function AddMaintenance(){
    const [value, setValue] = useState(dayjs('2022-04-17'));

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
                                        <Link underline="hover" color="inherit" href="../home">
                                            Home
                                        </Link>
                                        {/* <Link
                                        underline="hover"
                                        color="inherit"
                                        href="/material-ui/getting-started/installation/"
                                        >
                                            Core
                                        </Link> */}
                                        <Typography color="text.primary">Add Maintenance</Typography>
                                    </Breadcrumbs>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1"  sx={{marginLeft: '20px', fontSize: '22px', fontWeight: 'bold', letterSpacing: '1px'}}>
                                        Add Maintenance Schedule
                                    </Typography>
                                    <hr style={{ width: '100%', backgroundColor: '#ecebee', height: '1px', marginTop: '20px',}} />
                                </Grid>  

                                <Grid item xs={12} lg={10} sx={{maxWidth: '100%', margin: 'auto', marginTop: '2rem'}}>
                                    <Paper elevation={3} style={{'@media (max-width: 100px)': {width: 'auto'}, marginLeft: '20px', paddingTop: '20px',  justifyContent: "center", alignItems: "center",}}>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="h6" letterSpacing={2} sx={{marginLeft: '32px'}} >
                                                   Add New Maintenance
                                                    
                                                </Typography>
                                            </Grid>
                                            
                                        
                                        </Grid>
                                        <Grid item>
                                            <hr style={{ width: '100%', backgroundColor: '#ecebee', height: '1px', marginTop: '10px',}} />
                                        </Grid>
                                        <Grid container spacing={3} sx={{padding: '30px', marginTop: "-3rem"}}>
                                            <Grid item xs={12} lg={6}>
                                            <FormControl fullWidth margin="normal">
                                                <InputLabel required>Select Apartment</InputLabel>
                                                <Select>
                                                    <MenuItem value={1}>Apartment no.1</MenuItem>
                                                    <MenuItem value={2}>Apartment no.2</MenuItem>
                                                    <MenuItem value={3}>Apartment no.3</MenuItem>    
                                                    <MenuItem value={4}>Apartment no.4</MenuItem>  
                                                    <MenuItem value={5}>Apartment no.5</MenuItem>  
                                                    <MenuItem value={6}>Apartment no.6</MenuItem>  
                                                    <MenuItem value={7}>Apartment no.7</MenuItem>  
                                                    <MenuItem value={8}>Apartment no.8</MenuItem>  
                                                </Select>
                                            </FormControl>
                                            </Grid>
                                            <Grid item xs={12} lg={6}>
                                                <FormControl fullWidth margin="normal">
                                                    <InputLabel required>Select Room</InputLabel>
                                                    <Select>
                                                        <MenuItem value={1}>Room no.1</MenuItem>
                                                        <MenuItem value={2}>Room no.2</MenuItem>
                                                        <MenuItem value={3}>Room no.3</MenuItem>    
                                                        <MenuItem value={4}>Room no.4</MenuItem>  
                                                        <MenuItem value={5}>Room no.5</MenuItem>  
                                                        <MenuItem value={6}>Room no.6</MenuItem>  
                                                        <MenuItem value={7}>Room no.7</MenuItem>  
                                                        <MenuItem value={8}>Room no.8</MenuItem>  
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} lg={12} sx={{marginTop: '-1rem'}}>
                                                <TextField id="taskname" label="Task Name" variant="outlined" fullWidth margin="normal" />
                                            </Grid>
                                            <Grid item xs={12} lg={12} sx={{marginTop: '-1rem'}}>
                                                <TextField id="estimatedamount" label="Estamated Amount" type="number" variant="outlined" fullWidth margin="normal" />
                                            </Grid>
                                            <Grid item xs={12} lg={12} sx={{marginTop: '-1rem'}}>
                                                <TextField id="description" label="Task Description" variant="outlined" multiline maxRows={5} fullWidth margin="normal" />
                                            </Grid>
                                            <Grid item xs={12} lg={4} sx={{marginTop: '-0.1rem'}}>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                                                        <DatePicker
                                                        label="Start Date"
                                                        value={value}
                                                        onChange={(newValue) => setValue(newValue)}
                                                        sx={{width: '100%'}}
                                                        />
                                                    </DemoContainer>
                                                </LocalizationProvider>
                                            </Grid>
                                            <Grid item xs={12} lg={4} sx={{marginTop: '-0.1rem'}}>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                                                        <DatePicker
                                                        label="End Date"
                                                        value={value}
                                                        onChange={(newValue) => setValue(newValue)}
                                                        sx={{width: '100%'}}
                                                        />
                                                    </DemoContainer>
                                                </LocalizationProvider>
                                            </Grid>
                                            <Grid item xs={12} lg={4} sx={{marginTop: '-0.6rem'}}>
                                                <FormControl fullWidth margin="normal">
                                                    <InputLabel required>Status</InputLabel>
                                                    <Select>
                                                        <MenuItem value={1}>To Do</MenuItem>
                                                        {/* <MenuItem value={2}>Room no.2</MenuItem>
                                                        <MenuItem value={3}>Room no.3</MenuItem>     */}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            
                                            <Grid item xs={12} lg={2}>
                                                <Button variant="contained"
                                                    sx={{background: '#673ab7', width: '100%', padding: '10px',  fontSize: '18px','&:hover': {backgroundColor: '#9575cd',}, }}
                                                    // onClick={() => router.push('/Dashboard/login')}
                                                    // href='/Dashboard/login'
                                                >
                                                    Create
                                                </Button>  
                                            </Grid>
                                            <Grid item xs={12} lg={2}>
                                                <Button elevation={3} variant="outlined"
                                                    sx={{background: '#ffffff', borderColor: 'black', color: 'black', width: '100%', padding: '10px',  fontSize: '18px','&:hover': {backgroundColor: '#eeeeee', borderColor: 'black'}, }}
                                                    // onClick={() => router.push('/Dashboard/login')}
                                                    // href='/Dashboard/login'
                                                >
                                                    Cancel
                                                </Button>  
                                            </Grid>
                                        </Grid>
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
