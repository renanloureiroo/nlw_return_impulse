import React from "react";
import { Copyright } from "../Copyright";
import { Option } from "../Option";

import { Container, Title, Content } from "./styles";

import { feedbackTypes } from "../../utils/feedbackTypes";
import { FeedbackType } from "../Widget";

interface OptionsProps {
  onPress: (type: FeedbackType) => void;
}

export const Options = ({ onPress }: OptionsProps) => {
  return (
    <Container>
      <Title>Deixe seu feedback</Title>
      <Content>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            key={key}
            image={value.image}
            title={value.title}
            onPress={() => onPress(key as FeedbackType)}
          />
        ))}
      </Content>

      <Copyright />
    </Container>
  );
};
