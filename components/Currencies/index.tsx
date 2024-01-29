'use client'
import { Grid, IconButton, Typography, TextField, Container, LinearProgress } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import * as React from 'react';
import { useEffect, useState } from 'react';


export default function Currencies() {
    const [amount, setAmount] = useState<number>(1)
    const [from, setFrom] = useState<string>('ARS')
    const [to, setTo] = useState<string>('SAT')
    const [response, setResponse] = useState<string>('0')
    const [loading, setLoading] = useState<boolean>(false)
    const [idTimeOut, setIdTimoout] = useState<NodeJS.Timeout>()

    useEffect (() => {
        debounceApiCall()
    }, [amount, from, to])
    useEffect (() => {
        debounceApiCall()
    }, [])


    const swapCurrencies = () => {
        const tmp = from
        setFrom(to)
        setTo(tmp)
    }

    const getUSDBlueValue = async () => {
        return fetch('https://api.bluelytics.com.ar/v2/latest')
            .then(response => response.json())
            .then(data => {
                return data.blue.value_sell
            })
            .catch(error => console.error('Error al obtener cotización USD', error));
    }

    const getSATValue = async () => {
        return fetch('https://api.coinbase.com/v2/prices/BTC-USD/buy')
            .then(response => response.json())
            .then(data => {
                return data.data.amount / 100000000            
            })
            .catch(error => console.error('Error al obtener cotización BTC', error));
    }

    const calcPrice = async () => {
        console.log(amount,from,to)
        if (!amount) {
            setAmount(0)
            setResponse('0')
        }
        const usdValue = await getUSDBlueValue()
        const satValue = await getSATValue()
        let res = 0
        if (from === 'ARS' && to === 'SAT')
            res = (amount / usdValue) / Number(satValue);
        else if (from === 'SAT' && to === 'ARS')
            res = amount * usdValue * Number(satValue);
        else console.log('invalid currencies')
        setResponse(res.toFixed(2))
        setLoading(false)
    }

    const debounce = (func: Function, delay: number) => {
        return function (this: void, ...args: any[]) {
            setLoading(true)
            clearTimeout(idTimeOut);
            const timeoutId = setTimeout(() => func.apply(this, args), delay);
            setIdTimoout(timeoutId)
        }
    }
    
    const debounceApiCall = debounce(calcPrice, 300)

    return (
        <Container className="mt-8">
            <TextField label='Monto' type='number' defaultValue={1} onChange={(e) => setAmount(Number(e.target.value))}></TextField>
            <Grid container className='mt-3'>
                <Grid item xs={3}></Grid>
                <Grid item xs={2}>
                    <Typography gutterBottom variant="h6" component="div">
                        {from}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <IconButton aria-label="swap" size="small" onClick={swapCurrencies}>
                        <SwapHorizIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={2}>
                    <Typography gutterBottom variant="h6" component="div">
                        {to}
                    </Typography>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
            {/* <Typography gutterBottom variant='caption' component="div">
                1 SAT = X USD = 2 ARS
            </Typography> */}
            {!loading &&
                <Typography className='mt-5' gutterBottom variant='body1' component="span">
                    {amount} {from} = {response} {to}
                </Typography>
            }
            {loading && <LinearProgress className='mt-5'/>}
   
        </Container>
    );
}
