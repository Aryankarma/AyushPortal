import * as React from 'react';
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


function signIn(){
    return <div className='container'>
        <LeftCont/>
    </div> 
}

const LeftCont=()=>{
    return <section className='leftCont'>
        <div className='form'>
            <Typography variant='h3' align='left' fontWeight={800} >Login</Typography>
            <Input size='large' variant='caption' sx={{ marginTop: 5}} fullWidth label="userName" placeholder="Username" />
            <Input size='small' variant='caption' type='password' sx={{ marginTop: 1, marginBottom: 2}} fullWidth label="password" placeholder="Password" />
            <Link  variant='caption' href="" target="_blank" rel="noopener noreferrer" color="#000000">Forgot Password?</Link>
            <br/>
            <Button sx={{borderRadius:2, marginTop:5, backgroundColor:'#4046E6', color:'white', '&:hover':{backgroundColor:'#262ce9'}}} textTransform="none" fullWidth variant='Contained'>Login</Button>
            
            <Typography variant='caption' align='left'>Don't have an account</Typography>
            <Button sx={{borderRadius:2, marginTop:5, backgroundColor:'#333437', color:'white', '&:hover':{backgroundColor:'#222'}}} textTransform="none" align='right' variant='Contained'>Sign Up</Button>
       
        </div>
    </section>
}

export default signIn;