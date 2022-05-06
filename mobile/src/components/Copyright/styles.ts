import styled, { css } from "styled-components/native";

export const Container = styled.View``;

export const Title = styled.Text`
  font-size: 12px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.text_secondary};
  `}
`;
