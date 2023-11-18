import styled from "styled-components";
import mobileBgImg from "../shared/images/mobile/main-mobile@1x.webp";
import tabletBgImg from "../shared/images/tablet/main-tablet@1x.webp";
import desktopBgImg from "../shared/images/desktop/main-desktop@1x.webp";
import isPropValid from "@emotion/is-prop-valid";
export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  padding: 0 20px;
  max-width: 100%;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 0 32px;
  }

  @media (min-width: 1440px) {
    padding: 0 100px;
  }

  ${(props) =>
    props.hasbackground === "true" &&
    `
    background-repeat: no-repeat;
    background-position: right top;
        @media (max-width: 767px) {
    background-image: url(${mobileBgImg});
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    background-image: url(${tabletBgImg});
  }

  @media (min-width: 1440px) {
    background-image: url(${desktopBgImg});
  }
  `}
`;
