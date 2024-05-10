"use client"
import * as React from 'react';
import { useState } from 'react';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme, Box, CssBaseline, Divider, IconButton, ListItem, ListItemIcon, Typography, Button, useMediaQuery, Menu, MenuItem, Submenu } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { UseApp } from './statnav';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ConstructionIcon from '@mui/icons-material/Construction';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Link from 'next/link';

import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import dynamic from 'next/dynamic';
import '/app/style.css';



const fontTheme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',  // Use Poppins as the font family
  },
});

const drawerWidth = 260;

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
  width: `calc(${theme.spacing(0)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(0)} + 1px)`,
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

const Overlay = styled('div')(({ theme, open }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
  zIndex: open ? theme.zIndex.drawer - 1 : -1,
  transition: theme.transitions.create('z-index', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
}));


// const DynamicHeader = dynamic(() => import('./home/page'), {
//   ssr: false
// }) 
// const DynamicHeader2 = dynamic(() => import('./Post/page'), {
//   ssr: false
// }) 
// const DynamicHeader3 = dynamic(() => import('./Users/page'), {
//   ssr: false
// }) 

export default function Sidebar() {
  const theme = useTheme();
  const open = UseApp((state) => state.Nopen);
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeTab, setActiveTab] = useState("/Dashboard/home");
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const handletabClick = (href) => {
    setActiveTab(href);
  }


  const Drawerlist = (
    <TabContext >
      <TabList
        orientation="vertical"
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', marginTop: 2.5, }}
      >
        <Typography variant='body2' sx={{mt: 2, color: '#494d4f',fontSize: '16px', marginLeft: '30px'}}>
          Menu
        </Typography>
        <Tab
          className="tab-item"
          onclick={() => handletabClick("/Dashboard/home")}
          selected={activeTab === "/Dashboard/home"}
          component={Link}
          href="/Dashboard/home"
          sx={{  borderRadius: '20px', padding: '5px', }}
          label={
            <ListItem
            
              sx={{
                minHeight: 40,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <React.Fragment sx={{ fontSize: 16, opacity: open ? 1 : 0, alignItems: 'center' }}>
                <ListItemIcon
                  className="tab-icon"
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <HomeOutlinedIcon sx={{color: '#6b43af', fontSize: 27, marginLeft: 0.1 }} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ color: '#6b43af', alignItems: "center", opacity: open ? 1 : 0, fontSize: 'inherit', fontWeight: 'bold', textTransform: 'none' }} />
              </React.Fragment>
            </ListItem>
          }
        />
        <Tab
          className="tab-item"
          onclick={() => handletabClick("/Dashboard/apartment")}
          selected={activeTab === "/Dashboard/apartment"}
          component={Link}
          href="/Dashboard/apartment"
          sx={{ mt: 0.1, borderRadius: '15px', padding: '5px'}}
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
                  className="tab-icon"
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <ApartmentOutlinedIcon sx={{color: '#3b3d3e', fontSize: 27, marginLeft: 0.1, }} />
                </ListItemIcon>
                <ListItemText primary="Apartment" sx={{ color: '#2d2e2f', alignItems: "center", opacity: open ? 1 : 0, fontSize: 'inherit', fontWeight: 'normal', textTransform: 'none' }} />
              </React.Fragment>
            </ListItem>
          }
        />
        <Tab
          className="tab-item"
          component={Link}
          href="/Dashboard/budget"
          sx={{ mt: 0.1, borderRadius: '15px', padding: '5px' }}
          label={
            <ListItem
              className="tab-icon"
              sx={{
                minHeight: 20,
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
                  <BusinessCenterOutlinedIcon sx={{ fontSize: 27, marginLeft: 0.1, color: '#3b3d3e' }} />
                </ListItemIcon>
                <ListItemText primary="Budget" sx={{ color: '#2d2e2f', alignItems: "center", opacity: open ? 1 : 0, fontSize: 'inherit', fontWeight: 'normal', textTransform: 'none' }} />
              </React.Fragment>
            </ListItem>
          }
        />
        <Typography variant='body2' sx={{mt: 3, color: '#494d4f',fontSize: '15px', marginLeft: '30px'}}>
          Maintenance
        </Typography>
        <Tab
          className="tab-item"
          component={Link}
          href="/Dashboard/maintenance"
          sx={{ mt: 0.1, borderRadius: '15px', padding: '5px' }}
          label={
            <ListItem
              className="tab-icon"
              sx={{
                minHeight: 20,
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
                  <ConstructionIcon sx={{ fontSize: 27, marginLeft: 0.1, color: '#3b3d3e' }} />
                </ListItemIcon>
                <ListItemText primary="Maintenance Request" sx={{ color: '#2d2e2f', alignItems: "center", opacity: open ? 1 : 0, fontSize: 'inherit', fontWeight: 'normal', textTransform: 'none' }} />
              </React.Fragment>
            </ListItem>
          }
        />
        <Tab
          className="tab-item"
          component={Link}
          href="/Dashboard/maintenance/add"
          sx={{ mt: 0.1, borderRadius: '15px', padding: '5px' }}
          label={
            <ListItem
              className="tab-icon"
              sx={{
                minHeight: 20,
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
                  <AddCircleOutlineIcon sx={{ fontSize: 27, marginLeft: 0.1, color: '#3b3d3e' }} />
                </ListItemIcon>
                <ListItemText primary="Add Maintenance" sx={{ color: '#2d2e2f', alignItems: "center", opacity: open ? 1 : 0, fontSize: 'inherit', fontWeight: 'normal', textTransform: 'none' }} />
              </React.Fragment>
            </ListItem>
          }
        />
        <Tab
          className="tab-item"
          component={Link}
          href="/Dashboard/maintenance/schedule"
          sx={{ mt: 0.1, borderRadius: '15px', padding: '5px' }}
          label={
            <ListItem
              className="tab-icon"
              sx={{
                minHeight: 20,
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
                  <CalendarMonthIcon sx={{ fontSize: 27, marginLeft: 0.1, color: '#3b3d3e' }} />
                </ListItemIcon>
                <ListItemText primary="Schedule" sx={{ color: '#2d2e2f', alignItems: "center", opacity: open ? 1 : 0, fontSize: 'inherit', fontWeight: 'normal', textTransform: 'none' }} />
              </React.Fragment>
            </ListItem>
          }
        />
        <Tab
          className="tab-item"
          component={Link}
          href="/Dashboard/customer"
          sx={{ mt: 0.1, borderRadius: '15px', padding: '5px' }}
          label={
            <ListItem
              className="tab-icon"
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
                  <GroupOutlinedIcon sx={{ fontSize: 27, marginLeft: 0.1, color: '#3b3d3e' }} />
                </ListItemIcon>
                <ListItemText primary="Customers" sx={{ color: '#2d2e2f', alignItems: "center", opacity: open ? 1 : 0, fontSize: 'inherit', fontWeight: 'normal', textTransform: 'none' }} />
              </React.Fragment>
            </ListItem>
          }
        />
      </TabList>
    </TabContext>
  )

  return (
    <ThemeProvider theme={fontTheme}>
    <div className='bgcolor'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open} onClose={toggleDrawer(false)}>

          <DrawerHeader>
            <IconButton>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>

          <Divider />
          {Drawerlist}
        </Drawer>
        {isMobileView && <Overlay open={open} />}
        <Box component="main" sx={{ flexGrow: 0, bgcolor: 'background.default',}}>
          {/* Your main content goes here */}
        </Box>
      </Box>
    </div>
    </ThemeProvider>
  );
}
