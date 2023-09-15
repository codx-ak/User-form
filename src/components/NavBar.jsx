import {Box,Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Box sx={{padding:2,paddingLeft:4,boxShadow:2,marginBottom:2}}>
        <Link to={'home'}>
        <Typography color='green' variant='h5' component='h3'>Codx</Typography>
        </Link>
    </Box>
  )
}

export default NavBar