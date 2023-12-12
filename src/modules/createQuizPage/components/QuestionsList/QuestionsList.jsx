import React, { useEffect, useRef, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { FiTrash2 } from "react-icons/fi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";
import {
  QuestionsWrapper,
  SelectStyledQuiz,
  DropdownList,
  QuestionItem,
} from "./QuestionsList.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentQuiz } from "../../../../redux/selectors";
import { setCurrentChange } from "../../../../redux/quiz/quizSlice";
import { toggleShowCreatePageModal } from "../../../../redux/Modal/modalSlice";
import { selectIsShowCreatePageModal } from "../../../../redux/Modal/modalSelectors";
import Modal from "../../../../shared/components/Modal/Modal";
import CreateQuizModal from "../CreateQuizModal/CreateQuizModal";

function QuestionsList({
  setQuestionChanges,
  questionChanges,
  isChecked,
  setChecked,
  setIdxActiveQuestion,
  idxActiveQuestion,
}) {
  const currentQuiz = useSelector(selectCurrentQuiz);
  const isShowCreatePageModal = useSelector(selectIsShowCreatePageModal);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [idxToDelete, setIdxToDelete] = useState(null);
  const [idxToMove, setIdxToMove] = useState(null);
  const dispatch = useDispatch();
  const createBtnRef = useRef();

  // const location = useLocation();

  // const idQuizToEdit = location.state;
  const dataQuestions = currentQuiz?.questions ? currentQuiz.questions : [];
  const isQuestionHaveChange =
    (Object.keys(questionChanges).length > 1 &&
      Object.keys(questionChanges)[0] === "type") ||
    isChecked !== "";

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const closeDropdown =
        isDropdownOpen &&
        !createBtnRef.current.contains(event.target) &&
        !(event.target.id === "icon-create");

      if (closeDropdown) setIsDropdownOpen(false);
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isDropdownOpen]);

  const handleAdd = (value) => {
    setIsDropdownOpen(!isDropdownOpen);
    setQuestionChanges((prevState) => {
      const modifiedChanges = { ...prevState };
      Object.keys(modifiedChanges).forEach((key) => {
        if (key.includes("answers")) {
          delete modifiedChanges[key];
        }
      });
      return { ...modifiedChanges, type: value };
    });
    setChecked("");
    dispatch(setCurrentChange({ type: value }));

    const isHaveUnsavedQuestion = currentQuiz?.questions.some(
      (question) => !question._id
    );

    !!isHaveUnsavedQuestion && !!currentQuiz
      ? setIdxActiveQuestion(currentQuiz?.questions.length - 1)
      : currentQuiz === null
      ? setIdxActiveQuestion(0)
      : setIdxActiveQuestion(currentQuiz?.questions.length);
  };

  const handleDeleteOption = (event, index) => {
    event.stopPropagation();
    setIdxToDelete(index);
    dispatch(toggleShowCreatePageModal());
  };

  const handlerSelectedQuestion = (event) => {
    const idxSelectedQuestion = Number(event.target.dataset.id);
    if (
      !event.target.classList.contains("delete-icon") &&
      idxSelectedQuestion === idxActiveQuestion
    )
      return;
    else if (
      !event.target.classList.contains("delete-icon") &&
      !isQuestionHaveChange
    )
      setIdxActiveQuestion(idxSelectedQuestion);
    else {
      setIdxToMove(idxSelectedQuestion);
      dispatch(toggleShowCreatePageModal());
    }
  };

  return (
    <>
      <QuestionsWrapper>
        <p>Questions</p>
        <ul
          style={{
            maxHeight: isDropdownOpen ? "200px" : "auto",
            overflowY: "auto",
          }}
        >
          {dataQuestions?.map((question, index) => (
            <QuestionItem
              key={uuidv4()}
              onClick={handlerSelectedQuestion}
              data-id={index}
              $active_accent={idxActiveQuestion === index && "600"}
            >
              {index + 1}.{" "}
              {question?.type.charAt(0).toUpperCase() + question?.type.slice(1)}
              <span
                role="button"
                onClick={(event) => handleDeleteOption(event, index)}
                style={{ cursor: "pointer" }}
                className="delete-icon"
              >
                <FiTrash2 style={{ cursor: "pointer" }} />
              </span>
            </QuestionItem>
          ))}
        </ul>
        <SelectStyledQuiz
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          ref={createBtnRef}
        >
          Create
          {isDropdownOpen ? (
            <FiChevronUp size={16} id="icon-create" />
          ) : (
            <FiChevronDown size={16} id="icon-create" />
          )}
        </SelectStyledQuiz>
        {isDropdownOpen && (
          <DropdownList>
            <ul>
              <li>
                <button onClick={() => handleAdd("quiz")}>
                  Quiz <HiArrowLongRight size={24} />
                </button>
              </li>
              <li>
                <button onClick={() => handleAdd("true or false")}>
                  True or false <HiArrowLongRight size={24} />
                </button>
              </li>
            </ul>
          </DropdownList>
        )}
      </QuestionsWrapper>
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
            setQuestionChanges={setQuestionChanges}
            isQuestionHaveChange={isQuestionHaveChange}
            setChecked={setChecked}
          />
        </Modal>
      )}
    </>
  );
}

export default QuestionsList;
