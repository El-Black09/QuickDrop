import AppIconButton from "@/components/ui/AppIconButton";
import AppText from "@/components/ui/AppText";
import { COLORS, RADIUS, SHADOWS, SPACING } from "@/theme";
import { Restaurant } from "@/types";
import { Feather } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, View } from "react-native";

interface RestaurantCardProps {
  restaurant: Restaurant
  onPress: () => void;
}

export default function RestaurantCard({
  restaurant,
  onPress,
}: RestaurantCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: restaurant.image }} style={styles.image} />

        <View style={styles.favorite}>
          <AppIconButton
            icon="heart"
            onPress={() => {}}
            backgroundColor={COLORS.white}
          />
        </View>
      </View>

      <View style={styles.content}>
        <AppText variant="h3">{restaurant.name}</AppText>

        <View style={styles.meta}>
          <Feather name="star" size={14} color={COLORS.warning} />

          <AppText variant="bodySmall" style={styles.rating}>
            {restaurant.rating}{" "}
          </AppText>

          <AppText variant="bodySmall" color={COLORS.textMuted}>
            •
          </AppText>

          <AppText
            variant="bodySmall"
            color={COLORS.textSecondary}
            style={styles.time}
          >
            {restaurant.deliveryTime}
          </AppText>
        </View>

        <AppText variant="bodySmall" color={COLORS.textSecondary}>
          {restaurant.category}
        </AppText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    overflow: "hidden",
    ...SHADOWS.small,
  },

  pressed: {
    opacity: 0.9,
  },

  imageContainer: {
    height: 180,
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  favorite: {
    position: "absolute",
    top: SPACING.md,
    right: SPACING.md,
  },

  content: {
    padding: SPACING.lg,
  },

  meta: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SPACING.sm,
    marginBottom: SPACING.xs,
  },

  rating: {
    marginLeft: SPACING.xs,
  },

  time: {
    marginLeft: SPACING.xs,
  },
});
