import { StyleSheet, Text, View } from 'react-native';
import { gap, palette } from '../styles/palette';

export default function ProfileField({ label, value, isLast }) {
  return (
    <View style={[styles.field, !isLast && styles.divider]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    paddingVertical: gap.base,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: palette.line,
  },
  label: {
    color: palette.inkSoft,
    fontSize: 13,
    marginBottom: 4,
  },
  value: {
    color: palette.ink,
    fontSize: 19,
    fontWeight: '700',
  },
});
