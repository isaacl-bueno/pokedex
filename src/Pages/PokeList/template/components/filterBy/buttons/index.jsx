import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import * as S from "./styles";

export default function Buttons({ data }) {
  const [clickedTypes, setClickedTypes] = useState([]);

  const filterTypes = (items) => {
    const newItems = items.map((item) => {
      const types = item.type.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
      return { ...item, type: types };
    });

    const types = newItems.map((item) => item.type).flat().filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    setTypesValue(types);
  }

  useEffect(() => {
    filterTypes(data);
  }, [data]);

  const [TypesValue, setTypesValue] = useState([]);

  const handleTypeClick = (type) => {
    if (clickedTypes.includes(type)) {
      setClickedTypes(clickedTypes.filter((clickedType) => clickedType !== type));
    } else {
      setClickedTypes([...clickedTypes, type]);
    }
  };

  return (
    <S.Container>
      <div className="filterBy">
        {TypesValue.map((type, idx) => (
          <Button
            key={idx}
            className={`Buttons ${clickedTypes.includes(type) ? 'active' : ''}`}
            variant="contained"
            color="primary"
            onClick={() => handleTypeClick(type)}
          >
            {type}
          </Button>
        ))}
      </div>
    </S.Container>
  );
}
