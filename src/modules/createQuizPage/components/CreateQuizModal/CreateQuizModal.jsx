import { useDispatch, useSelector } from "react-redux";
import { StyledCreateQuizModal } from "./CreateQuizModal.styled";
import { toggleShowCreatePageModal } from "../../../../redux/Modal/modalSlice";
import { deleteQuestionThunk } from "../../../../redux/quiz/questionThunks";
import { selectCurrentQuiz } from "../../../../redux/selectors";
import { setDeleteQuestion } from "../../../../redux/quiz/quizSlice";

const CreateQuizModal = ({
  idx,
  setIdxToDelete,
  idxToMove,
  setIdxToMove,
  idxActiveQuestion,
  setIdxActiveQuestion,
  setQuestionChanges,
  isQuestionHaveChange,
  setChecked,
}) => {
  const currentQuiz = useSelector(selectCurrentQuiz);
  const dispatch = useDispatch();
  const idToDelete = currentQuiz?.questions[idx]?._id;
  const isDeleteActiveQuestion = idx === Number(idxActiveQuestion);

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
    dispatch(setDeleteQuestion(idx));
    setIdxActiveQuestion(0);
    dispatch(toggleShowCreatePageModal());
    setIdxToDelete(null);
  };

  const handleConfirmMove = (idxToMove) => {
    setChecked("");
    setQuestionChanges({});
    setIdxActiveQuestion(idxToMove);
    setIdxToMove(null);
    dispatch(toggleShowCreatePageModal());
  };

  const handleCancelClick = () => {
    dispatch(toggleShowCreatePageModal());
    setIdxToDelete(null);
    setIdxToMove(null);
  };

  return (
    <StyledCreateQuizModal>
      {isQuestionHaveChange && idx === null ? (
        <p>{`You have unsaved changes to question # ${
          idxActiveQuestion + 1
        }. If you choose another question, this changes will be lost. Move to question # ${
          idxToMove + 1
        }?`}</p>
      ) : (
        <p>{`Do you want to delete the question # ${idx + 1} ?`}</p>
      )}
      <button
        className="conrirm"
        onClick={
          idx !== null
            ? () => handleConfirmDelete(idx)
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
