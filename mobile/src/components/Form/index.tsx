import { ArrowLeft } from "phosphor-react-native";
import React, { useCallback, useState } from "react";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { useTheme } from "styled-components/native";
import { FeedbackType } from "../Widget";

import {
  BackButton,
  Container,
  Footer,
  Header,
  Icon,
  Input,
  Title,
  TitleWrapper,
} from "./styles";
import { Copyright } from "../Copyright";
import { ButtonScreenshot } from "../ButtonScreenshot";

import { captureScreen } from "react-native-view-shot";
import { Button } from "../Button";
import { api } from "../../services/api";
import * as FileSystem from "expo-file-system";

interface FormProps {
  feedbackType: FeedbackType;
  onSend: () => void;
  onGoBack: () => void;
}

export const Form = ({ feedbackType, onSend, onGoBack }: FormProps) => {
  const typeData = feedbackTypes[feedbackType];

  const [comment, setComment] = useState("");

  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const theme = useTheme();

  const handleTakeScreenshot = useCallback(async () => {
    try {
      const uri = await captureScreen({
        format: "jpg",
        quality: 0.8,
      });
      setScreenshot(uri);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleDeleteScreenshot = useCallback(() => {
    setScreenshot(null);
  }, []);

  const handleSubmit = async () => {
    if (comment) {
      setIsLoading(true);
      if (!isLoading) {
        try {
          let screenshotBase64 = null;
          if (screenshot) {
            screenshotBase64 = await FileSystem.readAsStringAsync(screenshot, {
              encoding: "base64",
            });
          }

          await api.post("/feedbacks", {
            type: feedbackType,
            comment,
            screenshot: `data:image/png;base64,${screenshotBase64}`,
          });

          onSend();
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={onGoBack}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </BackButton>
        <TitleWrapper>
          <Icon source={typeData.image} />
          <Title>{typeData.title}</Title>
        </TitleWrapper>
      </Header>

      <Input
        multiline
        placeholder="Conte-nos detalhadamente seu feedback..."
        placeholderTextColor={theme.colors.text_secondary}
        onChangeText={setComment}
        autoCorrect={false}
      />

      <Footer>
        <ButtonScreenshot
          screenshot={screenshot}
          onTakeDelete={handleDeleteScreenshot}
          onTakeShot={handleTakeScreenshot}
        />
        <Button title="Enviar" onPress={handleSubmit} isLoading={isLoading} />
      </Footer>

      <Copyright />
    </Container>
  );
};
