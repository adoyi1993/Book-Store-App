import React from 'react';
import {Box, Typography} from "@mui/material"
import { fontFamily } from '@mui/system';

const About = () => {
  return (
    <div>
        <Box display="flex" flexDirection={"column"} alignItems="center">
            <Typography sx={{fontFamily: "fantasy"}} variant='h2'> This is a CRUD MERN STACK Application </Typography>
            <Typography sx={{fontFamily: "fantasy"}} variant='h3'> By Adoyi Boniface </Typography>




        </Box>
    </div>
  )
}

export default About