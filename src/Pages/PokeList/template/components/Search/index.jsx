import React from 'react';

// @ Components
import MultipleSelect from '../../../../../Components/Select';
import CustomizedInputBase from './CustomizedInputBase';

// @ Styles
import * as S from "./styles";

export const Search = ({ filterByNames, data, OrderBy }) => {
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


