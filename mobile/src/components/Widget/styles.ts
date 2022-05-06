import styled, { css } from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  ${({ theme }) => css`
    background-color: ${theme.colors.brand};
  `}
  border-radius: 24px;
  position: absolute;
  right: 28px;
  bottom: ${getBottomSpace() + 28}px;
`;
