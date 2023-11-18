import {
  Settings,
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownList,
  LogOut,
  MessageCircle,
  HeaderContainer,
  Logo,
  NavItem,
  NavList,
  Down,
  UserName,
  BoxAuth,
  AvatarImg,
} from "./HeaderStyled";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoutModal from "../../homepage/components/ModalLogOut/ModalLogOut";
import { useDispatch, useSelector } from "react-redux";
import {toggleShowBurgerModal} from "../../../redux/Modal/modalSlice";
import { selectIsAuth, selectUser } from "../../../redux/user/userSelectors";

import { useMediaQuery } from "react-responsive";
import BtnBurger from "../BtnBurger/BtnBurger";
import ModalBurger from "../ModalBurger/ModalBurger";
import BtnRegister from "../components/ButtonRegister/ButtonRegister";
import BtnLogin from "../components/ButtonLogin/ButtonLogin";
import Avatar from "../../../shared/components/Avatar/Avatar";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const infoUser = useSelector(selectUser)

  const dropdownRef = useRef(null);

  const hasToken = useSelector(selectIsAuth);

const location = useLocation();

  const dispatch = useDispatch();

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    setLogoutModalOpen(false);
  };

  const openLogoutModal = () => {
    setLogoutModalOpen(true);
  };

  const openBurgerMenu = () => {
    dispatch(toggleShowBurgerModal());
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        isDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isDropdownOpen]);

  const navItems = [
    { to: "/home", label: "Home" },
    { to: "/discover", label: "Discover" },
    { to: "/favorite", label: "Favorite quize" },
    { to: "/ownquiz", label: "My quize" },
  ];

  const navNotAuth = [
    { to: "/randomquiz/Adults", label: "For Adults" },
    { to: "/randomquiz/Children", label: "For Children", }
  ];

  const generateNavLinks = (hasToken) => {
    if (hasToken) {
      return navItems.map((item, index) => (
        <NavItem key={index} to={item.to}>
          {item.label}
        </NavItem>
      ))
    } else {
      return navNotAuth.map((item, index) => (
        <NavItem key={index} to={item.to}>
          {item.label}
        </NavItem>
      ))
    }
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>QuizMaster</Logo>
      </Link>
      <NavList>
      {/(\/quiz\/[^/]+)/.test(location.pathname) ? null : (
        hasToken ? (
          <>{generateNavLinks(hasToken)}</>
        ) : (
          <>
            {generateNavLinks(hasToken)}
          </>
        )
      )}
    </NavList>

      {hasToken && !isMobile ? (
        <DropdownContainer ref={dropdownRef}>
          <DropdownButton onClick={toggleDropdown}>
            {infoUser && infoUser.userAvatar ? (
              <Avatar
                size="small"
                src={infoUser.userAvatar}
                alt="Photo"
                width="40px"
              />
            ) : (
              <AvatarImg>
                {infoUser && infoUser.name
                  ? infoUser.name.trim().charAt(0).toUpperCase()
                  : ""}
              </AvatarImg>
            )}
            {infoUser ? <UserName>{infoUser.name}</UserName> : null}
            {isDropdownOpen ? <Down style={{ rotate: '180deg' }} /> : <Down />}
          </DropdownButton>
          <DropdownList open={isDropdownOpen}>
            <Link to="/settings">
              <DropdownItem>
                <Settings />
                Settings
              </DropdownItem>
            </Link>
            <Link to="/feedback">
              <DropdownItem>
                <MessageCircle />
                Feedback
              </DropdownItem>
            </Link>
            <DropdownItem onClick={openLogoutModal}>
              <LogOut />
              Log out
            </DropdownItem>
          </DropdownList>
          <LogoutModal
            isOpen={isLogoutModalOpen}
            onClose={() => setLogoutModalOpen(false)}
          />
        </DropdownContainer>
      ) : isMobile ? (
        <>
          <BtnBurger openBurgerMenu={openBurgerMenu} />
          <ModalBurger />
        </>
      ) : (
        <BoxAuth>
          <Link to="/auth/registerForm">
            <BtnRegister>Register</BtnRegister>
          </Link>
          <Link to="/auth/loginForm">
            <BtnLogin>Login</BtnLogin>
          </Link>
        </BoxAuth>
      )}
    </HeaderContainer>
  );
};

export default Header;
