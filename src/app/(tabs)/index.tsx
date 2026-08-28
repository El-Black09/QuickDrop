import CategoryCard from "@/components/home/CategoryCard";
import HomeHeader from "@/components/home/HomeHeader";
import RestaurantCard from "@/components/home/RestaurantCard";
import SearchBar from "@/components/home/SearchBar";
import AppText from "@/components/ui/AppText";
import { categories, restaurants } from "@/data";
import { COLORS, SPACING } from "@/theme";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
                category={category}
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
                restaurant={restaurant}
                onPress={() =>
                  router.push({
                    pathname: "/restaurant/[id]",
                    params: { id: restaurant.id },
                  })
                }
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
