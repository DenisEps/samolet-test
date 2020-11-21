import styled from "styled-components";
import { Colors } from "assets/colors";
import { HomeFilled, FilterFilled } from "@ant-design/icons";

import { Layout, Input } from "antd";

const { Header } = Layout;
const { Search } = Input;

export const HeaderContainer = styled(Header)`
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`;

export const HomeIcon = styled(HomeFilled)`
  font-size: 2rem;
  color: ${Colors.color2b};

  &:hover {
    color: ${Colors.color3b};
    cursor: pointer;
  }
`;

export const SearchComp = styled(Search)`
  width: 300px;
  border-color: unset;
  margin: 0 1rem;
`;

export const SortFilterContainer = styled.div``;

type SortIconType = {
  sort?: null | "desc" | "asc";
};

export const SortIcon = styled(FilterFilled)<SortIconType>`
  font-size: 1.8rem;
  color: ${(props) => (props.sort === null ? Colors.color2b : "lightgreen")};

  transition: all 0.3s;

  &.rotate {
    transform: rotate(180deg);
  }
`;
