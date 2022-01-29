import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

export const Nav = styled.div`
	background: ${({ scrollNav }) => (scrollNav ? '#2D2A39' : '#b85c65')};
	height: 80px;
	width: 100%;
	margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all;
	}
`;
export const SideNavCont = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-size: 26px;
	font-weight: bold;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	text-decoration: none;

	@media screen and (max-width: 890px) {
		font-size: 18px;
	}
`;

export const SideNavMenu = styled.div`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const NavItem = styled.div`
	height: 80px;
`;
export const NavLink = styled(LinkScroll)`
	color: #fff;
	font-size: 16px;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		border-bottom: 3px solid #05e1cf;
	}
`;
