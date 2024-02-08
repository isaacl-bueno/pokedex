import React from 'react';
import Switch from '@mui/material/Switch';

// @ Components
import Buttons from './buttons';

// @ Styles
import * as S from "./styles";

export const FilterBy = ({ data, filterByType, filterByFavorites }) => {

  return (
    <S.Container>
      <div className='filterBy'>
        Filtrar por:
        <Buttons data={data} filterByType={filterByType} />
      </div>
      <div className='Favority'>
        Filtrar favoritos:
        <div className='Favority'>
          <Switch
            className='Switch'
            onChange={(_e, value) => filterByFavorites(value)}
            inputProps={{ 'aria-label': 'Filtrar favoritos' }}
          />
        </div>
      </div>
    </S.Container>
  );
};
