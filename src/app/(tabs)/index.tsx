import CategoryCard from "@/components/home/CategoryCard";
import HomeHeader from "@/components/home/HomeHeader";
import RestaurantCard from "@/components/home/RestaurantCard";
import SearchBar from "@/components/home/SearchBar";
import AppText from "@/components/ui/AppText";
import { COLORS, SPACING } from "@/theme";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
  {
    id: "1",
    name: "Burger",
    image: require("@/assets/images/burger.png"),
  },
  {
    id: "2",
    name: "Pizza",
    image: require("@/assets/images/pizza.png"),
  },
  {
    id: "3",
    name: "Poulet",
    image: require("@/assets/images/chicken.png"),
  },
  {
    id: "4",
    name: "Healthy",
    image: require("@/assets/images/salad.png"),
  },
  {
    id: "5",
    name: "Dessert",
    image: require("@/assets/images/ice.png"),
  },
];

const restaurants = [
  {
    id: "1",
    name: "Burger House",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    rating: 4.8,
    deliveryTime: "25-35 min",
    category: "Poulet • Burgers",
  },
  {
    id: "2",
    name: "Pizza House",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    rating: 4.7,
    deliveryTime: "20-30 min",
    category: "Pizza • Italienne",
  },
];

export default function Index() {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <HomeHeader
          userName="Arnaud Igor"
          address="Abidjan, Yopougon"
          onNotificationPress={() => console.log("Notification pressed")}
        />

        <SearchBar value={search} onChangeText={setSearch} />

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <AppText variant="h3">Catégories</AppText>

            <AppText variant="bodySmall" color={COLORS.primary}>
              Voir tout
            </AppText>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
            style={{ marginHorizontal: 10 }}
          >
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                image={category.image}
                onPress={() => {}}
              />
            ))}
          </ScrollView>
        </View>

        <View style={[styles.section, { marginTop: 60 }]}>
          <View style={styles.sectionHeader}>
            <AppText variant="h3">Restaurants populaires</AppText>

            <AppText variant="bodySmall" color={COLORS.primary}>
              Voir tout
            </AppText>
          </View>

          <View style={styles.restaurantList}>
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                {...restaurant}
                onPress={() => console.log(`Restaurant ${restaurant.name} pressed`)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  section: {
    marginTop: SPACING.xxl,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
  },

  horizontalList: {
    paddingHorizontal: SPACING.lg,
    gap: SPACING.md,
  },

  restaurantList: {
    paddingHorizontal: SPACING.lg,
    gap: SPACING.lg,
  },
});
