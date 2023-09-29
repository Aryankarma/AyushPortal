"use client"
import * as React from 'react';
import {useState} from 'react'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './signInStyles.css';
import { Poppins } from 'next/font/google';
import { Input } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
 
function signIn(){
    return <div className='container'>
        <Heading/>
        <LeftCont/>
        <RightText/>
    </div> 
}

const Heading=()=>{
  return <div className='heading'>
      <Typography className='headings' color={'#eee'} variant='h3' align='center' fontWeight={800}>Welcome to</Typography>
      <Typography className='headings' color={'#eee'} variant='h3' align='center' fontWeight={100}>Startup-Investor portal.</Typography>
      <Typography className='sub-headings' color={'#eee'} variant='caption' align='center' fontWeight={400}>Login to access your account</Typography>
  </div>
}

const RightText=()=>{
    return <div className='rightText'>
        <Typography id='headText' color={'#eee'} variant='h2' align='left' fontWeight={800}>Welcome to</Typography>
        <Typography id='headText2' color={'#eee'} variant='h2' align='left' fontWeight={100}>Startup-Investor portal.</Typography>
        <Typography id='headText3' color={'#eee'} variant='caption' align='left' fontWeight={400}>Login to access your account</Typography>
    </div>
}


const LeftCont=()=>{

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return <section className='leftCont'>
        <div className='form'>
            <Typography className='loginText' variant='h3' align='left' fontWeight={800} >Login</Typography>
            <Input className='inputs' size='large' variant='caption' sx={{ marginTop: 5}} fullWidth label="userName" placeholder="Username" />
            {/* <Input size='small' variant='caption' type='password' sx={{ marginTop: 1, marginBottom: 2}} fullWidth label="password" placeholder="Password" /> */}
            
            <Input className='inputs'
            size='small' variant='caption' 
            sx={{ marginTop: 1, marginBottom: 2}} 
            fullWidth label="password" 
            placeholder="Password"
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />


            <Link variant='caption' href="" target="_blank" rel="noopener noreferrer" color="#000000">Forgot Password?</Link>
            <br/>
            <Button id='loginbtn' sx={{borderRadius:2, marginTop:5, backgroundColor:'#4046E6', color:'white', '&:hover':{backgroundColor:'#262ce9'}}} textTransform="none" fullWidth variant='Contained'>Login</Button>
            <Box className="box" fullWidth sx={{marginTop:5}}>
                <Typography variant='caption' align='left'>Don't have an account?</Typography>
                <Button id='signupbtn' sx={{borderRadius:2, marginTop:5}} textTransform="none" align='right' variant='Contained'>Sign Up</Button>
            </Box>
        </div>
    </section>
}

export default signIn;