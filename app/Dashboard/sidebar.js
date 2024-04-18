"use client"
import * as React from 'react';
import { useState } from 'react';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme, Box, CssBaseline, Divider, IconButton, ListItem, ListItemIcon, Typography, Button } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { UseApp } from './statnav';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import Link from 'next/link';

import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import dynamic from 'next/dynamic';
import '/app/style.css';

const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(10)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      backgroundColor: '#2f4975', // Set your desired background color here
      color: '#fff', // Set your desired text color here
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': {
          ...openedMixin(theme),
          backgroundColor: '#fff', // Set your desired background color when open
          color: '#fff', // Set your desired text color when open 
        },
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': {
          ...closedMixin(theme),
          backgroundColor: '#fff', // Set your desired background color when closed
          color: '#fff', // Set your desired text color when closed
        },
      }),
    }),
  );
  
  

//   const DynamicHeader = dynamic(() => import('./apartment/[id]/page'), {
//     ssr: false
//   }) 

//   const DynamicHeader1 = dynamic(() => import('./home/page'), {
//     ssr: false
//   }) 
//   const DynamicHeader2 = dynamic(() => import('./apartment/page.js'), {
//     ssr: false
//   }) 
//   const DynamicHeader3 = dynamic(() => import('./budget/page'), {
//     ssr: false
//   }) 
 
export default function Sidebar() {
 
    const theme = useTheme();
    const open = UseApp ((state) => state.Nopen);

    // -------------INDAGDAG NA CODE PARA SA TABS--------------
    // const [value, setValue] = useState('0');
    const [mobileTabOpen, setMobileTabOpen] = useState(false);
   

    const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
    console.log(windowHeight);


    // -------------CLOSNG--------------

    return (
      <div className='bgcolor'>
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open} >
            
            <DrawerHeader>
            <IconButton>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            </DrawerHeader>

            <Divider />
            <TabContext >
                <TabList
                    orientation="vertical"
                    // value={value}
                    // onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider', marginTop:2.5,}}
                >
                    <Tab
                        component={Link}
                        href="/Dashboard/home"
                      sx={{mt:0.1, borderRadius: '15px',}}
                        label={
                           
                            <ListItem                 
                                sx={{
                                minHeight: 40,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                }}
                            >
                        
                            <React.Fragment sx={{ fontSize: 16, opacity: open ? 1 : 0,  alignItems: 'center' }}>
                                <ListItemIcon
                                    sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    }}
                                >

                                    <OtherHousesOutlinedIcon color="primary" sx={{ fontSize: 30, marginLeft: -2 }} />
                                
                             
                              </ListItemIcon>                   
                              <ListItemText primary="home" sx={{ color: 'Gray', alignItems: "center", opacity: open ? 1 : 0 }} />
                            </React.Fragment>
                          </ListItem> 
                        }
                    />
                    <Tab
                        component={Link}
                        href="/Dashboard/apartment"
                        sx={{mt:0.1, borderRadius: '15px',}}
                        label={
                            <ListItem                
                                sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                }}
                            >
                            <React.Fragment sx={{ fontSize: 16, opacity: open ? 1 : 0, display: 'flex', alignItems: 'center' }}>

                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >

                                    
                                    <ApartmentOutlinedIcon sx={{fontSize: 30, marginLeft:  -2, color: 'black' }}/>
                                </ListItemIcon>                   
                                <ListItemText primary="Apartment" sx={{color: 'black', alignItems: "center", opacity: open ? 1 : 0 }} />       
                            </React.Fragment>   
                            </ListItem>  
                        }
                   
                    />
                    <Tab
                     component={Link}
                     href="/Dashboard/budget"
                      sx={{mt:0.1, borderRadius: '15px',}}
                        label={
                            <ListItem                
                                sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                }}
                            >
                            <React.Fragment sx={{ fontSize: 16, opacity: open ? 1 : 0, display: 'flex', alignItems: 'center' }}>

                                <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                                >
                                    
                                    <GroupOutlinedIcon sx={{fontSize: 30, marginLeft:  -2, color: 'black' }}/>
                                </ListItemIcon>                   
                                    <ListItemText primary="Budget Tracking" sx={{color: 'black', alignItems: "center", opacity: open ? 1 : 0 }} />       
                            </React.Fragment>   
                            </ListItem>  
                        }
                   
                    />
                    <Tab/>
                </TabList>
            </TabContext>
        </Drawer>
        </Box>
      </div>
        

     

 

    );
}