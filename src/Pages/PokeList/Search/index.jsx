import React, { useState, useEffect } from 'react';

import MultipleSelect from '../../../Components/Select';
import TextFields from '../../../Components/Input';

import * as S from "./styles";

export default function Search() { 

  return (
    <S.Container>
      <TextFields/>
      <div className="OrderBy">
          <div>Ordenar por:</div>
          <MultipleSelect />
      </div>
    </S.Container>
  );
}
