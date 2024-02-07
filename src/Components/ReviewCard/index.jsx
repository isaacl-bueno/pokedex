import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import heartSVG from "../../assets/faheart.svg";
import * as S from "./styles";
import { Box } from '@mui/material';

export default function RecipeReviewCard({
  national_number,
  type,
  sprites,
  name,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
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
  }, [isFavorite, national_number]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(national_number));
  }, [national_number]);


  return (
    <S.Container>
      <Card sx={{ maxWidth: 168, mt: 10 }}>
        <CardActions className='CardActions'>
          <IconButton className='IconButton' aria-label="add to favorites" onClick={toggleFavorite}>
            {!isFavorite ? (
              <img style={{ height: "25px", width: "25px", color: "#e60f00" }} src={heartSVG} alt="Synvia SVG" />
            ) : (
              <FontAwesomeIcon icon={faHeart} style={{ color: "#e60f00" }} />
            )}
          </IconButton>
        </CardActions>
        <CardMedia
          className='CardMedia'
          component="img"
          height="168"
          width="168"
          sx={{ objectFit: "scale-down" }}
          image={sprites?.large || ''}
          alt="Paella dish"
        />
        <CardContent className='Content'>
          <Typography sx={{ width: "100%", color: "#333333" }} variant="body2" color="text.secondary">
            {"Nº " + (national_number || '')}
          </Typography>
          <Typography sx={{ width: "100%", color: "#333333" }} variant="body2" color="text.secondary">
            <b>{name || ''}</b>
          </Typography>
          <Typography sx={{ width: "100%", display: "flex", color: "#333333" }}>
            {type.map((typeItem, index) => (
              <Box
              key={index}
              sx={{
                backgroundColor: typeItem.toLowerCase() || 'gray',
                color: 'white',
                padding: '4px 8px',
                borderRadius: '4px',
                margin: '4px',
                display: 'inline-block',
              }}
            >
              {typeItem}
            </Box>
            ))}
          </Typography>
        </CardContent>
      </Card>
    </S.Container>
  );
}
