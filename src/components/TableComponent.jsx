import { Edit } from "@mui/icons-material";
import {
  Button,
  Modal,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";

function TableComponent({ rows, openModal, count, setCount }) {
  const URL = process.env.REACT_APP_API;
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);

  const style = {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    setOpen(openModal);
  }, []);

  const handleOpenModal = (id) => {
    setOpen(true);
    setSelectedRow(id);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setComment("");
  };
  const handleSubmit = async () => {
    try {
      const token = await localStorage.getItem("token");
      const res = await axios.patch(
        `${URL}/articles/update`,
        { ...selectedRow, comment: comment },
        {
          headers: {
            "access-token": token,
          },
        }
      );

      setCount(count + 1);
      handleCloseModal();
    } catch (err) {
      handleCloseModal();
      alert("You are not an admin");
      console.log(err);
    }
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Link</TableCell>
              <TableCell align="center">Comment</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {index + 1}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row.name}
                </TableCell>
                <TableCell align="center">
                  <a href="/">{row.link}</a>
                </TableCell>
                <TableCell align="center">{row.comment}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => handleOpenModal(row)}>
                    <Edit color="tertiary" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction="column" spacing={2}>
            <Typography align="center" variant="h6">
              Add Comment
            </Typography>
            <TextField
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}

export default TableComponent;
