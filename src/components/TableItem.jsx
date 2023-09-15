import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton, TableCell, TableRow,TableBody,Table,Box,Collapse,Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { DeleteUser } from "../db/UserSlice";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const TableItem = ({ User }) => {
  const dispatch = useDispatch();
  //User Details View
  const [open, setOpen] = React.useState(false);
  return (
    <>
      {User && (
        <React.Fragment>
          {/* User Table Item */}
          <TableRow key={User.id}>
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell align="center">{User.id}</TableCell>
            <TableCell align="center">
              {User.first_name + " " + User.last_name}
            </TableCell>
            
            <TableCell align="center">
              <Link to={`/update-user/${User.id}`}>
                <IconButton color="warning">
                  <EditIcon />
                </IconButton>
              </Link>
            </TableCell>
            <TableCell align="center">
              <IconButton
                color="error"
                onClick={() => dispatch(DeleteUser(User.id))}
              >
                <ClearIcon />
              </IconButton>
            </TableCell>
          </TableRow>
          
          {/* User Full Dedtails View */}
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  <Typography variant="h6" color={'orangered'} gutterBottom component="div">
                    User Details
                  </Typography>
                  <Table size="small">
                    <TableBody>
                      <TableRow >
                        <TableCell sx={{fontWeight:'bold'}} align="right">First Name :</TableCell>
                        <TableCell sx={{color:'gray'}}>{User.first_name}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{fontWeight:'bold'}} align="right">Last Name :</TableCell>
                        <TableCell sx={{color:'gray'}}>{User.last_name}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{fontWeight:'bold'}} align="right">Email ID :</TableCell>
                        <TableCell sx={{color:'gray'}}>{User.email}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{fontWeight:'bold'}} align="right">Mobile No :</TableCell>
                        <TableCell sx={{color:'gray'}}>{User.country_code} {User.mobile}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{fontWeight:'bold'}} align="right">Address 1 :</TableCell>
                        <TableCell sx={{color:'gray'}}>{User.address_1}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{fontWeight:'bold'}} align="right">Address 2 :</TableCell>
                        <TableCell sx={{color:'gray'}}>{User.address_2}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{fontWeight:'bold'}} align="right">City :</TableCell>
                        <TableCell sx={{color:'gray'}}>{User.city}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{fontWeight:'bold'}} align="right">State :</TableCell>
                        <TableCell sx={{color:'gray'}}>{User.state}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{fontWeight:'bold'}} align="right">Country :</TableCell>
                        <TableCell sx={{color:'gray'}}>{User.country}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{fontWeight:'bold'}} align="right">Zip Code :</TableCell>
                        <TableCell sx={{color:'gray'}}>{User.zip_code}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </React.Fragment>
      )}
    </>
  );
};

export default TableItem;
