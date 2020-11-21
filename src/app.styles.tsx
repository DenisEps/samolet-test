import styled from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;

export const ContentContainer = styled(Content)`
  padding: 1rem;

  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 0;
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
  }
`;
