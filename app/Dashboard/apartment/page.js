'use client'
import  React from 'react';
import { useState } from 'react';
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import {Button, Grid, Box, Typography, TextField, Paper} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HouseIcon from '@mui/icons-material/House';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { styled, css, } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import Fade from '@mui/material/Fade';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


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

export default function AddApartment(){
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
          <Navbar/>
          <Box sx={{ flexGrow: '1', display: 'flex', paddingRight: '1%',}}>
            <Sidebar/>
            <Grid container spacing={2} sx={{ marginTop: '6rem', marginX: '1rem', flexDirection: 'column' }}>
              <Box sx={{ width: '100%', marginBottom: '3rem',}}>
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row',  justifyContent: 'center', alignItems: 'flex-start', alignItems: 'center', marginBottom: '20px', }}>
                  <Typography variant="h1" color={'black'} sx={{ fontWeight: 500, fontSize: 28, letterSpacing: 3, marginBottom: isMobile ? '20px' : '0', marginLeft: isMobile ? '-9%' : '0', }}>
                    List of Apartment
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignItems: isMobile ? 'flex-start' : 'flex-end', marginLeft: isMobile ? '10px' : 'auto'  }}>
                    <Button variant="contained" onClick={handleOpen} sx={{background: '#673ab7','&:hover': {backgroundColor: '#9575cd',}, marginRight: '20px', borderRadius: '20px', p:1.5, }}>
                      <AddCircleIcon sx={{ marginRight: 1 }} />
                        Add Apartment
                    </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransitio
                        slots={{ backdrop: StyledBackdrop }}
                    >
                      <Fade in={open}>
                          <ModalContent sx={style}>
                              <Typography variant='h1' letterSpacing={3} sx={{ fontSize: '20px' }}>Add Apartment</Typography>
                              <TextField  required id="firstname" label="Apartment Name" variant="outlined" fullWidth margin="normal" />
                              <TextField  required id="firstname" label="Street" variant="outlined" fullWidth margin="normal" />
                              <TextField  required id="firstname" label="Barangay" variant="outlined" fullWidth margin="normal" />
                              <TextField  required id="outlined-read-only-input" label="Municipality" type='text' defaultValue="Sorsogon City" InputProps={{readOnly: true}} fullWidth margin="normal" />
                              <Button variant='contained' sx={{background: '#673ab7','&:hover': {backgroundColor: '#9575cd',}, padding: '8px', fontSize: '16px' }}>Add </Button>
                          </ModalContent>
                      </Fade>
                    </Modal>
                  </Box>
                </Grid>
        
                <Grid item xs={12}>
                  <Grid container spacing={2} justifyContent={'space-between'}>  
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Paper elevation={3} style={{ padding: '25px', marginTop: '15px', borderRadius: '20px'}}>
                          <Grid container justifyContent={'space-between'}>  
                            <Grid item>
                                <Typography variant="body1" color={'black'} sx={{fontWeight: 550, fontSize: 24}} letterSpacing={2} gutterBottom>Apartment no.1 </Typography>
                            </Grid>
                            <Grid item>
                                <Box sx={{bgcolor: '#b0bec5', borderRadius: '10px', height: '50px', padding: '8px', justifyContent: 'center' }}>
                                    <HouseIcon fontSize={'large'} sx={{color: 'white', justifyContent: 'center'}}/>
                                </Box>
                            </Grid>
                            <Typography variant="body1" color={'gray'} sx={{fontSize: 15, mt: 2}} letterSpacing={2} gutterBottom>Magsaysay st. Brgy Cogon, Sorsogon City</Typography>
                            <Box>
                                <Button href='/Dashboard/apartment/[id]' variant="contained" sx={{background: '#43a047', '&:hover':{background: '#66bb6a'},  margin: '10px', marginLeft: -1}}>View Rooms</Button>
                            </Box>
                          </Grid>
                        </Paper>
                      </Grid>
                      <Grid  item xs={12} sm={6} md={4} lg={3}>
                        <Paper  elevation={3} style={{ padding: '25px', marginTop: '15px', borderRadius: '20px'}}>
                          <Grid container justifyContent={'space-between'}>  
                            <Grid item>
                              <Typography variant="body1" color={'black'} sx={{fontWeight: 550, fontSize: 24}} letterSpacing={2} gutterBottom>Apartment no.2 </Typography>
                            </Grid>
                            <Grid item>
                              <Box   sx={{bgcolor: '#b0bec5', borderRadius: '10px', height: '50px', padding: '8px', justifyContent: 'center' }}>
                              <HouseIcon fontSize={'large'} sx={{color: 'white', justifyContent: 'center'}}/>
                              </Box>
                            </Grid>
                              <Typography variant="body1" color={'gray'} sx={{fontSize: 15, mt: 2}} letterSpacing={2} gutterBottom>Magsaysay st. Brgy Cogon, Sorsogon City</Typography>
                              <Box>
                                <Button href='/Dashboard/apartment/[id]' variant="contained" sx={{background: '#43a047', '&:hover':{background: '#66bb6a'},  margin: '10px', marginLeft: -1}}>View Rooms</Button>
                                {/* <Button onClick={router.push('/Dashboard/apartment/[id]')} variant="contained" sx={{background: '#43a047', '&:hover':{background: '#66bb6a'},  margin: '20px', marginLeft: '25px'}}>View Rooms</Button> */}
                              </Box>
                          </Grid>
                        </Paper>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Paper elevation={3} style={{ padding: '25px', marginTop: '15px', borderRadius: '20px'}}>
                          <Grid container justifyContent={'space-between'}>  
                            <Grid item>
                                <Typography variant="body1" color={'black'} sx={{fontWeight: 550, fontSize: 24}} letterSpacing={2} gutterBottom>Apartment no.3 </Typography>
                            </Grid>
                            <Grid item>
                                <Box sx={{bgcolor: '#b0bec5', borderRadius: '10px', height: '50px', padding: '8px', justifyContent: 'center' }}>
                                    <HouseIcon fontSize={'large'} sx={{color: 'white', justifyContent: 'center'}}/>
                                </Box>
                            </Grid>
                            <Typography variant="body1" color={'gray'} sx={{fontSize: 15, mt: 1}} letterSpacing={2} gutterBottom>Magsaysay st. Brgy Cogon, Sorsogon City</Typography>
                            <Box>
                                <Button href='/Dashboard/apartment/[id]' variant="contained" sx={{background: '#43a047', '&:hover':{background: '#66bb6a'},  margin: '10px', marginLeft: -1}}>View Rooms</Button>
                            </Box>
                          </Grid>
                        </Paper>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Paper elevation={3} style={{ padding: '25px', marginTop: '15px', borderRadius: '20px'}}>
                          <Grid container justifyContent={'space-between'}>  
                            <Grid item>
                                <Typography variant="body1" color={'black'} sx={{fontWeight: 550, fontSize: 24}} letterSpacing={2} gutterBottom>Apartment no.4</Typography>
                            </Grid>
                            <Grid item>
                              <Box sx={{bgcolor: '#b0bec5', borderRadius: '10px', height: '50px', padding: '8px', justifyContent: 'center' }}>
                                  <HouseIcon fontSize={'large'} sx={{color: 'white', justifyContent: 'center'}}/>
                              </Box>
                            </Grid>
                            <Typography variant="body1" color={'gray'} sx={{fontSize: 15, mt: 2}} letterSpacing={2} gutterBottom>Magsaysay st. Brgy Cogon, Sorsogon City</Typography>
                            <Box>
                                <Button href='/Dashboard/apartment/[id]' variant="contained" sx={{background: '#43a047', '&:hover':{background: '#66bb6a'},  margin: '10px', marginLeft: -1}}>View Rooms</Button>
                            </Box>
                          </Grid>
                        </Paper>
                      </Grid><Grid item xs={12} sm={6} md={4} lg={3}>
                        <Paper elevation={3} style={{ padding: '25px', marginTop: '15px', borderRadius: '20px'}}>
                          <Grid container justifyContent={'space-between'}>  
                            <Grid item>
                                <Typography variant="body1" color={'black'} sx={{fontWeight: 550, fontSize: 24}} letterSpacing={2} gutterBottom>Apartment no.5 </Typography>
                            </Grid>
                            <Grid item>
                              <Box sx={{bgcolor: '#b0bec5', borderRadius: '10px', height: '50px', padding: '8px', justifyContent: 'center' }}>
                                  <HouseIcon fontSize={'large'} sx={{color: 'white', justifyContent: 'center'}}/>
                              </Box>
                            </Grid>
                            <Typography variant="body1" color={'gray'} sx={{fontSize: 15, mt: 2}} letterSpacing={2} gutterBottom>Magsaysay st. Brgy Cogon, Sorsogon City</Typography>
                            <Box>
                                <Button href='/Dashboard/apartment/[id]' variant="contained" sx={{background: '#43a047', '&:hover':{background: '#66bb6a'},  margin: '10px', marginLeft: -1}}>View Rooms</Button>
                            </Box>
                          </Grid>
                        </Paper>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Paper elevation={3} style={{ padding: '25px', marginTop: '15px', borderRadius: '20px'}}>
                          <Grid container justifyContent={'space-between'}>  
                            <Grid item>
                                <Typography variant="body1" color={'black'} sx={{fontWeight: 550, fontSize: 24}} letterSpacing={2} gutterBottom>Apartment no.6</Typography>
                            </Grid>
                            <Grid item>
                              <Box sx={{bgcolor: '#b0bec5', borderRadius: '10px', height: '50px', padding: '8px', justifyContent: 'center' }}>
                                  <HouseIcon fontSize={'large'} sx={{color: 'white', justifyContent: 'center'}}/>
                              </Box>
                            </Grid>
                            <Typography variant="body1" color={'gray'} sx={{fontSize: 15, mt: 2}} letterSpacing={2} gutterBottom>Magsaysay st. Brgy Cogon, Sorsogon City</Typography>
                            <Box>
                                <Button href='/Dashboard/apartment/[id]' variant="contained" sx={{background: '#43a047', '&:hover':{background: '#66bb6a'},  margin: '10px', marginLeft: -1}}>View Rooms</Button>
                            </Box>
                          </Grid>
                        </Paper>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Paper elevation={3} style={{ padding: '25px', marginTop: '15px', borderRadius: '20px'}}>
                          <Grid container justifyContent={'space-between'}>  
                            <Grid item>
                                <Typography variant="body1" color={'black'} sx={{fontWeight: 550, fontSize: 24}} letterSpacing={2} gutterBottom>Apartment no.7 </Typography>
                            </Grid>
                            <Grid item>
                              <Box sx={{bgcolor: '#b0bec5', borderRadius: '10px', height: '50px', padding: '8px', justifyContent: 'center' }}>
                                  <HouseIcon fontSize={'large'} sx={{color: 'white', justifyContent: 'center'}}/>
                              </Box>
                            </Grid>
                            <Typography variant="body1" color={'gray'} sx={{fontSize: 15, mt: 2}} letterSpacing={2} gutterBottom>Magsaysay st. Brgy Cogon, Sorsogon City</Typography>
                            <Box>
                                <Button href='/Dashboard/apartment/[id]' variant="contained" sx={{background: '#43a047', '&:hover':{background: '#66bb6a'},  margin: '10px', marginLeft: -1}}>View Rooms</Button>
                            </Box>
                          </Grid>
                        </Paper>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Paper elevation={3} style={{ padding: '25px', marginTop: '15px', borderRadius: '20px'}}>
                          <Grid container justifyContent={'space-between'}>  
                            <Grid item>
                                <Typography variant="body1" color={'black'} sx={{fontWeight: 550, fontSize: 24}} letterSpacing={2} gutterBottom>Apartment No.8 </Typography>
                            </Grid>
                            <Grid item>
                              <Box sx={{bgcolor: '#b0bec5', borderRadius: '10px', height: '50px', padding: '8px', justifyContent: 'center' }}>
                                  <HouseIcon fontSize={'large'} sx={{color: 'white', justifyContent: 'center'}}/>
                              </Box>
                            </Grid>
                            <Typography variant="body1" color={'gray'} sx={{fontSize: 15, mt: 2}} letterSpacing={2} gutterBottom>Magsaysay st. Brgy Cogon, Sorsogon City</Typography>
                            <Box>
                                <Button href='/Dashboard/apartment/[id]' variant="contained" sx={{background: '#388e3c', '&:hover':{background: '#66bb6a'},  margin: '10px', marginLeft: -1}}>View Rooms</Button>
                            </Box>
                          </Grid>
                        </Paper>
                      </Grid>
                     
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Box>
        </>
    )
}
AddApartment.displayName = 'AddApartment';