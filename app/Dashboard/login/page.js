"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { Box, Grid, Avatar, Typography, TextField, Button, Link, Divider, Alert, LinearProgress } from "@mui/material";
import LockPersonIcon from "@mui/icons-material/LockPerson";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = (e) => {
        setLoading(true);
        setError(false);
        setTimeout(() => {
            if (data.email === "landlord@gmail.com" && data.password === "landlord") {
                router.push("Dashboard/home");
            } else if (data.email === "user@gmail.com" && data.password === "userpass") {
                router.push("Dashboard/user/landingpage");
            } else {
                setError(true);
            }
            setLoading(false);
        }, 3000);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
                    <Box sx={{ maxWidth: 400, width: "100%", border: "1px solid #ccc", borderRadius: 2, padding: 4, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)", position: 'relative' }}>
                        {isLoading && <LinearProgress color="secondary" sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, borderRadius: '4px 4px 0 0' }} />}
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
                            <Avatar sx={{ bgcolor: "#673ab7", height: "60px", width: "65px" }}>
                                <LockPersonIcon fontSize="large" />
                            </Avatar>
                        </Box>
                        <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
                            Log in
                        </Typography>
                        {error && (
                            <Grid item mt={2} mb={2} textAlign={'center'}>
                                <Alert severity="error" color="error">
                                    Incorrect Email or Password!
                                </Alert>
                            </Grid>
                        )}
                        <TextField id="email" name="email" label="Email" variant="outlined" value={data.email} onChange={handleChange} fullWidth margin="normal" />
                        <TextField id="password" name="password" label="Password" type="password" variant="outlined" value={data.password} onChange={handleChange} fullWidth margin="normal" />
                        <Typography variant="subtitle1" color="secondary" component="div" gutterBottom sx={{ fontSize: "15px", color: "#673ab7", textAlign: "end" }}>
                            Forgot Password?
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: 4 }}>
                            <Button variant="contained"
                                sx={{
                                    background: "#673ab7", width: "100%", padding: "10px", fontSize: "15px", "&:hover": {
                                        backgroundColor: "#9575cd",
                                    },
                                }}
                                onClick={handleLogin}
                            >
                                Log In
                            </Button>
                        </Box>
                        <Divider sx={{ flexGrow: 1, pt: "30px" }} orientation="horizontal" />
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
    );
}
