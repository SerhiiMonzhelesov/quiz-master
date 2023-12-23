import { useDispatch, useSelector } from "react-redux";
import { StyledCreateQuizModal } from "./CreateQuizModal.styled";
import { toggleShowCreatePageModal } from "../../../../redux/Modal/modalSlice";
import { deleteQuestionThunk } from "../../../../redux/quiz/questionThunks";
import { selectCurrentQuiz } from "../../../../redux/selectors";
import {
  setCurrentChange,
  setDeleteQuestion,
} from "../../../../redux/quiz/quizSlice";

const CreateQuizModal = ({
  idx,
  setIdxToDelete,
  idxToMove,
  setIdxToMove,
  idxActiveQuestion,
  setIdxActiveQuestion,
  setQuestionChanges,
  questionChanges,
  isQuestionHaveChange,
  setChecked,
  valueAddedQuestion,
  setValueAddedQuestion,
}) => {
  const currentQuiz = useSelector(selectCurrentQuiz);
  const dispatch = useDispatch();
  const idToDelete = currentQuiz?.questions[idx]?._id;
  const isDeleteActiveQuestion = idx === Number(idxActiveQuestion);
  const isHaveUnsavedQuestion = currentQuiz?.questions.some(
    (question) => !question._id
  );
  const handleConfirmDelete = (idx) => {
    if (isDeleteActiveQuestion && idToDelete) {
      dispatch(deleteQuestionThunk(idToDelete));
      setIdxActiveQuestion(0);
      setQuestionChanges({});
    }
    if (!isDeleteActiveQuestion && idToDelete) {
      dispatch(deleteQuestionThunk(idToDelete));
      setIdxActiveQuestion((prevState) =>
        idx < idxActiveQuestion ? prevState - 1 : prevState
      );
    }

    setQuestionChanges({});
    setChecked("");
    dispatch(setDeleteQuestion(idx));
    setIdxActiveQuestion(0);
    dispatch(toggleShowCreatePageModal());
    setIdxToDelete(null);
  };

  const handleConfirmMove = (idxToMove) => {
    if (
      idxActiveQuestion === currentQuiz.questions.length - 1 &&
      isHaveUnsavedQuestion
    ) {
      dispatch(setDeleteQuestion(idxActiveQuestion));
    }
    setChecked("");
    setQuestionChanges({});
    setIdxActiveQuestion(idxToMove);
    setIdxToMove(null);
    dispatch(toggleShowCreatePageModal());
  };

  const handleConfirmAddQuestion = () => {
    setChecked("");
    dispatch(setCurrentChange({ type: valueAddedQuestion }));
    setQuestionChanges({ type: valueAddedQuestion });
    setIdxActiveQuestion(currentQuiz?.questions.length);
    dispatch(toggleShowCreatePageModal());
    setValueAddedQuestion(null);
  };

  const handleCancelClick = () => {
    dispatch(toggleShowCreatePageModal());
    setIdxToDelete(null);
    setIdxToMove(null);
  };
  const isActiveUnsavedQuestion =
    idxActiveQuestion === currentQuiz?.questions.length - 1 &&
    isHaveUnsavedQuestion;

  return (
    <StyledCreateQuizModal>
      {isQuestionHaveChange && !idx && idxToMove !== null && (
        <p>
          {`You have unsaved changes to question # ${
            idxActiveQuestion + 1
          }. If you choose another question, this changes` +
            `${
              isActiveUnsavedQuestion
                ? ` and unsaved question # ${idxActiveQuestion + 1} `
                : " "
            }` +
            `will be lost. Move to question # ${idxToMove + 1}?`}
        </p>
      )}
      {idx !== null && (
        <p>{`Do you want to delete the question # ${idx + 1} ?`}</p>
      )}
      {isQuestionHaveChange &&
        !idx &&
        idxToMove === null &&
        currentQuiz?._id && (
          <p>{`You have unsaved changes to question # ${
            idxActiveQuestion + 1
          }. If you create new question, this changes will be lost. Create new question?`}</p>
        )}
      <button
        className="confirm-btn"
        onClick={
          idx !== null
            ? () => handleConfirmDelete(idx)
            : idxToMove == null
            ? () => handleConfirmAddQuestion()
            : () => handleConfirmMove(idxToMove)
        }
      >
        OK
      </button>
      <button onClick={handleCancelClick}>Cancel</button>
    </StyledCreateQuizModal>
  );
};

export default CreateQuizModal;
