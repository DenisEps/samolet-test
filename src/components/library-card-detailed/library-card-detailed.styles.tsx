import styled from "styled-components";
import { Colors } from "../../assets/colors";
import { Card } from "antd";

export const LibraryCardDetailedContainer = styled(Card)`
  width: 500px;
  margin: 0 auto;

  @media screen and (max-width: 615px) {
    width: 100%;
  }
`;

export const BoldSpan = styled.span`
  color: ${Colors.color6wPrimary};
  font-weight: 600;
  font-size: 1.2rem;
  margin-left: 10px;
`;
