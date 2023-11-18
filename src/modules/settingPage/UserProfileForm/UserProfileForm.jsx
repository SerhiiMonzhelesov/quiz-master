import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../../../shared/components/Avatar/Avatar";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  AvatarImg,
  AddAvatarButton,
  IconPlus,
  IconWrapper,
  BtnEyeStyled,
  ErrorsStyled,
  InputPasswWrapStyled,
  FormStyled,
  InputsWrapper,
  LuEyeOffStyled,
  LuEyeStyled,
  SettingForm,
  AvatarWrapper,
} from "./UserProfileFormStyled";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/user/userSelectors";
import BtnConfirmSettings from "../../../shared/components/Buttons/BtnConfirmSettings";
import { updateUserThunk } from "../../../redux/user/userThunks";
import { notifyError } from "../../../shared/NotificationToastify/Toasts";
import InputDefault from "../../../shared/components/InputDefault/InputDefault";


const UserProfileForm = () => {
    const dispatch = useDispatch();
    const infoUser = useSelector(selectUser);
    const [selectedFile, setSelectedFile] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(null);
    const [isDisabled, setIsDisabled] = useState(true);
    const navigate = useNavigate();

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordShown = () => setPasswordShown((show) => !show);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
    
        if (file) {
            setSelectedFile(file);
            setIsDisabled(false)
      
            const reader = new FileReader();
            reader.onload = (e) => {
                setAvatarPreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
  
    const formik = useFormik({
        initialValues: {
            name: infoUser?.name,
            email: infoUser?.email,
            password: "",
        },


        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, "The name must consist of at least 3 characters")
                .required("Name is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email address is required"),
        }),

        onSubmit: (values) => {
            const formData = new FormData();
            formData.append("name", values.name);
            if (selectedFile) {
                formData.append("avatar", selectedFile);
            }
            dispatch(updateUserThunk(formData)).then((result) => {
                if (result) { navigate("/quiz-master") };
            })
                .catch((error) => {
                    notifyError(error);
                });
        },
    });
    
    const handleOnChange = (data) => {
        const changedName = data.currentTarget.value
    
        if (infoUser.name !== changedName) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        };
        formik.handleChange(data);
    }


    useEffect(() => { }, [formik.values.name, avatarPreview]);

    return (
    <SettingForm>
        <AvatarWrapper>
            {avatarPreview || infoUser.userAvatar ? (
                <Avatar
                    size="large"
                    src={avatarPreview || infoUser.userAvatar}
                    alt="Photo"
                    width="100px"
                />
            ) : (
                <AvatarImg>
                    {infoUser && infoUser.name
                        ? infoUser.name.trim().charAt(0).toUpperCase()
                        : ""}
                </AvatarImg>
            )}
            <AddAvatarButton type="submit">
                <label htmlFor="avatar-upload">
                    <IconWrapper className="bi-wrapper">
                        <IconPlus className="bi-btn" />
                    </IconWrapper>
                </label>
                <input
                    type="file"
                    accept="image/*"
                    id="avatar-upload"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
            </AddAvatarButton>
        </AvatarWrapper>
        <FormStyled onSubmit={formik.handleSubmit}>
            <InputsWrapper>
                <InputDefault
                    name="name"
                    type="name"
                    value={formik.values.name}
                    placeholder="Name"
                    autoComplete="off"
                    onChange={(evt) => handleOnChange(evt)}
                    label="Name"
                />

                {formik.touched.name && formik.errors.name ? (
                    <ErrorsStyled>{formik.errors.name}</ErrorsStyled>
                ) : null}

                <InputDefault
                    name="email"
                    type="email"
                    value={infoUser.email}
                    placeholder="Email"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    label="Email"
                />

                {formik.touched.email && formik.errors.email ? (
                    <ErrorsStyled>{formik.errors.email}</ErrorsStyled>
                ) : null}

                <InputPasswWrapStyled>
                    <InputDefault
                        name="password"
                        type={passwordShown ? "text" : "password"}
                        value={formik.values.password}
                        placeholder="Password"
                        autoComplete="off"
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
            <BtnConfirmSettings isDisabled={isDisabled} selectedFile={selectedFile}>Save</BtnConfirmSettings>
        </FormStyled>
    </SettingForm>
    )
}

export default UserProfileForm;