import React from 'react';
import { Paper, TextField } from '@mui/material';

const ColorBox = ({ name, color, onNameChange }) => {
  const handleNameChange = (event) => {
    onNameChange(event.target.value);
  };

  return (
    <Paper sx={{ backgroundColor: color, padding: 2 }}>
      <p>Component Name</p>
      <TextField value={name} onChange={handleNameChange} />
    </Paper>
  );
};

export default ColorBox;
