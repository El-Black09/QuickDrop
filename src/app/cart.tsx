import { FlatList, StyleSheet, View } from "react-native";

import { useCart } from "@/hooks/useCart";

import { COLORS, SPACING } from "@/theme";

import AppText from "@/components/ui/AppText";

export default function CartScreen() {
  const { items, subtotal, deliveryFee, total } = useCart();

  return (
    <View style={styles.container}>
      <AppText variant="h1">Mon panier</AppText>

      <FlatList
        data={items}
        keyExtractor={(item) => item.product.id}
        renderItem={({ item }) => (
          <AppText>
            {item.product.name} x {item.quantity}
          </AppText>
        )}
      />

      <View style={styles.summary}>
        <AppText>Sous-total : {subtotal.toLocaleString("fr-FR")} FCFA</AppText>

        <AppText>
          Frais de livraison : {deliveryFee.toLocaleString("fr-FR")} FCFA
        </AppText>

        <AppText variant="h2">
          Total à payer : {total.toLocaleString("fr-FR")} FCFA
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.lg,
  },

  summary: {
    gap: SPACING.md,
    paddingVertical: SPACING.lg,
  },
});
