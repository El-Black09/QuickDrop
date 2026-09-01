import { router, useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";

import { products } from "@/data/products";
import { restaurants } from "@/data/restaurants";
import { COLORS, SPACING } from "@/theme";

import ProductCard from "@/components/restaurant/ProductCard";
import RestaurantHeader from "@/components/restaurant/RestaurantHeader";
import AppText from "@/components/ui/AppText";
import { useCart } from "@/hooks/useCart";

export default function RestaurantDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { addItem } = useCart();

  const restaurant = restaurants.find((item) => item.id === id);

  if (!restaurant) {
    return (
      <View style={styles.notFound}>
        <AppText variant="h2">Restaurant introuvable</AppText>
      </View>
    );
  }

  const restaurantProducts = products.filter(
    (product) => product.restaurantId === restaurant.id,
  );

  return (
    <FlatList
      data={restaurantProducts}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
      ListHeaderComponent={
        <>
          <RestaurantHeader
            name={restaurant.name}
            image={restaurant.image}
            rating={restaurant.rating}
            deliveryTime={restaurant.deliveryTime}
            category={restaurant.category}
            isOpen={restaurant.isOpen}
            onBack={() => router.back()}
          />

          <View style={styles.sectionHeader}>
            <AppText variant="h2">Menu</AppText>

            <AppText variant="bodySmall" color={COLORS.textSecondary}>
              {restaurantProducts.length} produits
            </AppText>
          </View>
        </>
      }
      renderItem={({ item }) => (
        <View style={styles.product}>
          <ProductCard
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
            onPress={() => {addItem(item); router.push("/(tabs)/cart")}}
          />
        </View>
      )}
      ListEmptyComponent={
        <View style={styles.empty}>
          <AppText variant="h3">Aucun produit disponible</AppText>

          <AppText color={COLORS.textSecondary} style={styles.emptyText}>
            Ce restaurant n'a pas encore ajouté de produits.
          </AppText>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: SPACING.xxl,
    backgroundColor: COLORS.background,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SPACING.lg,
    marginTop: SPACING.xxl,
    marginBottom: SPACING.lg,
  },

  product: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.md,
  },

  notFound: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.background,
  },

  empty: {
    alignItems: "center",
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.xxl,
  },

  emptyText: {
    textAlign: "center",
    marginTop: SPACING.sm,
  },
});
