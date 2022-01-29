import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

export const Nav = styled.div`
	background: ${({ scrollNav }) => (scrollNav ? 'Tranparent' : '#2D2A39')};
	height: 80px;
	margin-top: -80px;

	/* width: 100%; */
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 10;
	border: 2px solid purple;

	@media screen and (max-width: 960px) {
		transition: 0.8s all;
	}
`;

export const NavCont = styled.div`
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
	/* margin-left: 24px; */
	font-size: 26px;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	text-decoration: none;

	@media screen and (max-width: 890px) {
		font-size: 18px;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	/* margin-right: 100px; */

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const NavItem = styled.li`
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
		border-bottom: 3px solid yellow;
	}
`;
export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		cursor: pointer;
		color: #fff;
	}
`;
