import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton, TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import FileOpenIcon from "@mui/icons-material/FileOpen";

const TableItem = ({ User }) => {
  console.log(User);
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
          <IconButton color="error">
            <ClearIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      }
    </>
  );
};

export default TableItem;
