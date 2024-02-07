import React, {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function CustomizedInputBase({ filterByNames, data }) {

  const [search, setSearch] = useState('')

  useEffect(() => {
    filterByNames({ search, data })
  }, [search])

  return (
    <Paper
      component="form"
      sx={{
        borderRadius: 10,
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: "100%",
        maxWidth: "742px",
        backgroundColor: 'lightGray',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Pesquisar por nome ou número"
        inputProps={{ 'aria-label': 'search pokemon' }}
        bg
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "red", fontSize: "18px" }} />

      </IconButton>
    </Paper >
  );
}