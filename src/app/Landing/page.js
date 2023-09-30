"use client"
import * as React from 'react';
import { useState } from 'react'
import './landingStyles.css';

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
import { Poppins } from 'next/font/google';
import { Input } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TuneIcon from '@mui/icons-material/Tune';
import WebhookIcon from '@mui/icons-material/Webhook';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import CardMedia from '@mui/material/CardMedia';
import { Height } from '@mui/icons-material';

function halfHome(){
    return <Container2/>
}

const Container2=()=>{
    return <Box>
        <Box className='advSearch'>
            <Typography id='advHeading' variant='h3' fontWeight={800}>Find the Companies to Invest in With Advanced Search</Typography>
            <Typography id='advSubHeading' variant='body1' fontWeight={200}>Here are some examples of custom searches created by investors like you. Edit
these templates and make them your own with Ayush-portal.</Typography>
            <Box className='featureContainer'>
                <Box className='featureBox'>
                    <Box sx={{marginBottom:3, backgroundColor:'#8551FD'}} className='circle'>
                        <TuneIcon color='white'/>
                    </Box>
                    <Typography className="fontSize marginBottom" sx={{marginBottom:7}} fontWeight={600}>Find your searches</Typography>
                    <Typography className="fontSize" sx={{marginBottom:2}}> Tailor your investment search with precision. Customize your criteria to discover startups that align with your goals effortlessly.</Typography>
                    <Link className="fontSize">Check this out </Link>
                </Box>
                <Box className='featureBox'>
                    <Box sx={{marginBottom:3, backgroundColor:'#00C2A4'}} className='circle'>
                        <WebhookIcon color='white'/>
                    </Box>
                    <Typography className='fontSize marginBottom' sx={{marginBottom:7}} fontWeight={600}>Ask AI</Typography>
                    <Typography className='fontSize' sx={{marginBottom:2}}> Meet your AI investment advisor. Let smart algorithms match you with promising startups, simplifying your investment decisions. </Typography>
                    <Link className='fontSize'>Check this out </Link>
                </Box>
                <Box className='featureBox'>
                    <Box sx={{marginBottom:3, backgroundColor:'#FF5F65'}} className='circle'>
                        <ManageSearchIcon color='white'/>
                    </Box>
                    <Typography className='fontSize marginBottom' sx={{marginBottom:7}} fontWeight={600}>Checkout news section</Typography>
                    <Typography className='fontSize' sx={{marginBottom:2}}> Stay informed with real-time news. Access trending insights and updates in the startup ecosystem, keeping your knowledge up to date. </Typography>
                    <Link className='fontSize'>Check this out </Link>
                </Box>
            </Box>
            <Button id='getStartedBtn' sx={{ borderRadius: 2, marginTop: 5 }} variant='Contained'>Get Started</Button>
        </Box>
        <Box id='solutionsContainer'>
            <Typography id='advHeading' variant='h3' fontWeight={800}>Explore More Solutions</Typography>
            <Box id='solutionsGrid'>
                <Box className='solutionBox'>
                    {/* <CardMedia image='../../img/solutions1.png' alt='solutions1 image' sx={{height: 200,width: 300}} /> */}
                    {/* <img src="../../img/solutions1.png" alt="alt_text" /> */}
                    <div id='replaceWithImage'></div>
                    <Typography variant='body1' fontWeight={600}>Connect People</Typography>
                </Box>
                <Box className='solutionBox'>
                    {/* <CardMedia image='../../img/solutions1.png' alt='solutions1 image' sx={{height: 200,width: 300}} /> */}
                    {/* <img src="../../img/solutions1.png" alt="alt_text" /> */}
                    <div id='replaceWithImage'></div>
                    <Typography variant='body1' fontWeight={600}>Find investment</Typography>
                </Box>
                <Box className='solutionBox'>
                    {/* <CardMedia image='../../img/solutions1.png' alt='solutions1 image' sx={{height: 200,width: 300}} /> */}
                    {/* <img src="../../img/solutions1.png" alt="alt_text" /> */}
                    <div id='replaceWithImage'></div>
                    <Typography variant='body1' fontWeight={600}>Market Research</Typography>
                </Box>
                <Box className='solutionBox'>
                    {/* <CardMedia image='../../img/solutions1.png' alt='solutions1 image' sx={{height: 200,width: 300}} /> */}
                    {/* <img src="../../img/solutions1.png" alt="alt_text" /> */}
                    <div id='replaceWithImage'></div>
                    <Typography variant='body1' fontWeight={600}>Enrich Your
Database</Typography>
                </Box>
                <Box className='solutionBox'>
                    {/* <CardMedia image='../../img/solutions1.png' alt='solutions1 image' sx={{height: 200,width: 300}} /> */}
                    {/* <img src="../../img/solutions1.png" alt="alt_text" /> */}
                    <div id='replaceWithImage'></div>
                    <Typography variant='body1' fontWeight={600}>Build Your Startup</Typography>
                </Box>
            </Box>
        </Box>
        <Box className='lastPortion'>
            <Typography id='advHeading' variant='h3' fontWeight={800}>Ready to get started?</Typography>
            <Button id='getStartedBtn' sx={{ borderRadius: 2, marginTop: 2.5}} variant='Contained'>Get Started</Button>
        </Box>
    </Box>
}



export default halfHome;