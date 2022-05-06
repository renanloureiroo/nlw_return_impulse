import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  align-items: center;
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const Title = styled.Text`
  font-size: 20px;
  line-height: 24px;
  ${({ theme }) => css`
    color: ${theme.colors.text_primary};
    font-family: ${theme.fonts.medium};
  `}
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 16px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0px;
`;

export const Input = styled.TextInput`
  width: 100%;
  border-radius: 4px;

  height: 112px;
  padding: 8px 12px;
  font-size: 14px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.colors.text_primary};
    border: 1px solid ${theme.colors.stroke};
    font-family: ${theme.fonts.regular};
  `};
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;
