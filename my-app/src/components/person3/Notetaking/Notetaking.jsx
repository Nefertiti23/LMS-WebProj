import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
} from "@mui/material";

const NoteTaking = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  return (
    <Box mt={2} p={2} border="1px solid #ccc" borderRadius={2}>
      <Typography variant="h6">Notes</Typography>
      <Box display="flex" gap={1} mt={1}>
        <TextField
          fullWidth
          size="small"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a note"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (input.trim() !== "") {
              setNotes([...notes, input]);
              setInput("");
            }
          }}
        >
          Add
        </Button>
      </Box>
      <List>
        {notes.map((note, i) => (
          <ListItem key={i}>{note}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NoteTaking;
