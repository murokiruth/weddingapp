import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import Details from '../components/Details';
import Party from '../components/Party';
import RSVP from '../components/RSVP';
import Registry from '../components/Registry';
import GuestData from '../MOCK_DATA.json';
import Footer from '../components/Footer';
// import Memories from '../components/Memories';
// import { SliderImgData } from '../components/Memories/SliderImgData';

// import PageBg from '../videos/20210214_093120.mp4';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<MobileNav isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />

			<Hero />
			<OurStory />
			<Details />

			<RSVP placeholder='e.g. John Smith' data={GuestData} />
			<Party />
			{/* <Memories slides={SliderImgData} /> */}
			<Registry />
			<Footer />
		</>
	);
};

export default Home;
