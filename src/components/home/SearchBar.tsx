import { COLORS, RADIUS, SPACING } from "@/theme";
import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, TextInput } from "react-native";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onPress?: () => void;
}

export default function SearchBar({
  value,
  onChangeText,
  onPress,
}: SearchBarProps) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Feather name="search" size={24} color={COLORS.textMuted} />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder="Rechercher un restaurant, un plat..."
        placeholderTextColor={COLORS.textMuted}
      />

      <Feather name="sliders" size={24} color={COLORS.textSecondary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    paddingHorizontal: SPACING.lg,
    minHeight: 52,
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.xl,
  },

  input: {
    flex: 1,
    marginHorizontal: SPACING.md,
    color: COLORS.text,
    fontSize: 14,
  },
});
