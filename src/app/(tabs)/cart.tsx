import { Alert, FlatList, StyleSheet, View } from "react-native";

import { router } from "expo-router";

import CartItemCard from "@/components/cart/CartItemCard";
import CartSummary from "@/components/cart/CartSummary";
import AppText from "@/components/ui/AppText";
import EmptyState from "@/components/ui/EmptyState";

import { useCart } from "@/hooks/useCart";

import { COLORS, SPACING } from "@/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import AppButton from "@/components/ui/AppButton";

export default function CartScreen() {
  const {
    items,
    subtotal,
    deliveryFee,
    total,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart
  } = useCart();

  const onClearCart = () => {
    Alert.alert(
      "Vider le panier",
      "Êtes-vous sûr de vouloir vider le panier ?",
      [
        {
          text: "Annuler",
          style: "cancel"
        },
        {
          text: "Confirmer",
          style: "destructive",
          onPress: clearCart
        }
      ]
    );
  }

  if (items.length === 0) {
    return (
      <SafeAreaView style={styles.emptyContainer}>
        <EmptyState
          icon="shopping-cart"
          title="Votre panier est vide"
          description="Découvrez nos restaurants et ajoutez vos plats préférés."
          actionLabel="Explorer les restaurants"
          onAction={() => router.replace("/(tabs)")}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.product.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.header}>
            <AppText variant="h1">Mon panier</AppText>

            <AppText color={COLORS.textSecondary}>
              {items.length} article
              {items.length > 1 ? "s" : ""}
            </AppText>
          </View>
        }
        renderItem={({ item }) => (
          <CartItemCard
            item={item}
            onIncrease={() => increaseQuantity(item.product.id)}
            onDecrease={() => decreaseQuantity(item.product.id)}
            onRemove={() => removeItem(item.product.id)}
          />
        )}
        ListFooterComponent={
          <CartSummary
            subtotal={subtotal}
            deliveryFee={deliveryFee}
            total={total}
            onCheckout={() => {
              console.log("Checkout");
            }}
          />
        }
      />

      <AppButton
        title="Vider le panier"
        onPress={onClearCart}
        style={styles.clearButton}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  list: {
    padding: SPACING.lg,
    paddingBottom: SPACING.xxl,
  },

  header: {
    marginBottom: SPACING.lg,
  },

  emptyContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  clearButton: {
    margin: SPACING.lg,
    backgroundColor: COLORS.textSecondary,
  },
});
