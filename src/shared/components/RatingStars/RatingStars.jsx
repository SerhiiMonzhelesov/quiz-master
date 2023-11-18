import { RatingBox, RatingS } from "./RatingStarsStyled";
import StarIcon from '@mui/icons-material/Star';

const RatingStars = ({ rate }) => {
  return (
    <>
      <RatingBox>
        <RatingS
          name="read-only"
          value={rate}
          precision={0.1}
          readOnly
          emptyIcon={<StarIcon/>}
        />
      </RatingBox>
    </>
  );
};

export default RatingStars;
