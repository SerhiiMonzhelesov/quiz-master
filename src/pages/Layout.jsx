import { Outlet, useLocation } from "react-router-dom";
import Header from "../modules/header/Header";
import Stats from "../modules/mainPage/components/Stats/Stats";
import { Container } from "./LayoutStyled";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../redux/selectors";
import LoaderLocal from "../shared/components/LoaderLocal/LoaderLocal";

const Layout = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const isAuthRegisterPage = location.pathname === "/auth/registerForm";
  const isAuthLoginPage = location.pathname === "/auth/loginForm";
  const isLoading = useSelector(selectIsLoading);
  
  return (
    <>
    <Container hasbackground={isMainPage || isAuthRegisterPage || isAuthLoginPage ? "true" : "false"}>
      <Header />
      <Outlet />      
    </Container>
    {isMainPage && <Stats/>}
    {isLoading&&<LoaderLocal/>}    
    </>
  );
}

export default Layout;
