import styled from "styled-components";
import { Colors } from "../../assets/colors";

import { Layout } from "antd";
import { HomeFilled } from "@ant-design/icons";

const { Header } = Layout;

export const HeaderContainer = styled(Header)`
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const HomeIcon = styled(HomeFilled)`
  font-size: 2rem;
  color: ${Colors.color2b};

  &:hover {
    color: ${Colors.color3b};
    cursor: pointer;
  }
`;
