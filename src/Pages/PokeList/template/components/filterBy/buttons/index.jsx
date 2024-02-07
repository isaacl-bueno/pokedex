import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import * as S from "./styles";

export default function Buttons({ data, filterByType }) {
  const [clickedType, setClickedType] = useState(null);

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
    if (clickedType === type) {
      setClickedType(null);
      filterByType({ type: null, data });
    } else {
      setClickedType(type);
      filterByType({ type, data });
    }
  };

  return (
    <S.Container>
      <div className="filterBy">
        {TypesValue.map((type, idx) => (
          <Button
            key={idx}
            className={`Buttons ${clickedType === type ? 'active' : ''}`}
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
