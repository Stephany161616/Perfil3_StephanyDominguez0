import { Pressable, StyleSheet, Text } from 'react-native';
import { corner, gap, palette } from '../styles/palette';

export default function ActionButton({ label, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: palette.rose,
    borderRadius: corner.soft,
    paddingVertical: gap.base,
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.8,
  },
  label: {
    color: palette.paper,
    fontSize: 16,
    fontWeight: '700',
  },
});
