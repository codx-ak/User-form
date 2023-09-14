import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{padding:'10px',background:'black',color:'white'}}><Typography align='center' variant='subtitle2'>© {new Date().getFullYear()} All rights reserved | Made with ❤️
    by Ak Moorthi</Typography></Box>
  )
}

export default Footer