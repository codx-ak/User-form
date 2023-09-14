import { Container, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import TableItem from '../components/TableItem'
import { useSelector } from 'react-redux'
const Home = () => {
  const UserValues=useSelector(state=>state.userStore.value)
  console.log(UserValues)
  return (
    <Container>
    <Typography variant='h4' align='center'>Users Table</Typography>
    <TableContainer sx={{height:'80vh'}} align='center'>
    <TableHead>
      <TableRow>
        <TableCell align="center">S.No</TableCell>
        <TableCell align="center">Name</TableCell>
        <TableCell align="center">Email</TableCell>
        <TableCell align="center">View</TableCell>
        <TableCell align="center">Edit</TableCell>
        <TableCell align="center">Delete</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {UserValues.length ? UserValues.map((user,index)=><TableItem key={index} User={user}/>) 
      :<TableCell colSpan={7} align='center'>No Users</TableCell>
      }
    </TableBody>
    </TableContainer>
    </Container>
  )
}

export default Home
