import React from 'react';
import Buttons from './buttons';

import * as S from "./styles";

export default function FilterBy({ data }) {

  return (
    <S.Container>
      <div className='filterBy'>
        Filtrar por:
        <Buttons data={data} />
      </div>
    </S.Container>
  );
}
