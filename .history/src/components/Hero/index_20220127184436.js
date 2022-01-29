import React from 'react';
import { HeroCont, HeroBG, HeroContent, HeroH1 } from './HeroElements';
import Image from '../../images/redrosesbackground.jpg';
import NavBar from '../NavBar';

const Hero = () => {
	return (
		<HeroCont id='hero'>
			<HeroBG>
				<img src={Image} alt='img' />
			</HeroBG>
			<NavBar />
			<HeroContent>
				<HeroH1> Sonnie and Sidney </HeroH1>
			</HeroContent>
		</HeroCont>
	);
};

export default Hero;
