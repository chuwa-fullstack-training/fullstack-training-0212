import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Grid } from '@mui/material';
import ColorBox from './ColorBox';

const ColorComponents = () => {
  const [selectedBox, setSelectedBox] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleBoxChange = (event) => {
    setSelectedBox(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
    if (selectedBox !== '') {
      handleColorSelection(selectedBox, event.target.value);
    }
  };

  const [colorBoxes, setColorBoxes] = useState([
    { id: 1, name: 'Box 1', color: '' },
    { id: 2, name: 'Box 2', color: '' },
    { id: 3, name: 'Box 3', color: '' },
    { id: 4, name: 'Box 4', color: '' },
    { id: 5, name: 'Box 5', color: '' },
    { id: 6, name: 'Box 6', color: '' },
  ]);

  const handleNameChange = (id, newName) => {
    const updatedBoxes = colorBoxes.map(box =>
      box.id === id ? { ...box, name: newName } : box
    );
    setColorBoxes(updatedBoxes);
  };

  const handleColorSelection = (id, newColor) => {
    const updatedBoxes = colorBoxes.map(box =>
      box.id === id ? { ...box, color: newColor } : box
    );
    setColorBoxes(updatedBoxes);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Select Box</InputLabel>
            <Select value={selectedBox} onChange={handleBoxChange}>
              {colorBoxes.map(box => (
                <MenuItem key={box.id} value={box.id}>
                  {box.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Select Color</InputLabel>
            <Select value={selectedColor} onChange={handleColorChange}>
              <MenuItem value="#ff0000">Red</MenuItem>
              <MenuItem value="#00ff00">Green</MenuItem>
              <MenuItem value="#0000ff">Blue</MenuItem>
              <MenuItem value="#ffff00">Yellow</MenuItem>
              <MenuItem value="#ff00ff">Magenta</MenuItem>
              <MenuItem value="#00ffff">Cyan</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        {colorBoxes.map(box => (
          <Grid item xs={4} key={box.id}>
            <ColorBox
              name={box.name}
              color={box.color}
              onNameChange={(newName) => handleNameChange(box.id, newName)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ColorComponents;
