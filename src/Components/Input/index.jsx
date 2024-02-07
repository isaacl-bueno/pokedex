import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function TextFields() {
  return (
    <TextField
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      style={{ borderRadius: '40px', height: "40px" }}
    />
  );
}
