import { AvatarImg, StyledReview } from "./Review.styled";
import CardTitle from "../../../../shared/components/CardTitle/CardTitle";
import Paragraph from "../../../../shared/components/Paragraph/Paragraph";
import Avatar from "../../../../shared/components/Avatar/Avatar";


function Review({ review }) {
    return (
      <StyledReview>
        <div>{review && review.userAvatar ? (
        <Avatar src={review.userAvatar} alt="avatar" width="44" />
      ) : (
        <AvatarImg>
          {review && review.userName
            ? review.userName.trim().charAt(0).toUpperCase()
            : ""}
        </AvatarImg>
      )}
          <CardTitle>{review.userName}</CardTitle>
        </div>
        <div>
          <Paragraph>{review.comment}</Paragraph>
        </div>
      </StyledReview>
    );
}

export default Review;
