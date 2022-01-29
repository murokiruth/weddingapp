import React from 'react';
import { FooterCont, FooterWrapper, WebsiteRights } from './FooterElements';

const Footer = () => {
	return (
		<>
			<FooterCont>
				<FooterWrapper>
					<WebsiteRights>SidSonnie © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
				</FooterWrapper>
			</FooterCont>
		</>
	);
};

export default Footer;
