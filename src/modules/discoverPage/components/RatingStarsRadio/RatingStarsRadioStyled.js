import styled from "styled-components";
import Rating from "@mui/material/Rating";

export const RatingS = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "var(--star-color-100)",
  },
  "& .MuiRating-iconEmpty": {
    color: "var(--star-color-8)",
  },
});
