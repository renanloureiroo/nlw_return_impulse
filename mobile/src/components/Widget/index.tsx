import React, { useCallback, useRef, useState } from "react";
import { ChatTeardropDots } from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import { Container } from "./styles";

import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import BottomSheet from "@gorhom/bottom-sheet";

import { getBottomSpace } from "react-native-iphone-x-helper";
import { feedbackTypes } from "../../utils/feedbackTypes";

import { Options } from "../Options";
import { Form } from "../Form";
import { Success } from "../Success";

export type FeedbackType = keyof typeof feedbackTypes;

const BaseComponent = () => {
  const [type, setType] = useState<FeedbackType | null>(null);
  const [send, setSend] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const theme = useTheme();

  const handleGoBack = useCallback(() => {
    setType(null);
  }, []);

  const handleSend = useCallback(() => {
    setSend(true);
  }, []);

  const handleSelectType = useCallback((type: FeedbackType) => {
    setType(type);
  }, []);

  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const handleResetOptions = useCallback(() => {
    setType(null);
    setSend(false);
  }, []);

  return (
    <>
      <Container onPress={handleOpenBottomSheet}>
        <ChatTeardropDots
          weight="bold"
          size={24}
          color={theme.colors.text_on_brand_color}
        />
      </Container>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={{
          backgroundColor: theme.colors.surface_primary,
          paddingTop: 16,
          paddingBottom: getBottomSpace() + 16,
        }}
        handleIndicatorStyle={{
          backgroundColor: theme.colors.text_primary,
        }}
      >
        {!type ? (
          <Options onPress={handleSelectType} />
        ) : !send ? (
          <Form
            feedbackType={type}
            onSend={handleSend}
            onGoBack={handleGoBack}
          />
        ) : (
          <Success onReset={handleResetOptions} />
        )}
      </BottomSheet>
    </>
  );
};

export const Widget = gestureHandlerRootHOC(BaseComponent);
