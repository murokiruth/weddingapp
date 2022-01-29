import React from 'react';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import Details from '../components/Details';
import Party from '../components/Party';
import RSVP from '../components/RSVP';
// import PageBg from '../videos/20210214_093120.mp4';
import Image from './images/redrosesbackground.jpg';

const Home = () => {
	return (
		<>
			{/* <video
				autoPlay
				muted
				loop
				style={{
					position: 'fixed',
					minWidth: '100%',
					minHeight: '100%',
					objectFit: 'cover',
					zIndex: '-1',
				}}>
				<source src={PageBg} type='video/mp4' />
			</video> */}
			<div>styles={{ backgroundImage: `url(${Image})` }}</div>
			<Hero />
			<OurStory />
			<Details />
			<Party />
			<RSVP />
		</>
	);
};

export default Home;
