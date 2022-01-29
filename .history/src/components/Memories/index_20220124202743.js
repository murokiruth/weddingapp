import React from 'react';
import { Image } from './MemoriesElements';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image1 from '../../images/beach.jpg';
import Image2 from '../../images/proposal1.jpg';
import Image3 from '../../images/sidsonnieLake.jpg';
import Image4 from '../../images/redrosesbackground.jpg';

const Memories = () => {
	return (
		<div id='memories'>
			<AliceCarousel autoPlay autoPlayInterval={3000} />
			<Image src={Image1} alt='pic' />
			<Image src={Image2} alt='pic' />
			<Image src={Image3} alt='pic' />
			<Image src={Image4} alt='pic' />
		</div>
	);
};

export default Memories;
