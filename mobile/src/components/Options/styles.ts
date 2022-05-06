import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
`;

export const Title = styled.Text`
  font-size: 20px;
  line-height: 24px;
  ${({ theme }) => css`
    color: ${theme.colors.text_primary};
    font-family: ${theme.fonts.medium};
  `}
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
