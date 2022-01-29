import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.div`
	z-index: 2;
`;
export const SideNavCont = styled.div`
	position: fixed;
	left: 10px;
	top: 5%;
	padding: 8px 24px;
	color: #fff;
	font-size: 18px;
	background: #037d73;
	transition: 0.3s ease-in-out;
`;
export const SideNavMenu = styled.div``;
export const NavItem = styled.div`
	width: 100%;
	height: 30px;

	display: flex;
	flex-direction: row;
`;
export const NavLink = styled(LinkScroll)``;
