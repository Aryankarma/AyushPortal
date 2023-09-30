// domain.com/auth/signin

// old importings

// "use client"

// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import './signUpStyles.css';
// import { Poppins } from 'next/font/google';
// import { Input } from '@mui/material';

"use client"
import * as React from 'react';
import { useState } from 'react'

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
import './signUpStyles.css';
import { Poppins } from 'next/font/google';
import { Input } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function SignUp() {
    return <div className='container'>
        <Heading />
        <LeftCont />
        <RightText />
    </div>
}

const Heading = () => {
    return <div className='heading'>
        <Typography className='headings' color={'#eee'} variant='h3' align='center' fontWeight={800}>Welcome to</Typography>
        <Typography className='headings' color={'#eee'} variant='h3' align='center' fontWeight={100}>Startup-Investor portal.</Typography>
        <Typography className='sub-headings' color={'#eee'} variant='caption' align='center' fontWeight={400}>Login to access your account</Typography>
    </div>
}

const RightText = () => {
    return <div className='rightText'>
        <Typography id='headText' color={'#eee'} variant='h2' align='left' fontWeight={800}>Welcome to</Typography>
        <Typography id='headText2' color={'#eee'} variant='h2' align='left' fontWeight={100}>Startup-Investor portal.</Typography>
        <Typography id='headText3' color={'#eee'} variant='caption' align='left' fontWeight={400}>Login to access your account</Typography>
    </div>
}


const LeftCont = () => {

    // for password functionality
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((state) => !state);
    const [showPassword2, setShowPassword2] = useState(false);
    const handleClickShowPassword2 = () => setShowPassword2((state2) => !state2);

    // radio buttons functionality
    const [userType, setUserType] = React.useState(''); // Added user type state
    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    return <section className='leftCont'>
        <div className='form'>
            <Typography className='loginText' variant='h3' align='left' fontWeight={800} >SignUp</Typography>
            <Input className='inputs' size='small' variant='caption' sx={{ marginTop: 5, marginBottom: 1 }} fullWidth label="FullName" placeholder="Full Name" />
            <Input className='inputs' size='small' variant='caption' sx={{ marginBottom: 1 }} fullWidth label="Contact" placeholder="Contact" />
            <Input className='inputs' size='small' variant='caption' sx={{ marginBottom: 1 }} fullWidth label="Email" placeholder="Email-ID" />
            {/* <Input size='small' variant='caption' type='password' sx={{ marginTop: 1, marginBottom: 2}} fullWidth label="password" placeholder="Password" /> */}

            <Input className='inputs'
                size='small' variant='caption'
                sx={{ marginBottom: 1 }}
                fullWidth label="password"
                placeholder="Password"
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <Input className='inputs'
                size='small' variant='caption'
                sx={{ marginBottom: 2 }}
                fullWidth label="password"
                placeholder="Confirm Password"
                id="standard-adornment-password"
                type={showPassword2 ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword2}
                        >
                            {showPassword2 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />

            {/* User Type Radio Buttons */}
            <div className='labels'>
                {/* <Typography variant='caption' align='left' sx={{ marginTop: 2 }}></Typography> */}
                <label>
                    <input
                        type="radio"
                        name="userType"
                        value="startupFounder"
                        onChange={handleUserTypeChange}
                        checked={userType === "startupFounder"}
                    />
                    Startup Founder
                </label>
                <label>
                    <input
                        type="radio"
                        name="userType"
                        value="investor"
                        onChange={handleUserTypeChange}
                        checked={userType === "investor"}
                    />
                    Investor
                </label>
                <label>
                    <input
                        type="radio"
                        name="userType"
                        value="publicUser"
                        onChange={handleUserTypeChange}
                        checked={userType === "publicUser"}
                    />
                    Public User
                </label>
            </div>
            <br />
            <Button id='loginbtn' sx={{ borderRadius: 2, marginTop: 5, backgroundColor: '#4046E6', color: 'white', '&:hover': { backgroundColor: '#262ce9' } }} textTransform="none" fullWidth variant='Contained'>SignUp</Button>
            <Box className="box" fullWidth sx={{ marginTop: 5 }}>
                <Typography variant='caption' align='left'>Already have an account?</Typography>
                <Button id='signupbtn' sx={{ borderRadius: 2, marginTop: 5 }} textTransform="none" align='right' variant='Contained'>Log in</Button>
            </Box>
        </div>
    </section>
}

export default SignUp;