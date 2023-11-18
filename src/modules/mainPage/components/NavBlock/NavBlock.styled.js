import styled from "styled-components";
import backgroundImg from "../../images/splash-desktop@1x.webp";
import backgroundImg2x from "../../images/splash-desktop@2x.webp";
import backgroundTab from "../../images/splash-tablet@1x.webp";
import backgroundTab2x from "../../images/splash-tablet@2x.webp";
import backgroundMob from "../../images/splash-mobile@1x.webp";
import backgroundMob2x from "../../images/splash-mobile@2x.webp";

export const StyledNavBlock = styled.section`
  width: 100%;

  & > div {
    height: 570px;
    width: 100%;
    padding: 64px 32px;
    border-radius: 30px;
    overflow: hidden;
    background-color: var(--blue-background);
    background-image: url(${backgroundMob});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 318px 156px;
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & > div {
      background-image: url(${backgroundMob2x});
      background-repeat: no-repeat;
      background-position: center bottom;
      background-size: 318px 156px;
    }
  }

  h2 {
    max-width: 271px;
    margin: 0 auto 16px;
  }

  p {
    margin: 0 auto 32px;
    max-width: 271px;
  }

  button {
    margin-right: 14px;
  }

  button:hover,
  button:focus {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 767px) {
    div > div {
      display: flex;
      max-width: 271px;
      margin: 0 auto;
      gap: 14px;
    }

    button {
      margin: 0;
    }
  }

  @media only screen and (min-width: 768px) {
    h2 {
      max-width: 439px;
      width: 439px;
      margin: 0 0 16px;
    }

    & > div {
      margin: 0 auto;
      width: 704px;
      height: 448px;
      padding: 88px 32px;
      background-image: url(${backgroundTab});
      background-repeat: no-repeat;
      background-position: right 64px;
      background-size: 222px 301px;
    }

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & > div {
        background-image: url(${backgroundTab2x});
        background-repeat: no-repeat;
        background-position: right 64px;
        background-size: 222px 301px;
      }
    }

    p {
      max-width: 418px;
      width: 418px;
      margin: 0 0 32px;
    }
  }

  @media only screen and (min-width: 1440px) {
    & > div {
      width: auto;
      height: 380px;
      padding: 88px 64px;
      background-image: url(${backgroundImg});
      background-repeat: no-repeat;
      background-position: right center;
      background-size: 407px 380px;
    }

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & > div {
        background-image: url(${backgroundImg2x});
        background-repeat: no-repeat;
        background-position: right center;
        background-size: 407px 380px;
      }
    }

    p {
      width: 683px;
      max-width: 683px;
    }

    h2 {
      width: 100%;
      max-width: 100%;
    }
  }
`;
