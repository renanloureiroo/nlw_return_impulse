import React from "react";

import { Button, ButtonText, Container, Icon, Title } from "./styles";
import SuccessImage from "../../assets/success.png";
import { Copyright } from "../Copyright";

interface SuccessProps {
  onReset: () => void;
}

export const Success = ({ onReset }: SuccessProps) => {
  return (
    <Container>
      <Icon source={SuccessImage} />
      <Title>Agradecemos o feedback!</Title>

      <Button onPress={onReset}>
        <ButtonText>Quero enviar outro</ButtonText>
      </Button>

      <Copyright />
    </Container>
  );
};
