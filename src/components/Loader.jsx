import React from 'react'
import {Container} from '@mui/material'

const Loader = () => {
  return (
    <Container className='spinner'>
        <div className='item'></div>
        <div className='item-name'>Please Loading...</div>
    </Container>
  )
}

export default Loader