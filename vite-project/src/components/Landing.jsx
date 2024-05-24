import React from 'react';
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';

export default function Landing() {
    return (
        <section id="Landing" style={{ padding: '5%', marginTop:'3%' }}>
            <Grid container>
                <Grid item md={6}>
                    <Typography variant="h6" fontFamily="Roboto" style={{ backgroundColor: 'black', color: 'white' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Typography>
                </Grid>
                <Grid item md={6}></Grid>
                <Grid item md={8}>
                <Typography variant="h2"  fontWeight={700} fontSize={'7vw'} >
                    Cloud Services
                </Typography>

                </Grid>

                <Grid item md={4}  styles={{display:'flex', justifyContent:'end', alignItems:'end'}}>

                <Typography variant="p"  Style={{width:'100'}} >
                    infooogy@gmail.com <br/>
                    <span styles={{ opacity:'0.8'}}> Scroll to explore!!!!!!</span>
                </Typography>
                </Grid>
            </Grid>
        </section>
    );
}
