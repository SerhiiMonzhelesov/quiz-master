import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { RatingS } from "./RatingStarsRadioStyled";

const RatingStarsRadio = ({ handleStarSelection }) => {
  const [value, setValue] = useState(0);

  const handleStarChange = (starsQty) => {
    setValue(starsQty);
    handleStarSelection(starsQty);
  };

  return (
    <>
      <RatingS
        name="simple-controlled"
        value={value}
        emptyIcon={<StarIcon />}
        onChange={(evt, newValue) => {
          handleStarChange(newValue);
        }}
      />
    </>
  );
};

export default RatingStarsRadio;
