import {
  BtnSearch,
  FiSearchS,
  FormWrapper,
  InputStyled,
} from "./QuizSearchStyled";

const QuizeSearch = ({ search, setSearch }) => {
  return (
    <FormWrapper>
      <BtnSearch type="submit">
        <FiSearchS />
      </BtnSearch>
      <InputStyled
        placeholder="Search"
        name="quizCollectionName"
        value={search}
        type="text"
        autoComplete="on"
        autoFocus
        onChange={(evt) => setSearch(evt.target.value)}
      />
    </FormWrapper>
  );
};

export default QuizeSearch;
