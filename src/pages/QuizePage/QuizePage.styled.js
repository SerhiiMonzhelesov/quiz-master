import styled from "styled-components";
import mobileQuizPageBg from "../../shared/images/mobile/question-mobile@1x.webp";
import mobileQuizPageBg2x from "../../shared/images/mobile/question-mobile@2x.webp";
import tabletQuizPageBg from "../../shared/images/tablet/question-tablet@1x.webp";
import tabletQuizPageBg2x from "../../shared/images/tablet/question-tablet@2x.webp";
import desktopQuizPageBg from "../../shared/images/desktop/question-desktop@1x.webp";
import desktopQuizPageBg2x from "../../shared/images/desktop/question-desktop@2x.webp";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SplashWrapS = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;

  @media screen and (max-width: 767px) {
    max-width: 375px;
    width: 100%;
    min-height: 500px;
    height: 100%;
    background-image: url(${mobileQuizPageBg});
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 343px 325px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${mobileQuizPageBg2x});
      background-size: 343px 325px;
    }
  }

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    width: 100%;
    min-height: 500px;
    height: 100%;
    background-image: url(${tabletQuizPageBg});
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 407px 445px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tabletQuizPageBg2x});
      background-size: 407px 445px;
    }
  }

  @media only screen and (min-width: 1440px) {
    max-width: 1062px;
    width: 100%;
    min-height: 580px;
    height: 100%;
    background-image: url(${desktopQuizPageBg});
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 407px 445px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${desktopQuizPageBg2x});
      background-size: 407px 445px;
    }
  }
`;

export const Container = styled.div`
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
`;

export const BackBox = styled.div`
  margin-top: 52px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    margin-top: 44px;
    margin-bottom: 144px;
  }
  @media (min-width: 1440px) {
    margin-top: 60px;
    margin-bottom: 32px;
  }
`;
