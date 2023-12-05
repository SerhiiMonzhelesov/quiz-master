import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  AttributeCategorySelect,
  AttributeTitles,
  ChooseAudienceLabel,
  ColorLabel,
  InputsWrapper,
  SelectAudienceDiv,
  SelectColorDiv,
  SetAttributeDiv,
} from "./SelectAttributeCard.styled";
import { useSelector } from "react-redux";
import { selectCurrentQuiz } from "../../../../redux/selectors";

const SelectAttributeCard = (props) => {
  const {
    quizChanges,
    questionChanges,
    changeAttribute,
    changeCategory,
    categories,
    idxActiveQuestion,
  } = props;
  const currentQuiz = useSelector(selectCurrentQuiz);

  const currentQuestion = currentQuiz?.questions
    ? currentQuiz?.questions[idxActiveQuestion]
    : quizChanges;

  const getOptions = (quizChanges, currentQuiz) => {
    if (!quizChanges.quizType && currentQuiz?.quizType)
      return currentQuiz?.quizType === "children"
        ? categories?.children
        : categories?.adults;
    if (quizChanges.quizType)
      return quizChanges?.quizType === "children"
        ? categories?.children
        : categories?.adults;
    else return categories?.adults;
  };

  const arrOptions = getOptions(quizChanges, currentQuiz);

  return (
    <SetAttributeDiv>
      <SelectAudienceDiv>
        <AttributeTitles>Audience</AttributeTitles>
        <InputsWrapper>
          <ChooseAudienceLabel htmlFor="children">
            <input
              type="radio"
              id="children"
              name="children"
              checked={
                quizChanges.quizType
                  ? quizChanges.quizType === "children"
                  : currentQuiz?.quizType === "children"
              }
              onChange={changeAttribute}
            />
            For Children
            <span></span>
          </ChooseAudienceLabel>
          <ChooseAudienceLabel htmlFor="adults">
            <input
              type="radio"
              id="adults"
              name="adults"
              checked={
                quizChanges.quizType
                  ? quizChanges.quizType === "adults"
                  : currentQuiz?.quizType === "adults" ||
                    !currentQuiz?.quizType === true
              }
              onChange={changeAttribute}
            />
            For Adults
            <span></span>
          </ChooseAudienceLabel>
        </InputsWrapper>
      </SelectAudienceDiv>
      <div>
        <AttributeTitles>Categories</AttributeTitles>
        <AttributeCategorySelect
          name="categories"
          id="categories"
          value={quizChanges.quizCategory || currentQuiz?.categoryName}
          onChange={changeCategory}
        >
          <option value="defaultOption" hidden>
            {quizChanges.quizType
              ? `For ${quizChanges?.quizType}`
              : currentQuiz?.categoryName || `For adults`}
          </option>
          {arrOptions?.map((item) => (
            <option key={uuidv4()} value={item._id}>
              {item.categoryName}
            </option>
          ))}
        </AttributeCategorySelect>
      </div>
      <div>
        <AttributeTitles>Background</AttributeTitles>
        <SelectColorDiv>
          <ColorLabel>
            <input
              type="radio"
              id="#43A8D3"
              name="background"
              checked={
                (questionChanges.background || currentQuestion?.background) ===
                "#43A8D3"
              }
              onChange={changeAttribute}
            />
            <span className="blue"></span>
          </ColorLabel>
          <ColorLabel>
            <input
              type="radio"
              id="#6636C5"
              name="background"
              checked={
                (questionChanges.background || currentQuestion?.background) ===
                "#6636C5"
              }
              onChange={changeAttribute}
            />
            <span className="viola"></span>
          </ColorLabel>
          <ColorLabel>
            <input
              type="radio"
              id="#E65368"
              name="background"
              checked={
                (questionChanges.background || currentQuestion?.background) ===
                "#E65368"
              }
              onChange={changeAttribute}
            />
            <span className="orange"></span>
          </ColorLabel>
        </SelectColorDiv>
      </div>
    </SetAttributeDiv>
  );
};

export default SelectAttributeCard;
