import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { gap, palette } from '../styles/palette';

export default function Spinner({ label }) {
  return (
    <View style={styles.wrap}>
      <ActivityIndicator size="large" color={palette.rose} />
      {label ? <Text style={styles.label}>{label}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.canvas,
    gap: gap.small,
  },
  label: {
    color: palette.inkSoft,
    fontSize: 15,
  },
});
