import "swiper/css";
import "swiper/css/pagination";
import ButtonSeeAll from "../../../../shared/components/Buttons/ButtonSeeAll/ButtonSeeAll";
import PageTitle from "../../../../shared/components/PageTitle/PageTitle";
import Paragraph from "../../../../shared/components/Paragraph/Paragraph";
import QuizesList from "../../../../shared/components/QuizesList/QuizesList";
import QuizListItem from "../../../../shared/components/QuizListItem/QuizListItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import { StyledQuizzes } from "./Quizzes.styled";
import EmptyBlock from "../../../../shared/components/EmptyBlock/EmptyBlock";

import { v4 as uuidv4 } from "uuid";

function Quizzes({ adultQuizzes, childrenQuizzes }) {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const desktopAdultQuizzes = adultQuizzes?.slice(0, 4);
  const desktopChildrenQuizzes = childrenQuizzes?.slice(0, 4);

  return (
    <StyledQuizzes>
      <div>
        <PageTitle>For Adults</PageTitle>
        <div>
          <Paragraph>
            Dive deep into a world of intriguing quizzes tailored for adults.
            From cinema to logic, challenge your knowledge and discover where
            your expertise lies. Explore a diverse range of topics and test the
            depths of your knowledge.
          </Paragraph>
          <ButtonSeeAll link="/randomquiz/Adults" />
        </div>
        {adultQuizzes?.length === 0 && (
          <EmptyBlock>No available quizzes</EmptyBlock>
        )}
        {isDesktop && adultQuizzes.length > 0 && (
          <QuizesList quizzesArr={desktopAdultQuizzes} />
        )}
        {isTablet && adultQuizzes.length > 0 && (
          <Swiper
            spaceBetween={24}
            slidesPerView={2}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
          >
            {adultQuizzes?.map((quiz) => (
              <SwiperSlide key={uuidv4()}>
                <QuizListItem quiz={quiz} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {isMobile && adultQuizzes.length > 0 && (
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
          >
            {adultQuizzes?.map((quiz) => (
              <SwiperSlide key={uuidv4()}>
                <QuizListItem quiz={quiz} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div>
        <PageTitle>For Children</PageTitle>
        <div>
          <Paragraph>
            Engaging and fun quizzes designed specifically for kids. Dive into a
            world of colorful questions on movies, music, and much more. Perfect
            for young curious minds! A safe space for children to learn, play,
            and grow their knowledge.
          </Paragraph>
          <ButtonSeeAll link="/randomquiz/Children" />
        </div>
        {childrenQuizzes?.length === 0 && (
          <EmptyBlock>No available quizzes</EmptyBlock>
        )}
        {isDesktop && childrenQuizzes.length > 0 && (
          <QuizesList quizzesArr={desktopChildrenQuizzes} />
        )}
        {isTablet && childrenQuizzes.length > 0 && (
          <Swiper
            spaceBetween={24}
            slidesPerView={2}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
          >
            {childrenQuizzes?.map((quiz) => (
              <SwiperSlide key={uuidv4()}>
                <QuizListItem quiz={quiz} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {isMobile && childrenQuizzes.length > 0 && (
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
          >
            {childrenQuizzes?.map((quiz) => (
              <SwiperSlide key={uuidv4()}>
                <QuizListItem quiz={quiz} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </StyledQuizzes>
  );
}

export default Quizzes;
