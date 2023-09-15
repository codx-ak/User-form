import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import TableItem from "../components/TableItem";
import { useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
const Home = () => {
  //value from redux Store
  const UserValues = useSelector((state) => state.userStore.value);
  
  return (
    <Container>
      <Typography variant="h4" align="center">
        Users Table
      </Typography>
      <Typography align="right">
        {/* Creating New User Url */}
        <Link to="/add-user">
          <Button variant="contained" startIcon={<AddIcon />}>
            Create User
          </Button>
        </Link>
      </Typography>
      <TableContainer sx={{ height: "80vh" }} align="center">
        <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell/>
            <TableCell align="center">User ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {UserValues.length ? (
            UserValues.map((user, index) => (
              <TableItem key={index} User={user} />
            ))
          ) : (
            <TableRow  >
            <TableCell colSpan={5} align="center">
              No Users
            </TableCell>
            </TableRow>
          )}
        </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Home;
