import { COLORS, RADIUS, SPACING } from "@/theme";
import { Category } from "@/types";
import { Image } from "expo-image";
import { Pressable, StyleSheet, View } from "react-native";
import AppText from "../ui/AppText";

interface CategoryCardProps {
  category: Category;
  onPress: () => void;
}

export default function CategoryCard({ category, onPress }: CategoryCardProps) {
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={({ pressed }) => [styles.card, pressed && styles.pressed]}
        onPress={onPress}
      >
        <Image
          source={category.image}
          style={styles.image}
          transition={200}
          contentFit="contain"
        />
      </Pressable>

      <AppText
        variant="bodySmall"
        color={COLORS.textSecondary}
        style={styles.name}
      >
        {category.name}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    width: 90,
  },

  card: {
    width: 90,
    height: 90,
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.surface,
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.primary,
    borderWidth: 0.2,
  },

  pressed: {
    opacity: 0.5,
  },

  name: {
    marginTop: SPACING.xs,
    textAlign: "center",
  },
  image: {
    width: 75,
    height: 75,
  },
});
