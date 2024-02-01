import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Currencies from '../Currencies';
import { Container, Link } from '@mui/material';

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
            <Typography gutterBottom variant="subtitle2"  className="mt-5" component="div">
                Ta todo bien loko, no pasa nada!
            </Typography>
            </CardContent>
        <CardContent className="text-center" style={{ padding: '0px', margin: '0px'}}>
            <Typography gutterBottom variant="subtitle2" style={{ color: "grey"}} component="div">
            Made by <Link href='https://x.com/0xnafta' target="_blank">@0xnafta</Link> & <Link target="_blank" href='https://x.com/lberna98'>@lberna98</Link>
        </Typography>
        </CardContent>
        </Card> 
    </Container>
  );
}