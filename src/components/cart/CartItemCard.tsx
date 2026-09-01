import { Feather } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, View } from "react-native";

import AppText from "@/components/ui/AppText";
import { COLORS, RADIUS, SPACING } from "@/theme";
import { CartItem } from "@/types";

interface CartItemCardProps {
  item: CartItem;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

export default function CartItemCard({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemCardProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item.product.image,
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <View style={styles.header}>
          <AppText variant="h3" numberOfLines={1} style={styles.name}>
            {item.product.name}
          </AppText>

          <Pressable onPress={onRemove} hitSlop={8}>
            <Feather name="trash-2" size={18} color={COLORS.error} />
          </Pressable>
        </View>

        <AppText variant="bodySmall" color={COLORS.textSecondary}>
          {item.product.price.toLocaleString("fr-FR")} FCFA
        </AppText>

        <View style={styles.footer}>
          <View style={styles.quantity}>
            <Pressable onPress={onDecrease} style={styles.quantityButton}>
              <Feather name="minus" size={16} color={COLORS.text} />
            </Pressable>

            <AppText variant="body">{item.quantity}</AppText>

            <Pressable onPress={onIncrease} style={styles.quantityButton}>
              <Feather name="plus" size={16} color={COLORS.text} />
            </Pressable>
          </View>

          <AppText variant="h3">
            {(item.product.price * item.quantity).toLocaleString("fr-FR")} FCFA
          </AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.md,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: RADIUS.md,
  },

  content: {
    flex: 1,
    marginLeft: SPACING.md,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  name: {
    flex: 1,
    marginRight: SPACING.sm,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: SPACING.md,
  },

  quantity: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.md,
  },

  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
