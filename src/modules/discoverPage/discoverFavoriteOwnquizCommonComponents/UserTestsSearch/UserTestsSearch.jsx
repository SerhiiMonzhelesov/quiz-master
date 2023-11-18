import { InputStyled } from "./UserTestSearch";

const UserTestsSearch = ({ inputValue, setInputValue }) => {
  return (
    <>
      <InputStyled
        placeholder="Search"
        name="quizCollectionName"
        value={inputValue}
        type="text"
        autoComplete="on"
        onChange={(evt) => setInputValue(evt.target.value)}
      />
    </>
  );
};

export default UserTestsSearch;
