"use client"
import React from "react";
import { Box, Grid, Card, CardActionArea, ListItemIcon, CardHeader, Typography, CardContent, Divider, TextField, Button, Link, Avatar } from "@mui/material";
import LockPersonIcon from "@mui/icons-material/LockPerson";

export default function LoginPage() {
  return (
    <>
     <h3>Log in</h3>
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}   >
                <Box sx={{ maxWidth: 400, width: "100%", border: "1px solid #ccc", borderRadius: 5, padding: "55px", margin: "60px", boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: 2 }}>
                        <Avatar sx={{ bgcolor: "#673ab7", height:"60px", width: "65px" }}>
                            <LockPersonIcon fontSize="large" color="light"/>
                        </Avatar>
                    </Box>
                     
                    <Typography variant="h5" component="div" gutterBottom sx={{fontWeight: "bold", textAlign: "center",  pt: "5px" }}>
                        Log in
                    </Typography>
                    <TextField id="email" label="Email" variant="outlined" fullWidth margin="normal" />
                    <TextField id="password" label="Password" type="password" variant="outlined" fullWidth margin="normal" />
                    <Typography variant="subtitle1" color="secondary" component="div" gutterBottom sx={{fontSize: "15px", color: "#673ab7", textAlign:"end"}}>
                       Forgot Password?
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: 4,  }} gutterBottom>
                        <Button variant="contained"
                            sx={{background: "#673ab7", width: "400px", padding: "10px",  fontSize: "15px", "&:hover": {
                                backgroundColor: "#9575cd",
                             // Increasing the font size
                            },}}
                            href="/Dashboard/home"
                        >
                        Log In
                        </Button>  
                    </Box>
                    <Divider  sx={{ flexGrow: 1, pt: "30px"}} orientation="horizontal" />
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: 2 }}>
                        <Typography variant="subtitle1" color="textSecondary" sx={{ marginTop: "10px" }}>
                            <Link href="/Dashboard/register" color="inherit" underline="none">
                            Dont have an Account?
                            </Link>
                        </Typography>
                    </Box>
                </Box>
               
            </Box>
        </Grid>
      </Grid>
    </>

  );
}
