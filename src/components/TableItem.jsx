import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton, TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import { useDispatch } from "react-redux";
import { DeleteUser } from "../db/UserSlice";

const TableItem = ({ User }) => {

  const dispatch=useDispatch()
  //console.log(User);
  return (
    <>
      {User &&
        <TableRow  key={User.id}>
        <TableCell align="center">{User.id}</TableCell>
        <TableCell align="center">{User.first_name+" "+User.last_name}</TableCell>
        <TableCell align="center">{User.email}</TableCell>
        <TableCell align="center">
          <IconButton>
            <FileOpenIcon />
          </IconButton>
        </TableCell>
        <TableCell align="center">
          <IconButton color="warning">
            <EditIcon />
          </IconButton>
        </TableCell>
        <TableCell align="center">
          <IconButton color="error" onClick={()=>dispatch(DeleteUser(User.id))}>
            <ClearIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      }
    </>
  );
};

export default TableItem;
