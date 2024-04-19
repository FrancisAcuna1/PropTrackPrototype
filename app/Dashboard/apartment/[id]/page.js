'use client'
import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from "../../navbar";
import {Button, Grid, Box, Typography, TextField, FormControl, Select, MenuItem, InputLabel, Paper, Chip} from '@mui/material';
import { DataGrid  } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import Fade from '@mui/material/Fade';
import '/app/style.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';

import Sidebar from '../../sidebar';



  const Backdrop = React.forwardRef((props, ref) => {
    const { open, ...other } = props;
    return (
      <Fade in={open}>
        <div ref={ref} {...other} />
      </Fade>
    );
  });
  
  Backdrop.propTypes = {
    open: PropTypes.bool,
  };
  
  const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  
  const Modal = styled(BaseModal)`
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
  const StyledBackdrop = styled(Backdrop)`
    z-index: -1;
    position: fixed;
    inset: 0;
    background-color: rgb(0 0 0 / 0.5);
    -webkit-tap-highlight-color: transparent;
  `;
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
  };
  
  const ModalContent = styled('div')(
    ({ theme }) => css`
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 500;
      text-align: start;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow: hidden;
      background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border-radius: 8px;
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      box-shadow: 0 4px 12px
        ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
      padding: 24px;
      color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};
  
      & .modal-title {
        margin: 0;
        line-height: 1.5rem;
        margin-bottom: 8px;
      }
  
      & .modal-description {
        margin: 0;
        line-height: 1.5rem;
        font-weight: 400;
        color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
        margin-bottom: 4px;
      }
    `,
  );
  
  const TriggerButton = styled(Button)(
    ({ theme }) => css`
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.5;
      padding: 8px 16px;
      border-radius: 8px;
      transition: all 150ms ease;
      cursor: pointer;
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  
      &:hover {
        background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
        border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
      }
  
      &:active {
        background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
      }
  
      &:focus-visible {
        box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
        outline: none;
      }
    `,
  );



export default function RoomsComponent(){
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [selectedTab, setSelectedTab] = React.useState('rooms'); // default tab

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const { data } = useDemoData({
    //     dataSet: 'Commodity',
    //     rowLength: 20,
    //     maxColumns: 20,
    // });
    const handleTabChange = (newValue) => {
      setSelectedTab(newValue);
    };

    const handleButtonClick = () => {
        // Navigate to a new URL
        history.push(`/Dashboard/apartment/[id]/${params.row.id}`);
    };

    const rows = [
        { id: 1, col1: 'No.1', col2: '₱3,000', col3: 'Occupied', col4: 'Edmar  Manalo', col5: '09990291325'},
        { id: 2, col1: 'No.2', col2: '₱3,000', col3: 'Available', col4: 'None', col5: 'None'},
        { id: 3, col1: 'No.3', col2: '₱3,000', col3: 'Occupied', col4: 'Vector Magtangol', col5: '09530291323'},
        { id: 4, col1: 'No.4', col2: '₱3,000', col3: 'Available', col4: 'None', col5: 'None'},
        { id: 5, col1: 'No.5', col2: '₱3,000', col3: 'Available', col4: 'None', col5: 'None'},
        { id: 6, col1: 'No.6', col2: '₱3,000', col3: 'Occupied', col4: 'KaIzer Magsaysay', col5: '09690291365'},
        { id: 7, col1: 'No.7', col2: '₱3,000', col3: 'Available', col4: 'None', col5: 'None'},
    ]
    
    const column = [
        { field: 'col1', headerName: 'Room No.', width: 150, p: 10, },
        { field: 'col2', headerName: 'Monthly Rate', width: 150, p: 10 },
        { field: 'col3', headerName: 'Status', width: 160, p: 12,  renderCell: (params) => (
          <Chip 
              label={params.value} 
              color={params.value === 'Available' ? 'primary' : 'warning'} 
          />
          ),
       },
        { field: 'col4', headerName: 'Tenant Name', width: 200, p: 10},
        { field: 'col5', headerName: 'Tenant Contact No.', width: 170, p: 10 },
        { field: 'col6', headerName: 'Action', width: 200, justifyContent: 'center', marginLeft:'100px',
        renderCell: (params) => (
            <div>
                    <Button variant="contained" color="success" sx={{marginRight: 2}}>
                        <DriveFileRenameOutlineOutlinedIcon/>
                    </Button>
                    {/* <Button variant="contained" color="success" sx={{marginRight: 2}} onClick={() => router.push(`Dashboard/apartment/[id]/tenant/${params.row.id}`)}>
                        <DriveFileRenameOutlineOutlinedIcon/>
                    </Button> */}
                    <Button variant="contained" color="error">
                        <DeleteOutlineIcon/>
                    </Button>
            </div>
                                                                                                 
        ),
        }, 
    ]
    
      
    return(
        <>
            <Navbar/>
            <Box sx={{ flexGrow: '1', display: 'flex', paddingRight: '1%',}}>
            <Sidebar/>
            <Grid container spacing={2} sx={{ marginTop: '6rem', marginX: '1rem', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ width: '100%', marginBottom: '3rem',}}>
                
                  <Grid container spacing={2}>  
                    <Grid item xs={12}>
                      <Paper sx={{maxWidth: '65%', margin: 'auto', paddingTop: '20px'}}>
                          <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                              <Typography variant="h5" letterSpacing={2} sx={{marginLeft: '20px'}} >
                                List of Rooms
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Button variant="contained" onClick={handleOpen} sx={{background: '#673ab7','&:hover': {backgroundColor: '#9575cd',}, marginLeft: '20px', marginRight: '20px', borderRadius: '20px'}}>
                                <AddCircleIcon sx={{ marginRight: 1 }} />
                                  Add Rooms
                              </Button>
                              <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                slots={{ backdrop: StyledBackdrop }}
                              >
                                <Fade in={open}>
                                  <ModalContent sx={style}>
                                    <Typography variant="h5" letterSpacing={2} gutterBottom sx={{fontWeight: 500,}}>Add Rooms</Typography>
                                    <TextField required label="Room No." fullWidth margin="normal" />
                                    <TextField required label="Monthly Rate" type="number" fullWidth margin="normal" />
                                    <FormControl fullWidth margin="normal">
                                    <InputLabel required>Status</InputLabel>
                                    <Select>
                                        <MenuItem value={1}>Avialable</MenuItem>
                                        <MenuItem hidden={true} value={2}>Occupied</MenuItem>
                                    </Select>
                                    </FormControl>
                                    <TextField id="outlined-read-only-input" label="Tenant Name" type='text' defaultValue="Hello World" InputProps={{readOnly: true,}}/>
                                    <TextField  id="contact" label="Tenant Contact No." defaultValue="Tenant Contact No."  variant="outlined" InputProps={{readOnly: true,}} fullWidth margin="normal"/>
                                    <Button variant="contained" fullWidth style={{ fontSize: '16px', marginTop: '10px', borderRadius: '20px', padding:'10px', background: '#673ab7','&:hover': {backgroundColor: '#9575cd',}, }}>Submit</Button>
                                  </ModalContent>
                                </Fade>
                              </Modal>
                            </Grid>
                          </Grid>
                          <DataGrid 
                            rows={rows} 
                            columns={column}   
                            initialState={{
                                pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                            sx={{maxWidth: '100%', marginTop: '20px', justifyContent: 'center', textAlign: 'center' }} 
                            // getRowClassName={getRowClassName}

                          />
                      </Paper>
                    </Grid>
                  </Grid>
               
              </Box>
            </Grid>
          </Box>
            
            
        
        </>
    )
}
