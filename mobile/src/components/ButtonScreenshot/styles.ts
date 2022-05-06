import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.stroke};
  margin-right: 8px;
  align-items: center;
  justify-content: center;

  position: relative;
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.surface_secondary};
`;

export const Screenshot = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;
