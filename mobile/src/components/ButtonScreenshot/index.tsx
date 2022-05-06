import { Camera, Trash } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Container, Screenshot } from "./styles";

interface ButtonScreenshotProps {
  screenshot: string | null;
  onTakeShot: () => void;
  onTakeDelete: () => void;
}

export const ButtonScreenshot = ({
  screenshot,
  onTakeDelete,
  onTakeShot,
}: ButtonScreenshotProps) => {
  const theme = useTheme();

  if (!screenshot) {
    return (
      <Container onPress={onTakeShot}>
        <Camera size={24} color={theme.colors.text_primary} />
      </Container>
    );
  }

  return (
    <Container onPress={onTakeDelete}>
      <Screenshot source={{ uri: screenshot }} />
      <Trash
        style={{
          position: "absolute",
          right: 4,
          bottom: 4,
          zIndex: 1,
        }}
        size={12}
        weight="fill"
        color={theme.colors.text_primary}
      />
    </Container>
  );
};
