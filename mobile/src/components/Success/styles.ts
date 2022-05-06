import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  padding-bottom: 16px;
`;

export const Icon = styled.Image`
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  ${({ theme }) => css`
    color: ${theme.colors.text_primary};
    font-family: ${theme.fonts.medium};
  `}
`;

export const Button = styled.TouchableOpacity`
  height: 40px;
  border-radius: 4px;
  padding: 8px 24px;
  margin-bottom: 56px;

  ${({ theme }) => css`
    background-color: ${theme.colors.surface_secondary};
  `}
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  ${({ theme }) => css`
    color: ${theme.colors.text_primary};
  `}
`;
