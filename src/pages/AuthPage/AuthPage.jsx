import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../shared/components/Modal/Modal";
import LogInForm from "../../modules/AuthForms/LoginForm"
import RegisterForm from "../../modules/AuthForms/RegisterForm/RegisterForm";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/user/userSelectors";


const AuthPage = () => {
  const isAuth = useSelector(selectIsAuth);
  const { type } = useParams();
  const formToDisplay = type === "loginForm" ? <LogInForm /> : <RegisterForm />;
  const navigate = useNavigate();

  return (
    !isAuth && (
    <Modal modalClose={() => navigate("/")}>{formToDisplay}</Modal>
    )
  );
};

export default AuthPage;
