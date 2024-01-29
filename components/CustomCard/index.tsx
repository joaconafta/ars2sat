import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Currencies from '../Currencies';
import { Container } from '@mui/material';

export default function CustomCard() {
  return (
    <Container maxWidth="sm" >
        <Card>
            {/* <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
            /> */}
            <CardContent className='text-center'>
            <Typography gutterBottom variant="h4" component="div">
                ars2sat
            </Typography>
            <Typography gutterBottom variant="h6"  component="div">
                Conversor de pesos a satoshis
            </Typography>
            <Currencies />
            </CardContent>
        {/* <CardActions>
            
        </CardActions> */}
        </Card> 
    </Container>
  );
}