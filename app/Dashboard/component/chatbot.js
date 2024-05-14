import * as React from 'react';
import { useState } from 'react';
import {Box, Container, TextField, IconButton, List, ListItem, ListItemText} from '@mui/material';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function PositionedPopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };



  const handleSend = () => {
      if (input.trim()) {
          setMessages([...messages, { text: input, sender: 'user' }]);
          setInput('');
          setTimeout(() => {
              setMessages(prevMessages => [...prevMessages, { text: "This is a response from the chatbot.", sender: 'bot' }]);
          }, 1000);
      }
  };

  const handleInputChange = (e) => {
      setInput(e.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Popper
        sx={{ zIndex: 1200, }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
           <Paper elevation={3} sx={{mt: 2, height: '50vh', display: 'flex', flexDirection: 'column' }}>
              <Grid container justifyContent={'space-between'}  sx={{bgcolor: deepPurple[500], padding: 1, color: 'white'}}>  
                <Grid item>
                  <Typography variant="body1" letterSpacing={2}  gutterBottom>PT-Bot</Typography>
                </Grid>
                <Grid item>
                  <MoreVertIcon/>
                </Grid>
              </Grid>
              
            
                <List sx={{ flexGrow: 1, overflowY: 'auto' }}>
                    <Typography variant='body2' letterSpacing={2} textAlign={'center'} mt={1} gutterBottom>Today 5:32 pm</Typography>
                    {messages.map((message, index) => (
                        <ListItem key={index} sx={{ justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                            <ListItemText 
                                primary={message.text} 
                                sx={{
                                    bgcolor: message.sender === 'user' ? '#e3f2fd' : '#f1f1f1', 
                                    borderRadius: 1, 
                                    padding: 1,
                                    maxWidth: '70%',
                                    wordBreak: 'break-word',
                                }} 
                            />
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ display: 'flex', p: 1 , boxShadow: 4}}>
                    <TextField 
                        variant="outlined" 
                        placeholder="Type a message..." 
                        value={input} 
                        onChange={handleInputChange} 
                        fullWidth 
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleSend();
                            }
                        }}
                    />
                    <IconButton color="primary" onClick={handleSend} sx={{ ml: 1 }}>
                        <SendIcon />
                    </IconButton>
                </Box>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Grid item>
            <Avatar onClick={handleClick('right-start')} sx={{ bgcolor: deepPurple[500], padding: 3, justifyContent: ''}}>
              <Button disableRipple>
                <SmartToyIcon fontSize='large' sx={{ color: 'white' }} />
              </Button>
            </Avatar>
          </Grid>
        </Grid>
      </Grid>

    </Container>
  );
}
