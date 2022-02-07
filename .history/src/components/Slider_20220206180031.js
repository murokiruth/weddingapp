import React, { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import one from '../images/slider/proposal.png';
import two from '../images/slider/orleans.png';
import three from '../images/slider/beach.png';
import four from '../images/slider/lake.png';
import five from '../images/slider/xmas.png';
import six from '../images/slider/seattleferry.png';
import seven from '../images/slider/seattle.png';

const images = [one, two, three, four, five, six, seven];

export default function Carousel() {
	const [imageIndex, setImageIndex] = useState(0);

	const sliderSettings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		lazyload: true,
		speed: 3000,
		centerMode: true,
		centerPadding: 0,
		autoplay: true,
		adaptiveHeight: true,
		beforeChange: (current, next) => setImageIndex(next),

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<section className='justify-center items-center px-8 py-16 bg-gray-700' id='memories'>
			<h1 className='text-4xl text-center pb-16 text-white p-2'>Memories</h1>
			<div className=''>
				<Slider {...sliderSettings}>
					{images.map((img, idx) => (
						<div key={idx} className={idx === imageIndex ? 'slide activeSlide' : 'slide'}>
							<img key={idx} src={img} alt={img} />
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
