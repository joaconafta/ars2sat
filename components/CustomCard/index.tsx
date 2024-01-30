import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Currencies from '../Currencies';
import { CardMedia, Container } from '@mui/material';
import Image from 'next/image'

export default function CustomCard() {
  return (
    <Container maxWidth="sm">
        <Card style={{ backgroundColor: '#c3c3c3'}}>
            <CardContent className='text-center'>
            <Typography gutterBottom variant="h4" component="div">
                ars2sat
            </Typography>
            <Typography gutterBottom variant="subtitle2"  component="div">
                Conversor de pesos falsificados a satoshis
            </Typography>
            {/* <Typography gutterBottom variant="subtitle2"  component="div">
                CONVERSOR DE PESOS A SATOSHIS
            </Typography> */}
            <Currencies />
            <Typography gutterBottom variant="body2"  className="mt-3" component="div">
                Ta todo bien loko, no pasa nada!
            </Typography>
            </CardContent>
        {/* <CardActions>
            
        </CardActions> */}
        </Card> 
    </Container>
  );
}