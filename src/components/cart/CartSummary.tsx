import { StyleSheet, View } from "react-native";

import AppButton from "@/components/ui/AppButton";
import AppText from "@/components/ui/AppText";

import { COLORS, SPACING } from "@/theme";

interface CartSummaryProps {
  subtotal: number;
  deliveryFee: number;
  total: number;
  onCheckout: () => void;
}

export default function CartSummary({
  subtotal,
  deliveryFee,
  total,
  onCheckout,
}: CartSummaryProps) {
  const formatPrice = (price: number) =>
    `${price.toLocaleString("fr-FR")} FCFA`;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <AppText color={COLORS.textSecondary}>Sous-total</AppText>

        <AppText>{formatPrice(subtotal)}</AppText>
      </View>

      <View style={styles.row}>
        <AppText color={COLORS.textSecondary}>Livraison</AppText>

        <AppText>
          {formatPrice(deliveryFee)}
        </AppText>
      </View>

      <View style={styles.separator} />

      <View style={styles.row}>
        <AppText variant="h2">Total</AppText>

        <AppText variant="h2" color={COLORS.primary}>
          {formatPrice(total)}
        </AppText>
      </View>

      <AppButton
        title="Passer la commande"
        onPress={onCheckout}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: SPACING.lg,
    gap: SPACING.md,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  separator: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.sm,
  },

  button: {
    marginTop: SPACING.md,
  },

  clearButton: {
    marginTop: SPACING.md,
    backgroundColor: COLORS.error,
  },
});
