import { Feather } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, View } from "react-native";

import { COLORS, RADIUS, SHADOWS, SPACING } from "@/theme";

import AppText from "@/components/ui/AppText";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  price: number;
  onPress: () => void;
}

export default function ProductCard({
  name,
  description,
  image,
  price,
  onPress,
}: ProductCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={styles.content}>
        <AppText variant="h3">{name}</AppText>

        <AppText
          variant="bodySmall"
          color={COLORS.textSecondary}
          numberOfLines={2}
          style={styles.description}
        >
          {description}
        </AppText>

        <AppText variant="body" color={COLORS.primary} style={styles.price}>
          {price.toLocaleString("fr-FR")} FCFA
        </AppText>
      </View>

      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />

        <View style={styles.addButton}>
          <Feather name="plus" size={18} color={COLORS.white} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    ...SHADOWS.small,
  },

  pressed: {
    opacity: 0.9,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingRight: SPACING.md,
  },

  description: {
    marginTop: SPACING.xs,
  },

  price: {
    marginTop: SPACING.sm,
    fontWeight: "700",
  },

  imageContainer: {
    width: 110,
    height: 110,
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: RADIUS.md,
  },

  addButton: {
    position: "absolute",
    right: -4,
    bottom: -4,
    width: 32,
    height: 32,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
