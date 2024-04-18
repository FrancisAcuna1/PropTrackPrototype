'use client'
import React from 'react';
import { Box, Grid, Card, InputAdornment, Typography,  Divider, TextField, Button, Link, Avatar,  IconButton, } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/navigation';
import { MuiFileInput } from 'mui-file-input';



export default function RegisterComponent() {
    const [image, setImage] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const  router = useRouter();   

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const [contact, setContact] = useState('');

    const formatContact = (value) => {
      // Remove all non-digit characters from the input value
      const digitsOnly = value.replace(/\D/g, '');
      return digitsOnly.replace(/(\d{3})(\d{3})(\d{4})/, '+63 $1 $2 $3');
      // Format the phone number as desired
      
    };
  
    const handleContactChange = (event) => {
      const formattedValue = formatContact(event.target.value);
      setContact(formattedValue);
    };


    // file input ini 
    const [value, setValue] = React.useState(null)

    const handleChange = (newValue) => {
        setValue(newValue)
    }
  return (
    <>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{maxWidth: 700, width: '100%', border: '1px solid #ccc', borderRadius: 5, padding: '50px', margin: '60px', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Avatar sx={{ bgcolor: '#673ab7', height:'60px', width: '65px' }}>
                        <PersonAddIcon fontSize='large' color='light'/>
                    </Avatar>
                </Box>
                <Typography variant="h5" component="div" gutterBottom sx={{fontWeight: 'bold', textAlign: 'center',  mt: '20px' }}>
                    Register Account
                </Typography>
                <Grid container spacing={2}>
                    <Grid  item xs={12} sm={4}>
                        <TextField id="firstname" label="First Name" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                    <Grid  item xs={12} sm={4}>
                        <TextField id="middle" label="Middle Name" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                    <Grid  item xs={12} sm={4}>
                        <TextField id="lastname" label="Last Name" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="email" label="Email" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField  id="contact"
                            label="Contact No."
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={contact}
                            onChange={handleContactChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="outlined-adornment-password-register" type={showPassword ? 'text' : 'password'} label="Password" variant="outlined" fullWidth margin="normal"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        // onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        size="large"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField   id="outlined-adornment-password-register" type={showPassword ? 'text' : 'password'}  label="Confirm Password" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField id="street" label="Street" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField id="barangay" label="Barangay" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField id="municipality" label="Municipality" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField id="zipcode" label="ZIP CODE" variant="outlined" fullWidth margin="normal" />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Box 
                            sx={{
                                border: '2px dashed #ccc',
                                borderRadius: '5px',
                                padding: '20px',
                                textAlign: 'center',
                                width: '93.5%',
                                
                            }}
                        >
                            <Box sx={{ marginBottom: '10px' }}>
                                <Typography variant="body1" gutterBottom sx={{color: 'gray'}}>
                                    Drop or Select Image
                                </Typography>
                            </Box>

                            <MuiFileInput component="form" value={value} onChange={handleChange} sx={{width: '100%',}}/>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Button variant="contained"
                            sx={{background: '#673ab7', width: '100%', padding: '10px',  fontSize: '18px','&:hover': {backgroundColor: '#9575cd',}, }}
                            // onClick={() => router.push('/Dashboard/login')}
                            href='/Dashboard/login'
                        >
                            Register Account
                        </Button>  
                    </Grid>
                    <Grid item xs={12}>
                    <Divider  sx={{ flexGrow: 1, pt: '10px'}} orientation="horizontal" />
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '3'}}>
                            <Typography variant="subtitle1" color="textSecondary" sx={{ marginTop: '20px' }}>
                                <Link href="/Dashboard/login" color="inherit" underline="none">
                                Already have an Account?
                                </Link>
                            </Typography>
                        </Box> 
                    </Grid>
                </Grid>
            </Box>
                
        </Box>
    </>

  );
}
