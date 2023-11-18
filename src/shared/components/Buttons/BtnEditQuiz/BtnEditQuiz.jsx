import {
  WrapperEditS,
  Btn3DotsS,
  Icon3DotsS,
  UlListOpions,
  IconDeleteS,
  IconEditS,
  LiOption,
  LinkEdit,
  BtnDelete,
} from "./BtnEditQuizStyled";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteQuizThunk } from "../../../../redux/quiz/quizThunks";

const BtnEditQuiz = ({ id }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        isOpen &&
        backgroundRef.current &&
        !backgroundRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isOpen]);

  const handleOnBtnOptionsListClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOnDeleteClick = () => {
    dispatch(deleteQuizThunk(id));
  };

  return (
    <WrapperEditS ref={backgroundRef}>
      <Btn3DotsS type="button" onClick={handleOnBtnOptionsListClick}>
        <Icon3DotsS />
      </Btn3DotsS>
      <UlListOpions className={isOpen ? "openList" : ""}>
        <LiOption>          
          <LinkEdit to="/createquiz" state={{data:id}}>
            <IconEditS />
            <p>Edit</p>
          </LinkEdit>
        </LiOption>
        <LiOption>
          <BtnDelete type="button" onClick={handleOnDeleteClick}>
            <IconDeleteS />
            <p>Delete</p>
          </BtnDelete>
        </LiOption>
      </UlListOpions>
    </WrapperEditS>
  );
};

export default BtnEditQuiz;
