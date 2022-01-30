import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import MobileNav from '../components/MobileNav';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import Details from '../components/Details';
import Party from '../components/Party';
import Registry from '../components/Registry';
import Footer from '../components/Footer';
import GuestForm from '../components/GuestForm';

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
			<GuestForm />
			<Party />
			<Registry />
			<Footer />
		</>
	);
};

export default Home;
