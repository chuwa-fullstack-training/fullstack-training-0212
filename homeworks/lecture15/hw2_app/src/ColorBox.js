import React from 'react';
import { Paper, TextField } from '@mui/material';

const ColorBox = ({ box, onNameChange }) => {
  const handleNameChange = (event) => {
    onNameChange(event.target.value);
  };

  return (
    <Paper sx={{ backgroundColor: box.color, padding: 2 }}>
      <p>Component Name</p>
      <TextField value={box.name} onChange={handleNameChange} />
    </Paper>
  );
};

export default ColorBox;

