import { Container } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <Container className="page-404">
    <h1>404</h1>
    <p>Page Not Found !!!</p>
    <Link to="/">Go Back</Link>
    </Container>
  )
}

export default PageNotFound