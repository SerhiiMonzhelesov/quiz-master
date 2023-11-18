import styled from 'styled-components';
import { FiMessageCircle, FiLogOut, FiSettings, FiChevronDown } from "react-icons/fi"
import { NavLink } from 'react-router-dom';


export const HeaderContainer = styled.header`
position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
    @media (min-width: 768px) {
     padding-top: 32px;
      max-width: 1240px;
        margin: auto;
  }

  @media (min-width: 1440px) {
  padding-top: 20px;

  }
`;

export const AvatarImg = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  font-family: GilroyBold;
  font-size: 24px;
  line-height: 40px;
  text-align: center;
  background-color: var(--pink-color);
  border-radius: 50%;
color: var(--text-color-100);
`;


export const Logo = styled.div`
  color: var(--text-color-100);
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.24px;
`;

export const NavList = styled.nav`
  display: none;
      @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavItem = styled(NavLink)`
  margin-right: 20px;
  color: rgba(244, 244, 244, 0.60);
  line-height: 20px;
  cursor: pointer;  

    &.active {
    color: var(--text-color-100);
  }
`;

export const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const ButtonRegister = styled.button`
padding: 16px 32px;
background: transparent;
border-radius: 30px;
border: 1px solid rgba(244, 244, 244, 0.60);

color: var(--text-color-100);
font-size: 16px;
font-weight: 700;
line-height: 16px;
`;

export const ButtonLogin = styled.button`
color: var(--text-color-100);
font-size: 16px;
font-weight: 700;
line-height: 16px; /* 100% */
text-decoration-line: underline;
background: transparent;
margin-left: 16px;
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
`;

export const UserName = styled.p`
color: var(--text-color-100);
font-size: 16px;
font-weight: 700;
line-height: 20px;
margin-left: 8px;
margin-right: 16px;
`

export const DropdownList = styled.ul`
  position: absolute;
  left: 0;
  display: ${({ open }) => (open ? 'block' : 'none')};
  padding: 24px;
  border-radius: 20px;
  background: var(--blue-background);
`;

export const DropdownItem = styled.li`
  margin-bottom: 14px;
  color: var(--text-color-100);
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    `

export const Settings = styled(FiSettings)`
  width: 16px;
  height: 16px;
  stroke: var(--text-color-100);
`;

export const MessageCircle = styled(FiMessageCircle)`
  width: 16px;
  height: 16px;
  stroke: var(--text-color-100);
`;

export const LogOut = styled(FiLogOut)`
  width: 16px;
  height: 16px;
  stroke: var(--text-color-100);
`;

export const Down = styled(FiChevronDown)`
  width: 28px;
  height: 28px;
  stroke: var(--text-color-100);
  cursor: pointer;
`;

export const BoxAuth = styled.div`
display: flex;
align-items: center;
`