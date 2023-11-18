import { useDispatch, useSelector } from "react-redux";
import UserTestsSearch from "../../discoverFavoriteOwnquizCommonComponents/UserTestsSearch/UserTestsSearch";
import IconFilter from "../IconFilter/IconFilter";
import QuizSelect from "../QuizSelect/QuizSelect";
import {
  BtnSearch,
  IconS,
  FormWrapper,
  SelectWrapper,
} from "./QuizesSearchStyled";
import { selectDiscoverAllCategories } from "../../../../redux/selectors";
import { useEffect, useState } from "react";
import {
  getFilteredQuizzesThunk,
  getQuizCategoriesThunk,
} from "../../../../redux/quiz/quizThunks";
import { updateFiltered } from "../../../../redux/quiz/quizSlice";

const QuizeSearch = ({ handleCategorySelection, commonFilter }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuizCategoriesThunk());
  }, [dispatch]);
  const allCategories = useSelector(selectDiscoverAllCategories);
  const [inputValue, setInputValue] = useState("");

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(updateFiltered([]));
    dispatch(getFilteredQuizzesThunk({ inputValue, ...commonFilter }));
    setInputValue("");
  };

  return (
    <FormWrapper onSubmit={onFormSubmit}>
      <SelectWrapper>
        <BtnSearch type="submit">
          <IconS />
        </BtnSearch>
        <UserTestsSearch
          inputValue={inputValue}
          setInputValue={setInputValue}
        />

        <IconFilter />

        <QuizSelect
          className="forChildren"
          selectTitle="For children"
          options={allCategories?.children}
          handleCategorySelection={handleCategorySelection}
        />
        <QuizSelect
          className="forAdults"
          selectTitle="For adults"
          options={allCategories?.adults}
          handleCategorySelection={handleCategorySelection}
        />
      </SelectWrapper>
    </FormWrapper>
  );
};

export default QuizeSearch;
