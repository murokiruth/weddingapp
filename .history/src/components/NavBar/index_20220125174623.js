import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, SideNavCont, SideNavMenu, NavLogo, NavItem, NavLink, MobileIcon } from './SideNavBarElements';
import { animateScroll as scroll } from 'react-scroll';
import { GiLoveMystery } from 'react-icons/gi';
import '../../App.css';

const SideNavBar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<>
			<Nav scrollNav={scrollNav}>
				<SideNavCont>
					<NavLogo to='/' onclick={toggleHome}>
						<GiLoveMystery className='loveIcon' />
					</NavLogo>

					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>

					<SideNavMenu>
						<NavItem>
							{/* <GiLoveMystery className='loveIcon' /> */}
							<NavLink to='story' smooth={true} duration={500} spy={true} offset={-80} exact='true'>
								{' '}
								Our Story{' '}
							</NavLink>
						</NavItem>
						<NavItem>
							{/* <GiLoveMystery className='loveIcon' /> */}
							<NavLink to='details' smooth={true} duration={500} spy={true} offset={-80} exact='true'>
								{' '}
								Details{' '}
							</NavLink>
						</NavItem>
						<NavItem>
							{/* <GiLoveMystery className='loveIcon' /> */}
							<NavLink to='party' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
								{' '}
								Wedding Party{' '}
							</NavLink>
						</NavItem>
						<NavItem>
							{/* <GiLoveMystery className='loveIcon' /> */}
							<NavLink to='rsvp' smooth={true} duration={500} spy={true} offset={-80} exact='true'>
								{' '}
								RSVP{' '}
							</NavLink>
						</NavItem>
						<NavItem>
							{/* <GiLoveMystery className='loveIcon' /> */}
							<NavLink to='memories' smooth={true} duration={500} spy={true} offset={-80} exact='true'>
								{' '}
								Memories{' '}
							</NavLink>
						</NavItem>
						<NavItem>
							{/* <GiLoveMystery className='loveIcon' /> */}
							<NavLink to='registry' smooth={true} duration={500} spy={true} offset={-50}>
								{' '}
								Registry{' '}
							</NavLink>
						</NavItem>
					</SideNavMenu>
				</SideNavCont>
			</Nav>
		</>
	);
};

export default SideNavBar;
