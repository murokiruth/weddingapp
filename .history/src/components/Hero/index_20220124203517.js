import React from 'react';
import { HeroCont, HeroBG, HeroImage, HeroContent, HeroH1 } from './HeroElements';
import Image from '../../images/redrosesbackground.jpg';
import SideNavBar from '../SideNavBar';

const Hero = () => {
	return (
		<HeroCont id='hero'>
			<HeroBG>
				<HeroImage />
			</HeroBG>
			<SideNavBar />
			<HeroContent>
				<HeroH1> Sonnie weds Sid </HeroH1>
			</HeroContent>
		</HeroCont>
	);
};

export default Hero;
