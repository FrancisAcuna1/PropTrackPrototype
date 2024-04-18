'use client'
import React from "react"
import Navbar from "../navbar"
import {Grid, Card, CardActionArea, CardHeader, CardContent, ListItemIcon, Box, Typography,} from '@mui/material';
import GroupOutlinedIcon from '@mui/icons-material/Group';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import NightShelterOutlinedIcon from '@mui/icons-material/NightShelterOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import Sidebar from "../sidebar";

export default function home (){


    return (
        <>
            <Navbar/>
            <Box sx={{ flexGrow: '1', display: 'flex', paddingRight: '1%',}}>
            <Sidebar/>
            <Grid container spacing={2} sx={{ marginTop: '6rem', marginX: '1rem', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ width: '100%', marginBottom: '3rem',}}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>  
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card  sx={{ maxWidth: 390, marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 5, marginLeft: '20px',}} elevation={2}>
                                <CardActionArea  >
                                    <React.Fragment sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                        <CardHeader
                                            title="5000"
                                            component="div"
                                            sx={{ color: 'black', fontWeight: 'bold', fontSize: '10px', height: '5px', marginLeft: 2, marginTop: '30px' }}
                                            
                                        />
                                        <ListItemIcon
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginTop: '-6px',
                                                width: '100%',
                                            }}
                                        >
                                            <Box sx={{bgcolor: '#6a1b9a', borderRadius: '10px', height: '60px',  display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15px', marginRight: '30px', marginTop: '-20px', marginLeft: '80%' }}>
                                                <GroupOutlinedIcon fontSize={'large'} sx={{color: 'white', justifyContent: 'center'}}/>
                                            </Box>
                                        </ListItemIcon>
                                    </React.Fragment>
                                    <Box sx={{marginTop: '-35px',}}>
                                    <CardContent>
                                        <Typography variant="body1" sx={{fontSize: '18px', color:'gray', marginLeft:'15px'}}>
                                            Tenants
                                        </Typography>
                                    </CardContent>
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </Grid> 
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 390, marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 5, marginLeft: '20px',}} elevation={2}>
                            <CardActionArea  >
                                <React.Fragment sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                    <CardHeader
                                        title="10"
                                        component="div"
                                        sx={{ color: 'black', fontWeight: 'bold', fontSize: '10px', height: '5px', marginLeft: 2, marginTop: '30px' }}
                                    />
                                    <ListItemIcon
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginTop: '-6px',
                                            width: '100%',
                                        }}
                                    >
                                        <Box sx={{borderRadius: '10px', height: '60px', bgcolor: '#00796b', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15px', marginRight: '30px', marginTop: '-20px', marginLeft: '80%' }}>
                                            <ApartmentOutlinedIcon fontSize={'large'} sx={{color: 'white', justifyContent: 'center'}}/>
                                        </Box>
                                    </ListItemIcon>
                                </React.Fragment>
                                <Box sx={{marginTop: '-35px'}}>
                                    <CardContent>
                                        <Typography variant="body1" sx={{fontSize: '18px', color:'gray', marginLeft: '15px',}}>
                                            Apartment
                                        </Typography>
                                    </CardContent>
                                </Box>
                                </CardActionArea>
                            </Card>
                        </Grid>  
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card sx={{ maxWidth: 390, marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 5, marginLeft: '20px',}} elevation={2}>
                                <CardActionArea  >
                                    <React.Fragment sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                        <CardHeader
                                            title="500"
                                            component="div"
                                            sx={{ color: 'black', fontWeight: 'bold', fontSize: '10px', height: '5px', marginLeft: 2, marginTop: '30px' }}
                                        />
                                        <ListItemIcon
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginTop: '-6px',
                                                width: '100%',
                                            }}
                                        >
                                            <Box sx={{ borderRadius: '10px', height: '60px', bgcolor: '#ff3d00', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15px', marginRight: '30px', marginTop: '-20px', marginLeft: '80%' }}>
                                                <NightShelterOutlinedIcon fontSize={'large'} sx={{color: 'white', justifyContent: 'center'}}/>
                                            </Box>
                                        </ListItemIcon>
                                    </React.Fragment>
                                    <Box sx={{marginTop: '-35px'}}>
                                        <CardContent>
                                            <Typography variant="body1" sx={{color: 'gray', fontSize: '18px', marginLeft: '15px'}}>
                                                Rooms
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </Grid> 
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card sx={{ maxWidth: 390, marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 5, marginLeft: '20px',}} elevation={2}>
                                <CardActionArea  >
                                    <React.Fragment sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                        <CardHeader
                                            title="100,000.00"
                                            component="div"
                                            sx={{ color: 'black', fontWeight:'bold', fontSize: '10px', height: '5px', marginLeft: 2, marginTop: '30px' }}
                                        />
                                        <ListItemIcon
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginTop: '-6px',
                                                width: '100%',
                                            }}
                                        >
                                            <Box sx={{ borderRadius: '10px', height: '60px', bgcolor: '#0277bd', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15px', marginRight: '30px', marginTop: '-20px', marginLeft: '80%' }}>
                                                <AccountBalanceWalletOutlinedIcon fontSize={'large'} sx={{color: 'white', justifyContent: 'center'}}/>
                                            </Box>
                                        </ListItemIcon>
                                    </React.Fragment>
                                    <Box sx={{marginTop: '-35px'}}>
                                        <CardContent>
                                            <Typography variant="body1" sx={{color: 'gray', fontSize: '18px', marginLeft: '15px'}}>
                                                Income
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid xs={12} lg={7}>
                            <Card sx={{ maxWidth: '100%', height: '62vh',   marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 5, marginLeft: '40px',}} elevation={2}>
                                <CardActionArea>
                                    <CardContent>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid xs={12} lg={5} >
                            <Card Card sx={{ maxWidth: '100%', height: '62vh',  marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 5, marginLeft: '40px',}} elevation={2}>
                                <CardActionArea>
                                    <CardContent>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>    
                    </Grid>

                    

                </Grid>
              </Box>
            </Grid>
          </Box>     
        </>
    )
}
