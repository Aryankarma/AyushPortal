"use client"
import React from 'react';
import './formStyles.css'
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Input } from '@mui/material';
import {TextField} from '@mui/material';
import {Button} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import the icon

function Form(){
    return <React.Fragment>
        <TopHeading/>
        <FormContent/>
    </React.Fragment>
}

const FormContent=()=>{
  return <Box className='FormContent'>
    <div className='formList'>
      <Input className='inputs' size='small' variant='caption' sx={{ marginTop: 8, marginBottom: 4 }} label="FullName" placeholder="Founder's name"/>
      <Input className='inputs' size='small' variant='caption' sx={{ marginBottom: 4 }} label="Contact" placeholder="Founder details"/>
      <Input className='inputs' size='small' variant='caption' sx={{ marginBottom: 4 }} label="Email" placeholder="Founder linkedin profile"/>
      <TextField multiline rows={4} variant='outlined' label="Founder's bio" sx={{ marginBottom: 4 }}>This </TextField>
      <Input className='inputs' size='small' variant='caption' sx={{ marginBottom: 4 }} label="Email" placeholder="Location" InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <AccountCircleIcon /> {/* Icon component */}
          </InputAdornment>
        ),
      }}/>
      
      <TextField
      label="Username"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <AccountCircleIcon /> {/* Icon component */}
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
    </div>
  </Box> 
}

const TopHeading=()=>{
    return <div> 
        <Box className='heading2'> <Typography sx={{opacity:.6, marginRight: 2}} color={"#ffffff"} variant="h1" className='text' fontWeight={900}> Create your </Typography> <Typography color={"#ffffff"} sx={{opacity:1, marginRight: 2}} variant="h1" className='text' fontWeight={900}> Startup </Typography> <Typography sx={{opacity:.6, marginRight: 2}} color={"#ffffff"} variant="h1" className='text' fontWeight={900}> Profile </Typography> </Box>  
        {/* <Typography color={"#fff"} fontSize={25} sx={{margin:3}}>Add startup details</Typography> */}
    </div>
}

export default Form;