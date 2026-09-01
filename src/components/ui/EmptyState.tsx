import { Feather } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import AppButton from "./AppButton";
import AppText from "./AppText";

import { COLORS, RADIUS, SPACING } from "@/theme";

interface EmptyStateProps {
  icon: keyof typeof Feather.glyphMap;
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
}

export default function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name={icon} size={40} color={COLORS.primary} />
      </View>

      <AppText variant="h2" style={styles.title}>
        {title}
      </AppText>

      <AppText color={COLORS.textSecondary} style={styles.description}>
        {description}
      </AppText>

      <AppButton title={actionLabel} onPress={onAction} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SPACING.xl,
  },

  iconContainer: {
    width: 90,
    height: 90,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.surface,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.lg,
    borderWidth: 0.3,
    borderColor: COLORS.primary,
  },

  title: {
    textAlign: "center",
  },

  description: {
    textAlign: "center",
    marginTop: SPACING.sm,
  },

  button: {
    marginTop: SPACING.xl,
    minWidth: 180,
  },
});
