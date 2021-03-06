import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const MobileNavCont = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #384861;
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
	color: white;
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
		transition: 0.3s ease-in-out;
	}
`;
