import "swiper/css";
import "swiper/css/pagination";
import PageTitle from "../../../../shared/components/PageTitle/PageTitle";
import Review from "../Review/Review";
import { getAllReviewsThunk } from "../../../../redux/feedback/feedbackThunks";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { StyledReviews } from "./Reviews.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectReviewPage } from "../../../../redux/selectors";
import EmptyBlock from "../../../../shared/components/EmptyBlock/EmptyBlock";

function Reviews({ reviews, totalReviews }) {
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });
  const page = useSelector(selectReviewPage);

  return (
    <StyledReviews>
      <PageTitle>Reviews</PageTitle>
      {reviews.length === 0 && <EmptyBlock>No reviews yet</EmptyBlock>}
      {reviews?.length > 0 && (
        <Swiper
          onSlideChange={(swiper) => {
            const limit = 8;
            if (swiper.activeIndex === reviews.length - 2 && reviews.length < totalReviews) {
              dispatch(getAllReviewsThunk({ page, limit}));
            }
          }}
          spaceBetween={isDesktop ? 24 : 32}
          slidesPerView={isDesktop ? 2 : 1}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          {reviews.map((review) => {
            return (
              <SwiperSlide key={review._id}>
                <Review review={review} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </StyledReviews>
  );
}

export default Reviews;
