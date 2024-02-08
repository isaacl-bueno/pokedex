import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import * as S from "./styles";
import { Box } from '@mui/material';
import heartSVG from "../../assets/faheart.svg";

export default function RecipeReviewCard({
  national_number,
  type,
  sprites,
  name,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const onFavorite = (isFavorite) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      favorites.push(national_number);
    } else {
      const index = favorites.indexOf(national_number);
      if (index > -1) {
        favorites.splice(index, 1);
      }
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));

    setIsFavorite(isFavorite);
  }

  const checkFavorite = ({ setIsFavorite, national_number }) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(national_number));
  }

  useEffect(() => {
    checkFavorite({ setIsFavorite, national_number });
  }, [national_number]);

  return (
    <S.Container >
      <Card className='CardContainer' sx={{ mt: 10 }}>
        <CardActions className='CardActions'>
          {isFavorite ?
            <IconButton aria-label="add to favorites" onClick={() => onFavorite(!isFavorite)}>
              <FontAwesomeIcon icon={faHeart} style={{ color: "#E2350D" }} />
            </IconButton>
            :
            <IconButton className='IconButton' aria-label="add to favorites" onClick={() => onFavorite(!isFavorite)}>
              <img src={heartSVG} alt="Heart SVG" style={{ height: "24px", }} />
            </IconButton>}
        </CardActions>
        <CardMedia
          className='CardMedia'
          component="img"
          height="180"
          width="180"
          sx={{ objectFit: "scale-down" }}
          image={sprites?.large || ''}
          alt="Image"
        />
        <CardContent className='Content'>
          <Typography sx={{ width: "100%", color: "#333333", }} variant="body2" color="text.secondary">
            {"Nº " + (national_number || '')}
          </Typography>
          <Typography sx={{ width: "100%", color: "#333333", fontSize: "18px", }} variant="body2" color="text.secondary">
            <b>{name || ''}</b>
          </Typography >
          <Typography sx={{ width: "100%", display: "flex", color: "#333333", }}>
            {type.map((typeItem, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: typeItem.toLowerCase(),
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    margin: '4px',
                    display: 'inline-block',
                  }}
                >
                  {typeItem}
                </Box>
              )
            })}
          </Typography>
        </CardContent>
      </Card>
    </S.Container>
  );
}
