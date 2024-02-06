import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export default function RecipeReviewCard({

  sprites,
  name,
}) {


  return (
    <Card sx={{ maxWidth: 345, mt: 10 }}>
      <CardMedia
        component="img"
        height="168"
        width="168"
        image={sprites?.large || ''}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {name || ''}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {name || ''}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {name || ''} {name || ''}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

      </CardActions>
    </Card>
  );
}