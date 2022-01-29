import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const MobileNavCont = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #2d2a39;
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
	/* top: 0; */
`;

export const CloseIcon = styled(FaTimes)`
	color: #fff;
`;

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;

export const MobileNavWrapper = styled.div`
	color: #fff;
`;

export const MobileNavMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(6, 60px);
	}
`;

export const MobileNavLink = styled(LinkScroll)`
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	color: #fff;
	font-size: 20px;
	cursor: pointer;

	&:hover {
		color: #04afa1;
		transition: 0.2s ease-in-out;
	}
`;

export const SideBtnWrap = styled.div`
	display: flex;
	justify-content: center;
`;

export const MobileNavRoute = styled(LinkRouter)`
	border-radius: 50px;
	background: yellow;
	white-space: nowrap;
	padding: 16px 64px;
	color: #fff;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #04afa1;
	}
`;

export const DocuLink = styled.a`
	color: #fff;
	font-size: 18px;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
`;

export const MobileNavItem = styled.li`
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	color: #fff;
	font-size: 20px;
	cursor: pointer;

	&:hover {
		color: #04afa1;
		transition: 0.2s ease-in-out;
	}
`;
