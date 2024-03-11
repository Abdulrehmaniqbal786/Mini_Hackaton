import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import card4 from '../Components/images/card4.jpg'

export default function MediaCard1() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={card4}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        6 benefits of donating blood
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Blood is a vital part of the human body and any deficiency 
        in blood levels can cause serious complications in the health of a person...
        </Typography>
      </CardContent>
      <CardActions>
        
      <Button variant='outlined' href='/login' size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

