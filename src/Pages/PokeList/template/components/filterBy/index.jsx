import React, { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';

// @ Components
import Buttons from './buttons';

// @ Styles
import * as S from "./styles";

export const FilterBy = ({ data, filterByType, filterByNationalNumber }) => {
  const [filterFavorites, setFilterFavorites] = useState(false);
  const [favoriteNumbers, setFavoriteNumbers] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteNumbers(favorites);
  }, []);

  const handleFilterChange = () => {
    setFilterFavorites(!filterFavorites);
    if (!filterFavorites) {
      filterByNationalNumber({ nationalNumbers: [], data });
    } else {
      filterByNationalNumber({ nationalNumbers: favoriteNumbers, data });
    }
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
