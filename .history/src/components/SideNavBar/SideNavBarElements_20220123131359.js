import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.div`
	background: ${({ scrollNav }) => (scrollNav ? '#024b45' : 'transparent')};
	height: 80px;
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
	color: red;
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
