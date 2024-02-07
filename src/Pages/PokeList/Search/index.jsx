import React from 'react';

import MultipleSelect from '../../../Components/Select';

import * as S from "./styles";
import CustomizedInputBase from './CustomizedInputBase';

export default function Search({ filterByNames, data, OrderBy }) {

  return (
    <S.Container>
      <CustomizedInputBase filterByNames={filterByNames} data={data} />
      <div className="OrderBy">
        <div>Ordenar por:</div>
        <MultipleSelect OrderBy={OrderBy} />
      </div>
    </S.Container>
  );
}
