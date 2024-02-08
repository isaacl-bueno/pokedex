import * as React from 'react';

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Types = [
  {
    name: "Ascendente número",
    value: "ascendent_number",
  },
  {
    name: "Descendente número",
    value: "descendent_number",
  },
  {
    name: "Ascendente por nome",
    value: "ascendent_name",
  },
  {
    name: "Descendente por nome",
    value: "descendent_name",
  }
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SingleSelect({ labelName, OrderBy }) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState('');

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(value);
    OrderBy({ type: value });
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 150 }}>
        <Select
          labelId="demo-single-name-label"
          id="demo-single-name"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          sx={{
            borderRadius: '40px',
            height: "40px",
            width: "150px",
            color: "#E2350D",
            borderColor: "#E2350D",
          }}
          data-testid="select_testid"
        >
          {Types.map((item) => (
            <MenuItem
              key={item.value}
              value={item.value}
              style={getStyles(item.name, personName, theme)}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
