import AppButton from "@/components/ui/AppButton";
import AppCard from "@/components/ui/AppCard";
import AppIconButton from "@/components/ui/AppIconButton";
import AppText from "@/components/ui/AppText";
import { COLORS, SPACING } from "@/theme";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <AppText variant="h1" color={COLORS.primary}>
        QuickDrop
      </AppText>

      <AppText
        variant="body"
        color={COLORS.textSecondary}
        style={styles.subtitle}
      >
        Votre livraison, simplement.
      </AppText>

      <AppCard style={styles.card}>
        <AppText variant="h3">Livraison rapide</AppText>

        <AppText color={COLORS.textSecondary} style={styles.cardText}>
          Recevez vos commandes rapidement.
        </AppText>
      </AppCard>

      <AppButton
        title="Commander"
        onPress={() => console.log("Commande")}
        style={styles.button}
      />

      <AppIconButton icon="heart" onPress={() => console.log("Favori")} />
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

  subtitle: {
    marginTop: SPACING.sm,
  },

  card: {
    width: "100%",
    marginTop: SPACING.xl,
  },

  cardText: {
    marginTop: SPACING.sm,
  },

  button: {
    width: "100%",
    marginTop: SPACING.xl,
  },
});
