import { Grid } from "@mui/material";
import ProCard from "./ProCard";


export default function Projects(props){

    return(
        <section id="projects" style={{padding: '2% 5%'}}>

            <Grid container>
                <Grid item md={6}>
                    <ProCard img='https://www.intego.com/mac-security-blog/wp-content/uploads/2021/02/icloud-hero.png' />
                </Grid>


                <Grid item md={6}>
                    <ProCard  img='https://i.insider.com/636ea74c951bdc00182dc0c9?width=1000&format=jpeg&auto=webp' />
                </Grid>

            </Grid>
        </section>
    )
}