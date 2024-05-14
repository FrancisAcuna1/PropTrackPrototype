import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Chatbot from './chatbot';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #ae9bff, #FFFF)'
            : `linear-gradient(#a48bf5, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
        <Container
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
        }}
        >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
            <Typography
            variant="h1"
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignSelf: 'center',
                textAlign: 'center',
                fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
            >
            Welcome&nbsp;
            <Typography
                component="span"
                variant="h1"
                sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                }}
            >
                Tenants
            </Typography>
            </Typography>
            <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
            >
            This is where you can communicate with us. If you have any concerns about your stay at our apartment, you can contact us through the chatbot, which can provide answers if the landlord is unavailable. Thank you, and have a great day!
            </Typography>
            <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
            >
            <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label="Enter your email address"
                placeholder="Your email address"
                inputProps={{
                autoComplete: 'off',
                'aria-label': 'Enter your email address',
                }}
            />
            <Button variant="contained" color="primary">
                Start now
            </Button>
            </Stack>
            {/* <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
                Terms & Conditions
            </Link>
            .
            </Typography> */}
            
        </Stack>
        <Box
            id="image"
            sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 100, sm: 150 },
            width: '100%',
        
            })}
        />
        

      </Container>
      
    </Box>
  );
}