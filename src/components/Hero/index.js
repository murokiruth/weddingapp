import React from "react";
import {HeroCont, HeroBG, HeroContent, HeroImage, HeroH2 } from "./HeroElements";
import Image from "../../images/lake.jpg";
import SideNavBar from "../SideNavBar";

const Hero = () => {
    return (
        <HeroCont>
            <HeroBG>
                <HeroImage src={Image} type="img" />
            </HeroBG>
            <SideNavBar />
            <HeroContent>
                <HeroH2> We're Getting Married!!!</HeroH2>
            </HeroContent>
        </HeroCont>
    );
};

export default Hero;