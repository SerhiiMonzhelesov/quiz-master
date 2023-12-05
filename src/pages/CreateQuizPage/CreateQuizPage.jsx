import { useEffect, useState } from "react";
import QuestionCard from "../../modules/createQuizPage/components/QuestionCard/QuestionCard.jsx";
import QuestionsList from "../../modules/createQuizPage/components/QuestionsList/QuestionsList.jsx";
import SelectAttributeCard from "../../modules/createQuizPage/components/SelectAttributeCard/SelectAttributeCard.jsx";
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar.jsx";
import { PageWrapper, SectionWrapper } from "./CreateQuizPage.styled.js";
import { useDispatch, useSelector } from "react-redux";
import {
  createQuizThunk,
  getQuizCategoriesThunk,
  getQuizThunk,
} from "../../redux/quiz/quizThunks.js";
import {
  selectCurrentQuiz,
  selectDiscoverAllCategories,
} from "../../redux/selectors.js";
import { useMediaQuery } from "react-responsive";
import { addQuestionThunk } from "../../redux/quiz/questionThunks.js";
import { useLocation } from "react-router-dom";
import { setCurrentChange } from "../../redux/quiz/quizSlice.js";
import makeFieldsAnswers from "../../helpers/makeFieldsAnswers.js";

export default function CreateQuizPage() {
  const [quizChanges, setQuizChanges] = useState({});
  const [questionChanges, setQuestionChanges] = useState({});
  const [isChecked, setChecked] = useState("");
  const [idxActiveQuestion, setIdxActiveQuestion] = useState(0);
  const location = useLocation();
  const dispatch = useDispatch();
  const allCategories = useSelector(selectDiscoverAllCategories);
  const currentQuiz = useSelector(selectCurrentQuiz);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const idQuizToEdit = location.state;
  const currentQuestion = currentQuiz?.questions
    ? currentQuiz?.questions[idxActiveQuestion]
    : quizChanges;

  const selectAnswers =
    (questionChanges.type || currentQuestion?.type) === "quiz"
      ? ["A", "C", "B", "D"]
      : ["A", "C"];

  useEffect(() => {
    if (idQuizToEdit && !allCategories) {
      dispatch(getQuizThunk(idQuizToEdit.data));
      dispatch(getQuizCategoriesThunk());
    } else if (!idQuizToEdit && !allCategories) {
      dispatch(getQuizCategoriesThunk());
    } else if (idQuizToEdit && allCategories) {
      dispatch(getQuizThunk(idQuizToEdit.data));
    }

    return () => dispatch(setCurrentChange(null));
  }, [dispatch, allCategories, idQuizToEdit]);

  const handleRadioChange = (event) => {
    const value = event.target.id;
    const name = event.target.name;
    if (name === "children" || name === "adults") {
      return setQuizChanges((prevState) => ({
        ...prevState,
        quizType: value,
        quizCategory: "",
      }));
    }
    if (name === "answer") {
      const fields = makeFieldsAnswers(
        questionChanges.type,
        value,
        selectAnswers,
        currentQuestion
      );

      setQuestionChanges((prevState) => ({
        ...prevState,
        ...fields,
      }));
      setChecked(value);
    }
    name === "background" &&
      setQuestionChanges((prevState) => ({
        ...prevState,
        background: value,
      }));
  };

  const handleQuizChange = (event) => {
    const idInput = event.target.id;
    const value = event.target.value;
    const nameInput = event.target.name;
    if (nameInput === "answer") {
      let answer = {};
      selectAnswers.forEach(
        (item, idx) =>
          idInput === item &&
          (answer = {
            [`answers[${idx}][answer]`]: value,
          })
      );
      return setQuestionChanges((prevState) => ({
        ...prevState,
        ...answer,
      }));
    }
    nameInput === "quiz" &&
      setQuizChanges((prevState) => ({
        ...prevState,
        quizName: value,
      }));
    nameInput === "question" &&
      setQuestionChanges((prevState) => ({
        ...prevState,
        question: value,
      }));
    nameInput === "categories" &&
      setQuizChanges((prevState) => ({
        ...prevState,
        quizCategory: value,
      }));
  };

  console.group("CreatePageLOG");
  console.log("questionChanges: ", questionChanges);
  console.log("quizChanges: ", quizChanges);

  console.groupEnd();

  const handleSubmit = (event) => {
    const quizId = event.target.dataset.id;

    if (!quizId)
      dispatch(
        createQuizThunk({
          quizChanges,
          dispatch,
          dataQuestion: questionChanges,
        })
      );
    else {
      dispatch(addQuestionThunk({ question: questionChanges, id: quizId }));
    }
    setQuestionChanges({});
    setIdxActiveQuestion(0); /* ??? veriify this action */
  };

  return (
    <PageWrapper>
      <PageTopBar titlePage="Create quize" />
      <SectionWrapper>
        {isMobile ? (
          <>
            <QuestionCard
              questionChanges={questionChanges}
              setQuestionChanges={setQuestionChanges}
              handleQuizChange={handleQuizChange}
              handleRadioChange={handleRadioChange}
              quizChanges={quizChanges}
              selectAnswers={selectAnswers}
              handleSubmit={handleSubmit}
              isChecked={isChecked}
              idxActiveQuestion={idxActiveQuestion}
            />
            <SelectAttributeCard
              changeAttribute={handleRadioChange}
              changeCategory={handleQuizChange}
              categories={allCategories}
              quizChanges={quizChanges}
              questionChanges={questionChanges}
              idxActiveQuestion={idxActiveQuestion}
            />
            <QuestionsList
              questionChanges={questionChanges}
              setQuestionChanges={setQuestionChanges}
              isChecked={isChecked}
              setChecked={setChecked}
              setIdxActiveQuestion={setIdxActiveQuestion}
              idxActiveQuestion={idxActiveQuestion}
            />
          </>
        ) : (
          <>
            <QuestionsList
              questionChanges={questionChanges}
              setQuestionChanges={setQuestionChanges}
              isChecked={isChecked}
              setChecked={setChecked}
              setIdxActiveQuestion={setIdxActiveQuestion}
              idxActiveQuestion={idxActiveQuestion}
            />
            <QuestionCard
              questionChanges={questionChanges}
              setQuestionChanges={setQuestionChanges}
              handleQuizChange={handleQuizChange}
              handleRadioChange={handleRadioChange}
              quizChanges={quizChanges}
              selectAnswers={selectAnswers}
              handleSubmit={handleSubmit}
              isChecked={isChecked}
              idxActiveQuestion={idxActiveQuestion}
            />
            <SelectAttributeCard
              changeAttribute={handleRadioChange}
              changeCategory={handleQuizChange}
              categories={allCategories}
              quizChanges={quizChanges}
              questionChanges={questionChanges}
              idxActiveQuestion={idxActiveQuestion}
            />
          </>
        )}
      </SectionWrapper>
    </PageWrapper>
  );
}
