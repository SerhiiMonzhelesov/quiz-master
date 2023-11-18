import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  ButtonStart,
  Category,
  InputName,
  QuizeBox,
  Title,
} from "./BaseQuizFormStyled";
import { useSelector } from "react-redux";
import { selectIsAuth, selectUser } from "../../../redux/user/userSelectors";

const BaseQuizForm = () => {
  const [inputValue, setInputValue] = useState("");
  const hasToken = useSelector(selectIsAuth);
  const name = useSelector(selectUser);
  const { quizId } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category")
  
  useEffect(() => {
    if (hasToken && name.name) {
      setInputValue(name.name);
    }
  }, [hasToken, name.name]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <>
      <QuizeBox>
        <Title>Log in to take the quiz</Title>
        <Category>{category}</Category>
        <InputName
          type="text"
          placeholder="Name"
          value={inputValue}
          onChange={handleInputChange}
          readOnly={hasToken && name.name}
        />
        <Link to={`/quiz/${quizId}/quizquestion?inputValue=${inputValue}`}>
          <ButtonStart disabled={inputValue.length < 3}>Start</ButtonStart>
        </Link>
      </QuizeBox>
      </>
  );
};

export default BaseQuizForm;
