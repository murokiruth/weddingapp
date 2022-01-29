import React from 'react';
import { HeroCont, HeroBG, HeroContent, HeroH1 } from './HeroElements';
// import Image from '../../images/redrosesbackground.jpg';
import SideNavBar from '../SideNavBar';

const Hero = () => {
	return (
		<HeroCont id='hero'>
			<HeroBG>{/* <HeroImage src={Image} type='img' /> */}</HeroBG>
			<SideNavBar />
			<div>Sonnie</div>
			<div>and</div>
			<div>Sidney</div>

			{/* <HeroContent>
				<HeroH1> Sonnie and Sidney </HeroH1>
			</HeroContent> */}
		</HeroCont>
	);
};

export default Hero;
