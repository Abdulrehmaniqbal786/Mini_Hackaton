import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import card5 from '../Components/images/card5.jpg'

export default function MediaCard3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={card5}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Supporting Transfusion services
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Our Blood Bank supports our Transfusion Services Division by providing blood and
         its components to 600 Thalassemia and Haemophilia patients, amount to 15,000 
units of blood annually. This is enabled by the donations of our volunteer blood donors.
        </Typography>
      </CardContent>
      <CardActions>
        
      <Button variant='outlined' href='/login' size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}