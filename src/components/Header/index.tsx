import { HeaderContainer } from "./styles";
import { NavLink } from 'react-router-dom';
import IgniteLogo from '../../assets/Ignite_logo.svg'
import {Timer, Scroll } from 'phosphor-react'

export function Header() {
    return (
        <HeaderContainer>
            <span>
                <img src={IgniteLogo} alt="" />
            </span>
            <nav>
                <NavLink to='/' end title="Timer">
                    <Timer size={24}/>
                </NavLink>
                <NavLink to='/history' title="History">
                    <Scroll size={24}/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}