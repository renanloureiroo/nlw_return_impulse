import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;
  height: 40px;
  align-items: center;
  justify-content: center;
  padding: 0px 8px;
  border-radius: 4px;

  ${({ theme }) => css`
    background-color: ${theme.colors.brand};
  `}
`;

export const Title = styled.Text`
  font-size: 14px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.text_on_brand_color};
  `}
`;
