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
						Our Story{' '}
					</MobileNavLink>
					<MobileNavLink to='details' onClick={toggle}>
						{' '}
						Details{' '}
					</MobileNavLink>
					<MobileNavLink to='seating' onClick={toggle}>
						{' '}
						Seating{' '}
					</MobileNavLink>
					<MobileNavLink to='party' onClick={toggle}>
						{' '}
						Wedding Party{' '}
					</MobileNavLink>

					<MobileNavLink to='memories' onClick={toggle}>
						{' '}
						Memories{' '}
					</MobileNavLink>
					<MobileNavLink to='registry' onClick={toggle}>
						{' '}
						Registry{' '}
					</MobileNavLink>
				</MobileNavMenu>
			</MobileNavWrapper>
		</MobileNavCont>
	);
};

export default MobileNav;
