import { COLORS, RADIUS, SHADOWS, SPACING } from "@/theme";
import { StyleSheet, View, ViewProps } from "react-native";

interface AppCardProps extends ViewProps {
  padded?: boolean;
}

export default function AppCard({
  children,
  padded = true,
  style,
  ...props
}: AppCardProps) {
  return (
    <View {...props} style={[styles.card, padded && styles.padded, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    ...SHADOWS.small,
  },

  padded: {
    padding: SPACING.lg,
  },
});
