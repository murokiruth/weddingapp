import React from 'react';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import Details from '../components/Details';
import Party from '../components/Party';
import RSVP from '../components/RSVP';
import Registry from '../components/Registry';
import GuestData from '../MOCK_DATA.json';
import Footer from '../components/Footer';
import Memories from '../components/Memories';

// import PageBg from '../videos/20210214_093120.mp4';

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

			<Hero />
			<OurStory />
			<Details />

			<RSVP placeholder='e.g. John Smith' data={GuestData} />
			<Memories />
			<Party />
			<Registry />
			<Footer />
		</>
	);
};

export default Home;
