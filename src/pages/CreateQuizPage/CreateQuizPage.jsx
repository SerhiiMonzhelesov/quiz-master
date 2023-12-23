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
import { selectIsShowCreatePageModal } from "../../redux/Modal/modalSelectors.js";

import CreateQuizModal from "../../modules/createQuizPage/components/CreateQuizModal/CreateQuizModal.jsx";
import { toggleShowCreatePageModal } from "../../redux/Modal/modalSlice.js";
import Modal from "../../shared/components/Modal/Modal.jsx";
import getMissedFields from "../../helpers/getMissedFields.js";

export default function CreateQuizPage() {
  const [quizChanges, setQuizChanges] = useState({});
  const [questionChanges, setQuestionChanges] = useState({});
  const [isChecked, setChecked] = useState("");
  const [idxActiveQuestion, setIdxActiveQuestion] = useState(0);
  const [idxToDelete, setIdxToDelete] = useState(null);
  const [idxToMove, setIdxToMove] = useState(null);
  const [missingFieldsSubmit, setMissingFieldsSubmit] = useState(null);
  const [valueAddedQuestion, setValueAddedQuestion] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const allCategories = useSelector(selectDiscoverAllCategories);
  const currentQuiz = useSelector(selectCurrentQuiz);
  const isShowCreatePageModal = useSelector(selectIsShowCreatePageModal);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const idQuizToEdit = location.state;
  const currentQuestion = currentQuiz?.questions
    ? currentQuiz?.questions[idxActiveQuestion]
    : quizChanges;
  const isQuestionHaveChange =
    // (Object.keys(questionChanges).length === 1 &&
    //   !(Object.keys(questionChanges)[0] === "type")) ||
    // (Object.keys(questionChanges).length > 1 &&
    //   (Object.keys(questionChanges)[0] === "type" ||
    //     Object.keys(questionChanges)[0] !== "type"))
    Object.keys(questionChanges).length > 0 || isChecked !== "";

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
    /* if (nameInput === "categories" && !currentQuiz && !quizChanges) {
      
    } */
    // nameInput === "categories" && console.log("object", allCategories);
    nameInput === "categories" &&
      setQuizChanges((prevState) => ({
        ...prevState,
        quizCategory: value,
      }));
  };

  console.group("CreatePageLOG");
  console.log("questionChanges: ", questionChanges);
  console.log("quizChanges: ", quizChanges);
  console.log("missingFieldsSubmit: ", missingFieldsSubmit);

  console.groupEnd();

  const handleSubmit = (event) => {
    const quizId = event.target.dataset.id;
    const missedFields = getMissedFields(
      questionChanges,
      quizChanges,
      currentQuiz,
      allCategories
    );
    if (!quizId) {
      // dispatch(
      //   createQuizThunk({
      //     quizChanges,
      //     dataQuestion: questionChanges,
      //   })
      // );

      let dataCreateQuizSubmit;
      if (missedFields.quiz.length > 0 || missedFields.question.length > 0) {
        setMissingFieldsSubmit(missedFields);
        dispatch(toggleShowCreatePageModal());
      }
      if (!quizChanges.quizType && !!quizChanges.quizCategory) {
        for (const key in allCategories) {
          allCategories[key].some(
            (category) => category._id === quizChanges.quizCategory
          ) && (dataCreateQuizSubmit = { ...quizChanges, quizType: key });
        }
      }
      console.log("SUBMIT:", dataCreateQuizSubmit);
      console.log("fields: ", missedFields);
      console.log("SUBMIT: we are save new QUIZ and one QUESTION");
    } else {
      // dispatch(addQuestionThunk({ question: questionChanges, id: quizId }));
      console.log("SUBMIT: we are add new QUESTION");
    }
    setQuestionChanges({});
    setIdxActiveQuestion(0);
  };

  return (
    <>
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
                setChecked={setChecked}
                idxActiveQuestion={idxActiveQuestion}
                setQuizChanges={setQuizChanges}
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
                isQuestionHaveChange={isQuestionHaveChange}
                setIdxToMove={setIdxToMove}
                setIdxToDelete={setIdxToDelete}
                setValueAddedQuestion={setValueAddedQuestion}
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
                isQuestionHaveChange={isQuestionHaveChange}
                setIdxToMove={setIdxToMove}
                setIdxToDelete={setIdxToDelete}
                setValueAddedQuestion={setValueAddedQuestion}
              />
              <QuestionCard
                questionChanges={questionChanges}
                setQuestionChanges={setQuestionChanges}
                handleQuizChange={handleQuizChange}
                handleRadioChange={handleRadioChange}
                quizChanges={quizChanges}
                setQuizChanges={setQuizChanges}
                selectAnswers={selectAnswers}
                handleSubmit={handleSubmit}
                isChecked={isChecked}
                setChecked={setChecked}
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
      {isShowCreatePageModal && (
        <Modal
          modalClose={() => {
            dispatch(toggleShowCreatePageModal());
            setIdxToMove(null);
            setIdxToDelete(null);
          }}
        >
          <CreateQuizModal
            idx={idxToDelete}
            setIdxToDelete={setIdxToDelete}
            idxToMove={idxToMove}
            setIdxToMove={setIdxToMove}
            idxActiveQuestion={idxActiveQuestion}
            setIdxActiveQuestion={setIdxActiveQuestion}
            questionChanges={questionChanges}
            setQuestionChanges={setQuestionChanges}
            isQuestionHaveChange={isQuestionHaveChange}
            setChecked={setChecked}
            valueAddedQuestion={valueAddedQuestion}
            setValueAddedQuestion={setValueAddedQuestion}
          />
        </Modal>
      )}
    </>
  );
}
