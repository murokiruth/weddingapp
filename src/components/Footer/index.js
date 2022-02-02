import React from 'react';
import { FooterCont, FooterWrapper } from './FooterElements';

const Footer = () => {
	return (
		<>
			<FooterCont>
				<FooterWrapper>
					<p className="p-8 text-base text-white text-justify">
						Made with 💖 by The Owallahs © {new Date().getFullYear()}
					</p>
				</FooterWrapper>
			</FooterCont>
		</>
	);
};

export default Footer;
