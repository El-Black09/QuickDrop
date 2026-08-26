import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SPACING, TYPOGRAPHY } from '@/theme';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>QuickDrop</Text>

      <Text style={styles.subtitle}>
        Votre livraison, simplement.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.background,
    padding: SPACING.lg,
  },

  title: {
    ...TYPOGRAPHY.h1,
    color: COLORS.primary,
  },

  subtitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    marginTop: SPACING.sm,
  },
});