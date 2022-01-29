import React from 'react';
import { MobileNavCont, Icon, CloseIcon, MobileNavWrapper, MobileNavMenu, MobileNavLink } from './MobileNavElements';

const MobileNav = ({ isOpen, toggle }) => {
	return (
		<MobileNavCont isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<MobileNavWrapper>
				<MobileNavMenu>
					<MobileNavLink to='story' onClick={toggle}>
						{' '}
						About{' '}
					</MobileNavLink>
					<MobileNavLink to='details' onClick={toggle}>
						{' '}
						Solutions{' '}
					</MobileNavLink>
					<MobileNavLink to='party' onClick={toggle}>
						{' '}
						Towing{' '}
					</MobileNavLink>
					<MobileNavLink to='rsvp' onClick={toggle}>
						{' '}
						Contact Us{' '}
					</MobileNavLink>
					<MobileNavLink to='memories' onClick={toggle}>
						{' '}
						Contact Us{' '}
					</MobileNavLink>
					<MobileNavLink to='registry' onClick={toggle}>
						{' '}
						Contact Us{' '}
					</MobileNavLink>
				</MobileNavMenu>
			</MobileNavWrapper>
		</MobileNavCont>
	);
};

export default MobileNav;
