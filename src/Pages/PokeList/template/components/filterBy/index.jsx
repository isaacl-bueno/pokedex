import React, { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';

// @ Components
import Buttons from './buttons';

// @ Styles
import * as S from "./styles";

export const FilterBy = ({ data, filterByType }) => {
  const [filterFavorites, setFilterFavorites] = useState(false);
  const [favoritesData, setFavoritesData] = useState([]);

  useEffect(() => {
    const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoritesData(favoritesFromLocalStorage);
  }, []);

  const handleFilterChange = () => {
    setFilterFavorites(!filterFavorites);
    if (!filterFavorites) {
      const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavoritesData(favoritesFromLocalStorage);
    } else {
      setFavoritesData([]);
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
