import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const ToastContainerStyled = styled(ToastContainer)`
  width: 400px;

  .Toastify__toast-container {
    background: var(--second-background);
  }

  .Toastify__toast--success {
    background: var(--second-background);
  }

  .Toastify__toast--error {
    background: var(--second-background);
  }

  .Toastify__toast--info {
    background: var(--second-background);
  }

  .Toastify__toast-body {
    width: 400px;
    height: 120px;
    font-size: 22px;
    text-align: center;
    color: var(--text-color-100);
  }

  @media screen and (max-width: 768px) {
    max-width: 280px;

    .Toastify__toast-body {
      font-size: 16px;
    }
  }
`;
