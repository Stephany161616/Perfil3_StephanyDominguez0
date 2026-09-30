import { StyleSheet, Text, View } from 'react-native';
import ActionButton from './ActionButton';
import { gap, palette } from '../styles/palette';

export default function ErrorState({ message, onRetry }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>No se pudieron cargar los planetas</Text>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.hint}>Verifica tu conexión a internet y vuelve a intentarlo.</Text>
      <ActionButton label="Volver a intentar" onPress={onRetry} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    padding: gap.huge,
    backgroundColor: palette.canvas,
    gap: gap.small,
  },
  title: {
    color: palette.ink,
    fontSize: 20,
    fontWeight: '800',
  },
  message: {
    color: palette.destroyed,
    fontSize: 14,
  },
  hint: {
    color: palette.inkSoft,
    fontSize: 14,
    marginBottom: gap.base,
  },
});
