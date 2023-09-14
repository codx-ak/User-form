import {Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Container sx={{padding:2}}>
        <Link to={'home'}>
        <Typography color='green' variant='h5' component='h3'>Codx</Typography>
        </Link>
    </Container>
  )
}

export default NavBar