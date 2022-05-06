import styled, { css } from "styled-components/native";

export const ContainerButton = styled.TouchableOpacity``;

export const Container = styled.View`
  height: 112px;
  width: 102px;
  border-radius: 8px;
  padding: 8px;
  margin: 0 8px;
  ${({ theme }) => css`
    background-color: ${theme.colors.surface_secondary};
  `}

  justify-content: space-around;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 40px;
  height: 40px;
`;

export const Title = styled.Text`
  font-size: 14px;
  line-height: 24px;

  ${({ theme }) => css`
    color: ${theme.colors.text_primary};
    font-family: ${theme.fonts.medium};
  `}
`;
