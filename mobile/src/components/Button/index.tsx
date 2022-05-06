import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

export const Button = ({ title, isLoading = false, ...rest }: ButtonProps) => {
  return (
    <Container {...rest}>
      {isLoading ? <ActivityIndicator /> : <Title>{title}</Title>}
    </Container>
  );
};
