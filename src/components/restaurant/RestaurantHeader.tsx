import { Feather } from "@expo/vector-icons";
import { Image, StyleSheet, View } from "react-native";

import { COLORS, RADIUS, SPACING } from "@/theme";

import AppIconButton from "@/components/ui/AppIconButton";
import AppText from "@/components/ui/AppText";

interface RestaurantHeaderProps {
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  category: string;
  isOpen: boolean;
  onBack: () => void;
}

export default function RestaurantHeader({
  name,
  image,
  rating,
  deliveryTime,
  category,
  isOpen,
  onBack,
}: RestaurantHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />

        <View style={styles.backButton}>
          <AppIconButton
            icon="arrow-left"
            onPress={onBack}
            backgroundColor={COLORS.white}
          />
        </View>

        <View style={styles.favoriteButton}>
          <AppIconButton
            icon="heart"
            onPress={() => {}}
            backgroundColor={COLORS.white}
          />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <AppText variant="h1">{name}</AppText>

          <View style={[styles.status, isOpen ? styles.open : styles.closed]}>
            <AppText
              variant="caption"
              color={isOpen ? COLORS.success : COLORS.error}
            >
              {isOpen ? "Ouvert" : "Fermé"}
            </AppText>
          </View>
        </View>

        <AppText color={COLORS.textSecondary} style={styles.category}>
          {category}
        </AppText>

        <View style={styles.meta}>
          <View style={styles.metaItem}>
            <Feather name="star" size={16} color={COLORS.warning} />

            <AppText variant="bodySmall" style={styles.metaText}>
              {rating}
            </AppText>
          </View>

          <View style={styles.metaItem}>
            <Feather name="clock" size={16} color={COLORS.textSecondary} />

            <AppText
              variant="bodySmall"
              color={COLORS.textSecondary}
              style={styles.metaText}
            >
              {deliveryTime}
            </AppText>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
  },

  imageContainer: {
    height: 260,
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  backButton: {
    position: "absolute",
    top: 50,
    left: SPACING.lg,
  },

  favoriteButton: {
    position: "absolute",
    top: 50,
    right: SPACING.lg,
  },

  content: {
    padding: SPACING.lg,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  status: {
    borderRadius: RADIUS.full,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
  },

  open: {
    backgroundColor: "#E8F8EE",
  },

  closed: {
    backgroundColor: "#FDECEC",
  },

  category: {
    marginTop: SPACING.xs,
  },

  meta: {
    flexDirection: "row",
    marginTop: SPACING.md,
    gap: SPACING.lg,
  },

  metaItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  metaText: {
    marginLeft: SPACING.xs,
  },
});
