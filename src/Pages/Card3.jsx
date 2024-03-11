import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import card3 from '../Components/images/card3.jpg'

export default function MediaCard2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={card3}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Blood Bank
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Blood Bank aims to provide safe blood and its components to those in need.
         The delivered blood undergoes a process meeting international quality standards
          throughout blood collection, screening, storage, 
        cross-matching and transfusion, using the technologically advanced equipment.
        </Typography>
      </CardContent>
      <CardActions>
       
      <Button variant='outlined' href='/login' size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
