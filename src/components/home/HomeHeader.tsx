import { COLORS, SPACING } from "@/theme";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import AppIconButton from "../ui/AppIconButton";
import AppText from "../ui/AppText";

interface HomeHeaderProps {
  userName: string;
  address: string;
  onNotificationPress: () => void;
}

export default function HomeHeader({
  userName,
  address,
  onNotificationPress,
}: HomeHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <View style={styles.locationContent}>
          <View style={styles.locationIcon}>
            <Feather name="map-pin" size={18} color={COLORS.primary} />
          </View>

          <View style={styles.locationText}>
            <AppText variant="caption" color={COLORS.textMuted}>
              Livrer à
            </AppText>

            <AppText
              variant="bodySmall"
              color={COLORS.text}
              numberOfLines={1}
              style={styles.addressText}
            >
              {address}
            </AppText>
          </View>
        </View>

        <AppIconButton
          onPress={onNotificationPress}
          icon="bell"
          backgroundColor={COLORS.surface}
        />
      </View>

      <View style={styles.greeting}>
        <AppText variant="h3" color={COLORS.text}>
          Bonjour, {userName} !
        </AppText>

        <AppText color={COLORS.textSecondary} style={styles.subtitle}>
          Que voulez-vous commander aujourd'hui ?
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
  },

  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: SPACING.sm,
  },

  locationContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    minWidth: 0,
  },

  locationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF0EB",
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.sm,
  },

  locationText: {
    flex: 1,
    minWidth: 0,
  },

  addressText: {
    flexShrink: 1,
  },

  greeting: {
    marginTop: SPACING.xxl,
  },

  subtitle: {
    marginTop: SPACING.xs,
  },
});
