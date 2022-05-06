import React from "react";
import { ImageProps, TouchableOpacityProps } from "react-native";

import { Container, ContainerButton, Icon, Title } from "./styles";

interface OptionProps extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export const Option = ({ title, image, ...rest }: OptionProps) => {
  return (
    <ContainerButton {...rest}>
      <Container>
        <Icon source={image} />
        <Title>{title}</Title>
      </Container>
    </ContainerButton>
  );
};
