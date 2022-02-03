import React from 'react';
import {
	HeroCont,
	HeroBG,
	HeroContent,
	HeroH1,
	HeroImage,
} from './HeroElements';
import BgImage from '../../images/bgimage.jpg';

const Hero = () => {
	return (
		<HeroCont id="hero">
			<HeroBG>
				<HeroImage src={BgImage} type="img" />
			</HeroBG>
			<HeroContent>
				<HeroH1> Sonnie </HeroH1>
				<HeroH1> and </HeroH1>
				<HeroH1> Sidney </HeroH1>
			</HeroContent>
		</HeroCont>
	);
};

export default Hero;
