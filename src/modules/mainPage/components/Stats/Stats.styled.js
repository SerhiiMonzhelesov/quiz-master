import styled from "styled-components";
import backgroundImg from "../../images/footer-desktop@1x.webp";
import backgroundImg2x from "../../images/footer-desktop@2x.webp";
import backgroundMob from "../../images/footer-mobile@1x.webp";
import backgroundMob2x from "../../images/footer-mobile@2x.webp";

export const StyledStats = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 482px;
  padding: 64px 0 22px;
  background-color: var(--accent-color);
  color: var(--text-color-100);

  background-image: url(${backgroundMob});
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 280px 325px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${backgroundMob2x});
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 280px 325px;
  }

  h2 {
    text-align: center;
    font-size: 11.73vw;
    font-family: GilroyBold, sans-serif;
    font-weight: normal;
    margin-bottom: 10px;
    line-height: 1.09;
    letter-spacing: -0.01em;
  }

  h2 + p {
    text-align: center;
    margin-bottom: 112px;
  }

  div + div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
  }

  ul {
    display: flex;
    gap: 12px;
  }

  p:first-child {
    font-family: GilroyBold, sans-serif;
    font-size: 3.73vw;
    font-weight: normal;
    line-height: 1.42;
  }

  a {
    color: var(--text-color-50);
    font-size: 3.73vw;
    font-weight: normal;
    line-height: 1.42;
  }

  @media only screen and (min-width: 375px) {
    h2 {
      font-size: 44px;
    }

    p:first-child {
      font-size: 14px;
      line-height: 20px;
    }

    a {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 768px) {
    height: 360px;
    padding: 64px 32px 20px;
    align-items: flex-end;

    background-image: url(${backgroundImg});
    background-size: 314px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${backgroundImg2x});
      background-size: 314px;
    }

    h2 {
      font-size: 120px;
      width: auto;
      line-height: 110px;
      letter-spacing: -1.2px;
      margin-bottom: 12px;
    }

    div {
      display: inline-block;
      width: auto;
    }

    h2 + p {
      display: inline-block;
      width: 100%;
    }

    div + div {
      display: flex;
      flex-direction: row;
      gap: 40px;
    }
  }

  @media only screen and (min-width: 1440px) {
    padding: 64px 0 20px;
    align-items: center;

    div {
      display: block;
    }
  }
`;
