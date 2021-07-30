import styled from "styled-components";
import {Link as LinkScroll } from "react-scroll";

export const Nav = styled.div`
    z-index: 2;
	/* max-width: 1200px; */
	position: absolute;
	right: 85%;
    bottom: 80%;
	padding: 8px 24px;
    color:#fff;
    font-size: 18px;
`;
export const SideNavCont = styled.div`
    /* position: relative;
    top: 8px;
    left: 16px;
    font-size: 18px; */

`;
export const SideNavMenu = styled.div``;
export const NavItem = styled.div`
`;
export const NavLink = styled(LinkScroll)``;