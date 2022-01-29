import React, { useState } from 'react';
import { Nav, SideNavCont, SideNavMenu, NavItem, NavLink } from './SideNavBarElements';
import { animateScroll as scroll } from 'react-scroll';
import { GiLoveMystery } from 'react-icons/gi';
import '../../App.css';

const SideNavBar = ({ toggle }) => {
	const [scrollNav] = useState(false);

	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<Nav scrollNav={scrollNav}>
			<SideNavCont to='/' onclick={toggleHome}>
				<SideNavMenu>
					<NavItem>
						<GiLoveMystery id='icon' />
						<NavLink to='story' smooth={true} duration={500} spy={true} offset={-50}>
							{' '}
							Our Story{' '}
						</NavLink>
					</NavItem>
					<NavItem>
						<GiLoveMystery />
						<NavLink to='details' smooth={true} duration={500} spy={true} offset={-50}>
							{' '}
							Details{' '}
						</NavLink>
					</NavItem>
					<NavItem>
						<GiLoveMystery />
						<NavLink to='party' smooth={true} duration={500} spy={true} offset={-50}>
							{' '}
							Wedding Party{' '}
						</NavLink>
					</NavItem>
					<NavItem>
						<GiLoveMystery />
						<NavLink to='rsvp' smooth={true} duration={500} spy={true} offset={-50}>
							{' '}
							RSVP{' '}
						</NavLink>
					</NavItem>
					<NavItem>
						<GiLoveMystery />
						<NavLink to='registry' smooth={true} duration={500} spy={true} offset={-50}>
							{' '}
							Registry{' '}
						</NavLink>
					</NavItem>
				</SideNavMenu>
			</SideNavCont>
		</Nav>
	);
};

export default SideNavBar;
