import Navbar from "./Navbar";
import Landing from "./Landing";
import Projects from "./Projects";
import {Box} from "@mui/material";
import Footer from "./Footer";


export default function Home() {
    return (
        <section id='home'>
            <Navbar />
            <Landing />
            <Projects />
            <Box id="texture" sx={{ height: { sx: '100vw', md: '45vw' } }} />
            <Footer />
        </section>
    )
}