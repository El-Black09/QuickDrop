import { COLORS, SPACING, TYPOGRAPHY } from "@/theme";
import { StyleSheet, Text, View } from "react-native";

export default function Orders() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes commandes</Text>

      <Text style={styles.subtitle}>Retrouvez ici vos commandes.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.background,
    padding: SPACING.lg,
  },

  title: {
    ...TYPOGRAPHY.h2,
    color: COLORS.text,
  },

  subtitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    marginTop: SPACING.sm,
  },
});
