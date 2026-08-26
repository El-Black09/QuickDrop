import { COLORS, RADIUS, SPACING } from "@/theme";
import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

interface AppIconButtonProps {
  icon: keyof typeof Feather.glyphMap;
  onPress: () => void;
  size?: number;
  color?: string;
  backgroundColor?: string;
}

export default function AppIconButton({
  icon,
  onPress,
  size = 22,
  color = COLORS.text,
  backgroundColor = COLORS.surface,
}: AppIconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor,
        },
        pressed && styles.pressed,
      ]}
    >
      <Feather name={icon} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    borderRadius: RADIUS.full,
    alignItems: "center",
    justifyContent: "center",
    padding: SPACING.sm,
  },

  pressed: {
    opacity: 0.7,
  },
});
