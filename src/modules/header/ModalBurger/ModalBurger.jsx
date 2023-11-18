import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BoxAuth,
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownList,
  LogOut,
  Logo,
  MessageCircle,
  NavItem,
  NavList,
  Settings,
  StyledCloseBtn,
  StyledModal,
  StyledOverlay,
} from "./ModalBurger.styled";
import { AiOutlineClose } from "react-icons/ai";
import { selectIsShowBurgerModal } from "../../../redux/Modal/modalSelectors";
import {
  toggleShowAuthPage,
  toggleShowBurgerModal,
} from "../../../redux/Modal/modalSlice";
import { Link, useLocation } from "react-router-dom";
import BtnRegister from "../components/ButtonRegister/ButtonRegister";
import BtnLogin from "../components/ButtonLogin/ButtonLogin";
import { selectIsAuth } from "../../../redux/user/userSelectors";
import LogoutModal from "../../homepage/components/ModalLogOut/ModalLogOut";

const ModalBurger = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const dropdownRef = useRef(null);

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const isShowBurgerModal = useSelector(selectIsShowBurgerModal);
  const hasToken = useSelector(selectIsAuth);

  useEffect(() => {
    if (!isShowBurgerModal) return;
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [dispatch, isShowBurgerModal]);

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

  const handleOpenModal = (e) => {
    dispatch(toggleShowAuthPage(e.currentTarget.name));
    dispatch(toggleShowBurgerModal());
  };

  const handleClickBtnClose = () => {
    document.body.classList.remove("no-scroll");
    dispatch(toggleShowBurgerModal());
  };

  const handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      setDropdownOpen(false);
    }
  };

  const navItems = [
    { to: "/home" || "/lastPassed", label: "Home" },
    { to: "/discover", label: "Discover" },
    { to: "/favorite", label: "Favorite quize" },
    { to: "/ownquiz", label: "My quize" },
  ];

  const generateNavLinks = (hasToken) => {
    return navItems.map((item, index) => (
      <Link key={index} to={item.to}>
        <NavItem
          className={location.pathname === item.to ? "active" : ""}
          onClick={handleClickBtnClose}
        >
          {item.label}
        </NavItem>
      </Link>
    ));
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    setLogoutModalOpen(false);
  };

  const openLogoutModal = () => {
    setLogoutModalOpen(true);
  };

  return (
    isShowBurgerModal && (
      <StyledOverlay>
        <StyledModal>
          <Link to="/" onClick={handleClickBtnClose}>
            <Logo>QuizMaster</Logo>
          </Link>
          <StyledCloseBtn type="button" onClick={handleClickBtnClose}>
            <AiOutlineClose size={28} fill="#FFFFFF" />
          </StyledCloseBtn>
          <NavList>
            {hasToken ? (
              <>{generateNavLinks(hasToken)}</>
            ) : (
              <>
                <Link to="/randomquiz/Adults">
                  <NavItem
                    className={
                      location.pathname === "/randomquiz/Adults" ? "active" : ""
                    }
                    onClick={handleClickBtnClose}
                  >
                    For Adults
                  </NavItem>
                </Link>
                <Link to="/randomquiz/Children">
                  <NavItem
                    className={
                      location.pathname === "/randomquiz/Children"
                        ? "active"
                        : ""
                    }
                    onClick={handleClickBtnClose}
                  >
                    For Children
                  </NavItem>
                </Link>
              </>
            )}
          </NavList>
          {!hasToken ? (
            <BoxAuth>
              <Link to="/auth/registerForm">
                <BtnRegister handleOpenModal={handleOpenModal}>
                  Register
                </BtnRegister>
              </Link>
              <Link to="/auth/loginForm">
                <BtnLogin handleOpenModal={handleOpenModal}>Login</BtnLogin>
              </Link>
            </BoxAuth>
          ) : (
            <DropdownContainer ref={dropdownRef}>
              <DropdownButton onClick={toggleDropdown}>Settings</DropdownButton>
              {isDropdownOpen ? (
                <StyledOverlay onClick={handleClickOverlay}>
                  <DropdownList open={isDropdownOpen}>
                    <Link to="/settings">
                      <DropdownItem onClick={handleClickBtnClose}>
                        <Settings />
                        Settings
                      </DropdownItem>
                    </Link>
                    <Link to="/feedback">
                      <DropdownItem onClick={handleClickBtnClose}>
                        <MessageCircle />
                        Feedback
                      </DropdownItem>
                    </Link>
                    <DropdownItem onClick={openLogoutModal}>
                      <LogOut />
                      Log out
                    </DropdownItem>
                  </DropdownList>
                </StyledOverlay>
              ) : null}
              <LogoutModal
                isOpen={isLogoutModalOpen}
                onClose={() => setLogoutModalOpen(false)}
              />
            </DropdownContainer>
          )}
        </StyledModal>
      </StyledOverlay>
    )
  );
};

export default ModalBurger;
