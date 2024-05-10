"use client"
import React from "react";
import Navbar from "../navbar"
import { Box, Grid, Paper, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, Breadcrumbs, Link} from "@mui/material";
import Sidebar from "../sidebar";
import { DataGrid  } from "@mui/x-data-grid";
export default function RequestMaintenance (){
    const rows = [
        { id: 1, col1: 'Victor Magtangol', col2: '09998273123', col3: 'Barado ang Gripo', col4: 'April 1, 2024', col5: 'Apartment no.1', col6: 'Room no.1'},
        { id: 2, col1: 'Kuya Cardo', col2: '09987231251', col3: 'Wara Ilaw', col4: 'January 5, 2024', col5: 'Apartment no.3', col6: 'Room no.2'},
        { id: 3, col1: 'Tom Escobal', col2: '09369223915', col3: 'Raot ang switch', col4: 'April 5, 2024', col5: 'Apartment no.2', col6: 'Room no.3'},
        { id: 4, col1: 'kim Denso', col2: '09887717923', col3: 'basta mayroot', col4: 'January 23, 2024', col5: 'Apartment no.7', col6: 'Room no.1'},
        { id: 5, col1: 'Jokim Alindogan', col2: '09092391901', col3: 'Raot ang pinto', col4: 'March 5, 2024', col5: 'Apartment no.1', col6: 'Room no.4'},
        { id: 6, col1: 'Ian Astor', col2: '09292391501', col3: 'Wa  ra Wifi', col4: 'April 5, 2024', col5: 'Apartment no.1', col6: 'Room no.2'},
        { id: 7, col1: 'Maria Clare Bueno', col2: '09892391701', col3: 'May Ipis sa CR', col4: 'February 20, 2024', col5: 'Apartment no.4', col6: 'Room no.3'},
    ]
    
    const column = [
        { field: 'col1', headerName: 'Tenant Name', width: 180, p: 10, },
        { field: 'col2', headerName: 'Phone Number', width: 180, p: 10 },
        { field: 'col3', headerName: 'Request', width: 200, p: 12 },
        { field: 'col4', headerName: 'Date Requested', width: 200, p: 12 },
        { field: 'col5', headerName: 'Apartment Name', width: 200, p: 10},
        { field: 'col6', headerName: 'Room Name', width: 170, p: 10 },
        { field: 'col7', headerName: 'Action', width: 220, justifyContent: 'center', marginLeft:100,
        renderCell: (params) => (
            <div>
                    <Button variant="contained" color="success" sx={{marginRight: 2, borderRadius: 10}} >
                        Accept
                        {/* <DriveFileRenameOutlineOutlinedIcon/> */}
                    </Button>
                    {/* <Button variant="outlined" color="primary"  onClick={handleButtonClick}>
                        Action 1
                    </Button> */}
                    <Button variant="contained" color="error" sx={{borderRadius: 10}}>
                        Decline
                        {/* <DeleteOutlineIcon/> */}
                    </Button>
            </div>
                                                              
                                                              
        ),
        }, 
    ]
      

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
                                        <Typography color="text.primary">Maintenance Request</Typography>
                                    </Breadcrumbs>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1"  sx={{marginLeft: '20px', fontSize: '22px', fontWeight: 'bold', letterSpacing: '1px'}}>
                                        Maintenance Request
                                    </Typography>
                                    <hr style={{ width: '100%', backgroundColor: '#ecebee', height: '1px', marginTop: '20px',}} />
                                </Grid>   
                                
                                {/* Room List */}
                                <Grid item xs={12} lg={11} sx={{maxWidth: '100%', margin: 'auto', marginTop: '2rem'}}>
                                    <Paper elevation={3} style={{'@media (max-width: 100px)': {width: 'auto'}, marginLeft: '20px', paddingTop: '20px',  justifyContent: "center", alignItems: "center",}}>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="h6" letterSpacing={2} sx={{marginLeft: '20px'}} >
                                                    List of Maintenance Request
                                                </Typography>
                                            </Grid>
                                        
                                        </Grid>
                                        <DataGrid 
                                            rows={rows} 
                                            columns={column}   
                                            initialState={{
                                                pagination: {
                                                paginationModel: { page: 0, pageSize: 10 },
                                                },
                                            }}
                                            pageSizeOptions={[5, 10]}
                                            checkboxSelection
                                            sx={{ marginTop: '20px', justifyContent: 'center', textAlign: 'center' }} 
                                            // getRowClassName={getRowClassName}

                                        />
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
