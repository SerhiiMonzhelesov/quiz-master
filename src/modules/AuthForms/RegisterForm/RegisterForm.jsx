import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import {
  AuthTitle,
  BtnEyeStyled,
  ErrorsStyled,
  FormStyled,
  InputPasswWrapStyled,
  InputsWrapper,
  LuEyeOffStyled,
  LuEyeStyled,
  StyledModal,
} from "../../../modules/AuthForms/LoginForm/LoginForm.styled";
import BtnToggleFormAuth from "../../../shared/components/Buttons/BtnToggleFormAuth";
import BtnConfirmAuth from "../../../shared/components/Buttons/BtnConfirmAuth";
import InputDefault from "../../../shared/components/InputDefault/InputDefault";
import {
  notifyRegisterError,
  notifyVerifyEmail,
} from "../../../shared/NotificationToastify/Toasts";
import { registerUserThunk } from "../../../redux/user/userThunks";
import BtnClose from "../../../shared/components/Buttons/BtnClose";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordShown = () => setPasswordShown((show) => !show);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "The name must consist of at least 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string()
        .min(6, "Enter at least 6 characters")
        .max(20, "Must be maximum 20 characters")
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      dispatch(registerUserThunk(values))
        .unwrap()
        .then(() => {
          notifyVerifyEmail();
          navigate("/");
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

        <AuthTitle>Sign Up</AuthTitle>
        <FormStyled onSubmit={formik.handleSubmit}>
          <InputsWrapper>
            <InputDefault
              name="name"
              type="name"
              value={formik.values.name}
              placeholder="Name"
              // autoComplete="off"
              onChange={formik.handleChange}
              label="Name"
            />

            {formik.touched.name && formik.errors.name ? (
              <ErrorsStyled>{formik.errors.name}</ErrorsStyled>
            ) : null}

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

        <Link to="/auth/loginForm">
          <BtnToggleFormAuth type="button">Login</BtnToggleFormAuth>
        </Link>
      </StyledModal>
    </>
  );
};

export default RegisterForm;
