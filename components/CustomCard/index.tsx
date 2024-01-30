import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Currencies from '../Currencies';
import { Container } from '@mui/material';

export default function CustomCard() {
  return (
    <Container maxWidth="sm" >
        <Card style={{ backgroundColor: '#c3c3c3'}}>
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
            <Typography gutterBottom variant="subtitle2"  component="div">
                Conversor de pesos a satoshis
            </Typography>
            {/* <Typography gutterBottom variant="subtitle2"  component="div">
                CONVERSOR DE PESOS A SATOSHIS
            </Typography> */}
            <Currencies />
            </CardContent>
        {/* <CardActions>
            
        </CardActions> */}
        </Card> 
    </Container>
  );
}