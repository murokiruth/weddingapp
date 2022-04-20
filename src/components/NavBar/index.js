import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavCont, NavMenu, NavLogo, NavItem, NavLink, MobileIcon } from './NavBarElements';
import { animateScroll as scroll } from 'react-scroll';
import { GiLoveMystery } from 'react-icons/gi';
import '../../App.css';

const NavBar = ({ toggle }) => {
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
				<NavCont>
					<NavLogo to='/'>
						<GiLoveMystery onClick={toggleHome} />
					</NavLogo>

					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>

					<NavMenu>
						<NavItem>
							<NavLink to='story' smooth={true} duration={500} spy={true} offset={-80} exact='true'>
								{' '}
								Our Story{' '}
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='details' smooth={true} duration={500} spy={true} offset={-80} exact='true'>
								{' '}
								Details{' '}
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='seating' smooth={true} duration={500} spy={true} offset={-80} exact='true'>
								{' '}
								Seating{' '}
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='party' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
								{' '}
								Wedding Party{' '}
							</NavLink>
						</NavItem>

						<NavItem>
							<NavLink to='memories' smooth={true} duration={500} spy={true} offset={-80} exact='true'>
								{' '}
								Memories{' '}
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='registry' smooth={true} duration={500} spy={true} offset={-80}>
								{' '}
								Registry{' '}
							</NavLink>
						</NavItem>
					</NavMenu>
				</NavCont>
			</Nav>
		</>
	);
};

export default NavBar;
