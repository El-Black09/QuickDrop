import { COLORS, TYPOGRAPHY } from "@/theme";
import { StyleSheet, Text, TextProps } from "react-native";

type textVariant = keyof typeof TYPOGRAPHY;

interface AppTextProps extends TextProps {
  variant?: textVariant;
  color?: string;
}

export default function AppText({
  variant = "body",
  color = COLORS.text,
  style,
  ...props
}: AppTextProps) {
  return (
    <Text
      {...props}
      style={[styles.base, TYPOGRAPHY[variant], { color }, style]}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false,
  },
});
