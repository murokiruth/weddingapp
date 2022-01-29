import React from 'react';
import { HeroCont, HeroBG, HeroContent, HeroImage, HeroH1 } from './HeroElements';
// import Image from '../../images/sidsonnieLake.jpg';
import SideNavBar from '../SideNavBar';

const Hero = () => {
	return (
		<HeroCont>
			<HeroBG>{/* <HeroImage src={Image} type='img' /> */}</HeroBG>
			<SideNavBar />
			<HeroContent>
				<HeroH1> Sonnie weds Sid </HeroH1>
			</HeroContent>
		</HeroCont>
	);
};

export default Hero;
