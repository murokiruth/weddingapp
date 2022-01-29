import React from 'react';
import { HeroCont, HeroBG, HeroContent, HeroH1 } from './HeroElements';
// import Image from '../../images/redrosesbackground.jpg';
import SideNavBar from '../SideNavBar';

const Hero = () => {
	return (
		<HeroCont id='hero'>
			<HeroBG>{/* <HeroImage src={Image} type='img' /> */}</HeroBG>
			<SideNavBar />
			<HeroContent>
				<HeroH1> Sonnie </HeroH1>
			</HeroContent>
			<HeroContent>
				<HeroH1> and </HeroH1>
			</HeroContent>
			<HeroContent>
				<HeroH1> Sidney </HeroH1>
			</HeroContent>
		</HeroCont>
	);
};

export default Hero;
