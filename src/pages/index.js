import React from "react";
import Hero from "../components/Hero";
import OurStory from "../components/OurStory";
import Details  from "../components/Details";
import Party from "../components/Party";
import PageBg from "../videos/pexels-anna-nekrashevich-7814675.mp4";


const Home =() => {
    return (
        <>
            <video autoPlay loop style={{ 
                position:"absolute",
                width:"100%",
                // height:"100%",
                objectFit:"cover",
                left: "50%",
                top: "50%",
                zIndex:"-1",
                transform: "translate(-50%, -50%)",

                }}>
                    <source src={PageBg} type="video/mp4" />
                </video>
            <Hero />
            <OurStory />
            <Details />
            <Party />
            

        </>
    )
};

export default Home;