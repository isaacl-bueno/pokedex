import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function TextFields() {
  return (
    <TextField
      id="outlined-basic"
      label="Pesquisa por nome ou numero"
      variant="outlined"
      style={{ borderRadius: '40px', height: "40px" }}
    />
  );
}
