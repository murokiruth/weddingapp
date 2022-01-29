import React from 'react';
import { HeroCont, HeroBG, HeroContent, HeroH1, HeroImage } from './HeroElements';
import BgImage from '../../images/bgimage.jpg';
import NavBar from '../NavBar';

const Hero = () => {
	return (
		<HeroCont id='hero'>
			<HeroBG>
				<HeroImage src={BgImage} type='img' />
			</HeroBG>
			<NavBar />
			<HeroContent>
				<HeroH1> Sonnie and Sidney </HeroH1>
			</HeroContent>
		</HeroCont>
	);
};

export default Hero;
