"use client"
import React from "react";  
import { useState } from "react";
import Navbar from "../navbar";
import { Box, Grid, Paper, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem,} from '@mui/material'
import { DataGrid  } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import Fade from '@mui/material/Fade';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import Sidebar from "../sidebar";

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




export default function BudgetTracker(){
    const [value, setValue] = useState('0');
    const [expenses, setExpenses] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };


    // const handleAddExpense = () => {
    //   const newExpense = {
    //     id: Math.random(),
    //     name: 'Expense Name',
    //     amount: '$100',
    //     description: 'Expense Description'
    //   };
    //   setExpenses([...expenses, newExpense]);
    // };

    const rows = [
        { id: 1, col1: 'Electric Bill', col2: '₱3,000', col3: 'Payment for electric bill', col4: 'April 1, 2024', col5: 'Apartment no.1'},
        { id: 2, col1: 'Water Bill', col2: '₱1,000', col3: 'Payment for water bill', col4: 'January 5, 2024', col5: 'Apartment no.3'},
        { id: 3, col1: 'Room Re-paint', col2: '5,000', col3: 'Re-paint', col4: 'April 5, 2024', col5: 'Apartment no.2'},
        { id: 4, col1: 'Room Renovation', col2: '₱10,000', col3: 'Renovation of rooms due to chuchuness', col4: 'January 23, 2024', col5: 'Apartment no.7'},
        { id: 5, col1: 'Electic Bill', col2: '₱3,000', col3: 'payment for electic bill', col4: 'March 5, 2024', col5: 'Apartment no.1'},
        { id: 6, col1: 'water Bill', col2: '₱1,000', col3: 'payment for electric bill', col4: 'April 5, 2024', col5: 'Apartment no.1'},
        { id: 7, col1: 'Ceiling Renovation', col2: '₱15,000', col3: 'renovation of cell in apartment no.4 due to chuchuness', col4: 'February 20, 2024', col5: 'Apartment no.4'},
    ]
    
    const column = [
        { field: 'col1', headerName: 'Bill Name', width: 150, p: 10, },
        { field: 'col2', headerName: 'Amount', width: 150, p: 10 },
        { field: 'col3', headerName: 'Description', width: 160, p: 12 },
        { field: 'col4', headerName: 'Due Date', width: 200, p: 10},
        { field: 'col5', headerName: 'Apartment Name', width: 170, p: 10 },
        { field: 'col6', headerName: 'Action', width: 160, justifyContent: 'center', marginLeft:100,
        renderCell: (params) => (
            <div>
                    <Button variant="contained" color="success" sx={{marginRight: 2, borderRadius: 10}} onClick={() => router.push(`../tenant/${params.row.id}`)}>
                        <DriveFileRenameOutlineOutlinedIcon/>
                    </Button>
                    {/* <Button variant="outlined" color="primary"  onClick={handleButtonClick}>
                        Action 1
                    </Button> */}
                    <Button variant="contained" color="error" sx={{borderRadius: 10}}>
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
                {/* <Grid item xs={12}> */}
                  <Grid container spacing={2}>  
                    <Grid item xs={12}  lg={8}>
                      <Paper elevation={3} style={{maxWidth: '100%', paddingTop: '20px',  justifyContent: "center", alignItems: "center", }}>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                              <Typography variant="h5" letterSpacing={2} sx={{marginLeft: '20px'}} >
                                  List of Expenses
                              </Typography>
                          </Grid>
                          <Grid item>
                            <Button variant="contained" onClick={handleOpen} sx={{background: '#673ab7','&:hover': {backgroundColor: '#9575cd',}, marginRight: '20px', borderRadius: '20px'}}>
                              <AddCircleIcon sx={{ marginRight: 1 }} />
                                Add Expenses
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
                                  <Typography variant="h5" letterSpacing={2} gutterBottom sx={{fontWeight: 550,}}>Apartment Bills</Typography>
                                  <TextField  required label="Bill Name" fullWidth margin="normal" />
                                  <TextField  required label="Amount" type="number" fullWidth margin="normal" />
                                  <TextField  required multiline maxRows={4} label="Description" fullWidth margin="normal" />
                                  <TextField  required label="Due Date" type="date" fullWidth margin="normal" />
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
                            sx={{ marginTop: '20px', justifyContent: 'center', textAlign: 'center' }} 
                            // getRowClassName={getRowClassName}

                        />
                      </Paper>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <Paper elevation={3} style={{ padding: '25px',}}>
                          <Grid container justifyContent={'space-between'}>  
                            <Grid item>
                              <Typography variant="body1" color={'gray'} letterSpacing={2} gutterBottom>Monthly Expense</Typography>
                            </Grid>
                            <Grid item>
                              <Box   sx={{bgcolor: '#ffb74d', borderRadius: '20px', height: '63px', padding: '12px', justifyContent: 'center' }}>
                              <MonetizationOnOutlinedIcon fontSize="large" sx={{color: 'white', fontSize: '40px'}}/>
                              </Box>
                            </Grid>
                          </Grid>
                          <Typography variant="h5" sx={{marginTop: '-28px', fontWeight: 550}}>38,000.00</Typography>
                          <Box sx={{bgcolor: '#ffb74d', borderRadius: '20px', display:'flex', justifyContent: 'space-between', width: '95px', padding: '2px', marginTop: '2px'}}>
                            <TrendingUpOutlinedIcon fontSize="small" sx={{color: 'white', marginLeft: '8px', marginTop: '2px'}}/>
                            <Typography sx={{fontSize: '15px', marginRight: '10px', color: 'white'}}>50.5%</Typography>
                          </Box>
                      </Paper>
                      <Paper elevation={3} style={{ padding: '25px', marginTop: '15px'}}>
                          <Grid container justifyContent={'space-between'}>  
                            <Grid item>
                              <Typography variant="body1" color={'gray'} letterSpacing={2} gutterBottom>Monthly Income</Typography>
                            </Grid>
                            <Grid item>
                              <Box   sx={{bgcolor: '#50C878', borderRadius: '20px', height: '63px', padding: '12px', justifyContent: 'center' }}>
                              <AccountBalanceWalletOutlinedIcon fontSize="large" sx={{color: 'white', fontSize: '40px'}}/>
                              </Box>
                            </Grid>
                          </Grid>
                          <Typography variant="h5" sx={{marginTop: '-28px', fontWeight: 550}}>45,000.00</Typography>
                          <Box sx={{bgcolor: '#66bb6a', borderRadius: '20px', display:'flex', justifyContent: 'space-between', width: '95px', padding: '2px', marginTop: '2px'}}>
                            <TrendingUpOutlinedIcon fontSize="small" sx={{color: 'white', marginLeft: '8px', marginTop: '2px'}}/>
                            <Typography sx={{fontSize: '15px', marginRight: '10px', color: 'white'}}>50.5%</Typography>
                          </Box>
                      </Paper>
                      <Paper elevation={3} style={{ padding: '25px', marginTop: '15px'}}>
                          <Grid container justifyContent={'space-between'}>  
                            <Grid item>
                              <Typography variant="body1" color={'gray'} letterSpacing={2} gutterBottom>Total Revenue</Typography>
                            </Grid>
                            <Grid item>
                              <Box   sx={{bgcolor: '#008080', borderRadius: '20px', height: '63px', padding: '12px', justifyContent: 'center' }}>
                              <SavingsOutlinedIcon fontSize="large" sx={{color: 'white', fontSize: '40px'}}/>
                              </Box>
                            </Grid>
                          </Grid>
                          <Typography variant="h5" sx={{marginTop: '-28px', fontWeight: 550}}>7,000.00</Typography>
                          <Box sx={{bgcolor: '#26a69a', borderRadius: '20px', display:'flex', justifyContent: 'space-between', width: '95px', padding: '2px', marginTop: '2px'}}>
                            <TrendingDownOutlinedIcon fontSize="small" sx={{color: 'white', marginLeft: '8px', marginTop: '2px'}}/>
                            <Typography sx={{fontSize: '15px', marginRight: '10px', color: 'white'}}>50.5%</Typography>
                          </Box>
                      </Paper>
                    </Grid>
                  </Grid>
                {/* </Grid> */}
              </Box>
            </Grid>
          </Box>
        </>
    )

}
