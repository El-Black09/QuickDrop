import { COLORS, SPACING, TYPOGRAPHY } from "@/theme";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>QuickDrop</Text>

      <Text style={styles.subtitle}>Votre livraison, simplement.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
    padding: SPACING.lg,
  },

  title: {
    ...TYPOGRAPHY.h1,
    color: COLORS.primary,
  },

  subtitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    marginTop: SPACING.sm,
  },
});
