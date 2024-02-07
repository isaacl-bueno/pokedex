import React, { useState } from 'react';
import Switch from '@mui/material/Switch';

// @ Components
import Buttons from './buttons';

// @ Styles
import * as S from "./styles";

export const FilterBy = ({ data, filterByType }) => {
  const [filterFavorites, setFilterFavorites] = useState(false);

  const handleFilterChange = () => {
    setFilterFavorites(!filterFavorites);
  };

  return (
    <S.Container>
      <div className='filterBy'>
        Filtrar por:
        <Buttons data={data} filterByType={filterByType}/>
      </div>
      <div className='Favority'>
        Filtrar favoritos:
        <div className='Favority'>
          <Switch
            className='Switch'
            checked={filterFavorites}
            onChange={handleFilterChange}
            inputProps={{ 'aria-label': 'Filtrar favoritos' }}
          />
        </div>
      </div>
    </S.Container>
  );
};
