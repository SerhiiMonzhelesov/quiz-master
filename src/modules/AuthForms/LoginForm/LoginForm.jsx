import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  InputsWrapper,
  RestoreStyled,
  AuthTitle,
  LuEyeStyled,
  BtnEyeStyled,
  LuEyeOffStyled,
  InputPasswWrapStyled,
  ErrorsStyled,
  FormStyled,
  StyledModal,
} from "./LoginForm.styled";
import BtnToggleFormAuth from "../../../shared/components/Buttons/BtnToggleFormAuth";
import BtnConfirmAuth from "../../../shared/components/Buttons/BtnConfirmAuth";
import InputDefault from "../../../shared/components/InputDefault/InputDefault";
import {notifyRegisterError} from "../../../shared/NotificationToastify/Toasts";
import { loginUserThunk } from "../../../redux/user/userThunks";
import BtnClose from "../../../shared/components/Buttons/BtnClose";

const LogInForm = ({ modalClose}) => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordShown = () => setPasswordShown((show) => !show);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string()
        .min(6, "Enter at least 6 characters")
        .max(20, "Must be maximum 20 characters")
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      dispatch(loginUserThunk(values))
        .unwrap()
        .then((data) => {
          // notifyLoginSuccess(data);
        })
        .catch((error) => {
          notifyRegisterError(error);
          navigate("/");
        });
    },
  });

  const handleClickBtnClose = () => {
    document.body.classList.remove("no-scroll");
    navigate("/");
  };

  return (
    <>
      <StyledModal>
        <BtnClose onClick={handleClickBtnClose} />
        <AuthTitle>Login</AuthTitle>
        <FormStyled onSubmit={formik.handleSubmit}>
          <InputsWrapper>
            <InputDefault
              name="email"
              type="email"
              value={formik.values.email}
              placeholder="Email"
              // autoComplete="off"
              onChange={formik.handleChange}
              label="Email"
            />

            {formik.touched.email && formik.errors.email ? (
              <ErrorsStyled>{formik.errors.email}</ErrorsStyled>
            ) : null}

            <InputPasswWrapStyled>
              <InputDefault
                variant="input-password"
                name="password"
                type={passwordShown ? "text" : "password"}
                value={formik.values.password}
                placeholder="Password"
                onChange={formik.handleChange}
                label="Password"
              />
              <BtnEyeStyled
                type="button"
                onClick={togglePasswordShown}
                name="togglePassword"
                aria-label="Toggle password visibility"
              >
                {passwordShown ? (
                  <LuEyeStyled size={18} />
                ) : (
                  <LuEyeOffStyled size={18} />
                )}
              </BtnEyeStyled>
            </InputPasswWrapStyled>

            {formik.touched.password && formik.errors.password ? (
              <ErrorsStyled>{formik.errors.password}</ErrorsStyled>
            ) : null}
          </InputsWrapper>
          <BtnConfirmAuth type="submit">Enter</BtnConfirmAuth>
        </FormStyled>

        <RestoreStyled type="button">Restore password</RestoreStyled>

        <Link to="/auth/registerForm">
          <BtnToggleFormAuth type="button">Register</BtnToggleFormAuth>
        </Link>
      </StyledModal>
    </>
  );
};

export default LogInForm;
