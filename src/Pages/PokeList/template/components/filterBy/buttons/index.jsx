import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

import * as S from "./styles";

export default function Buttons({ data }) {
  const filterTypes = (itens) => {
    const newItens = itens.map((item) => {
      const types = item.type.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
      return { ...item, type: types };
    });

    const types = newItens.map((item) => item.type).flat().filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    setTypesValue(types);
  }
  useEffect(() => {
    filterTypes(data)
  }, [data]);

  const [TypesValue, setTypesValue] = useState()

  return (
    <S.Container>
      <div className="filterBy" >
        {TypesValue?.map((type, idx) => (
          <Button className="Buttons" key={idx} variant="contained" color="primary">
            {type}
          </Button>
        ))}
      </div>
    </S.Container>
  );
}
