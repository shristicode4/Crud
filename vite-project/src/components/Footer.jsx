import React from 'react';
import {Grid, Typography, List, ListItem, ListItemText, Button} from "@mui/material";

export default function Footer() {
    return(
        <section id="footer" style={{padding:'5% 5% 2%'}}>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <Typography variant="h5" style={{marginBottom: '5%'}}>
                    Ready to take your online presence to the next level? Contact us for custimized IT Solutions:

                    </Typography>
                    <button className="lite"> Contact us!</button>
                </Grid>
                <Grid item md={2}>
                
                
                <Grid item md={4}>
                    <Typography variant="h6"> EXPLORE US!!</Typography>
                    <Grid container>
                        <Grid item md={6} style={{ paddingRight: '10px' }}>
<List>
    <ListItem style={{paddingLeft:'0' , marginBottom: '10px', marginRight: '30px'}}>
        <a href="." className="About">About</a>
    </ListItem>
</List>

<List>
    <ListItem style={{paddingLeft:'0' , marginBottom: '10px', marginRight: '30px'}}>
        <a href="." className="Services">Services</a>
    </ListItem>
</List>

<List>
    <ListItem style={{paddingLeft:'0' , marginBottom: '10px', marginRight: '30px'}}>
        <a href="." className="Links">Links</a>
    </ListItem>
</List>
                        </Grid>
                        <Grid item md={6} style={{ paddingLeft: '10px' }}>

                        <List>
    <ListItem style={{paddingLeft:'0' , marginBottom: '10px', marginLeft: '30px'}}>
        <a href="." className="About">About</a>
    </ListItem>
</List>

<List>
    <ListItem style={{paddingLeft:'0' , marginBottom: '10px', marginLeft: '30px'}}>
        <a href="." className="Services">Services</a>
    </ListItem>
</List>

<List>
    <ListItem style={{paddingLeft:'0' , marginBottom: '10px', marginLeft: '30px'}}>
        <a href="." className="Links">Links</a>
    </ListItem>
</List>
                        </Grid>
                    </Grid>


                    </Grid>


                    </Grid>

            </Grid>

            <p styles={{ margin:0,marhinTop:'5%' }}>
            Explore Infoogy!
            <strong> Lorem Ipsum </strong>
            </p>
        </section>
    )
}