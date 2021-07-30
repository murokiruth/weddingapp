import React, {useState} from 'react';
import {Nav,SideNavCont, SideNavMenu,NavItem,NavLink,} from "./SideNavBarElements";
import {animateScroll as scroll} from "react-scroll";
import { GiLoveMystery} from "react-icons/gi";

const SideNavBar = () => {
    const [scrollNav] = useState(false)
    return (
        <Nav scrollNav={scrollNav}>
            <SideNavCont>
                <SideNavMenu>
                    <NavItem>
                        <GiLoveMystery />
                        <NavLink to='story'> Our Story </NavLink>
                    </NavItem>
                    <NavItem>
                        <GiLoveMystery />
                        <NavLink to='details'> Details </NavLink>
                    </NavItem>
                    <NavItem>
                        <GiLoveMystery />
                        <NavLink to='party'> Wedding Party </NavLink>
                    </NavItem>
                    <NavItem>
                        <GiLoveMystery />
                        <NavLink to='rsvp'> RSVP </NavLink>
                    </NavItem>
                </SideNavMenu>
            </SideNavCont>
        </Nav>
    )
}

export default SideNavBar;
