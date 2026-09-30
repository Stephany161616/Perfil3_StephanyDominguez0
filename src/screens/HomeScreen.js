import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileField from '../components/ProfileField';
import ActionButton from '../components/ActionButton';
import useProfile from '../hooks/useProfile';
import { corner, gap, palette } from '../styles/palette';

export default function HomeScreen({ navigation }) {
  const { firstName, rows } = useProfile();

  return (
    <SafeAreaView style={styles.screen} edges={['bottom']}>
      <View style={styles.hero}>
        <SafeAreaView edges={['top']}>
          <Text style={styles.hello}>Hola, soy {firstName}</Text>
          <Text style={styles.caption}>Evaluación de desarrollo móvil, Instituto Técnico Ricaldone</Text>
        </SafeAreaView>
      </View>

      <View style={styles.body}>
        <View style={styles.sheet}>
          {rows.map((row, index) => (
            <ProfileField
              key={row.key}
              label={row.label}
              value={row.value}
              isLast={index === rows.length - 1}
            />
          ))}
        </View>

        <ActionButton label="Explorar planetas" onPress={() => navigation.navigate('Planets')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.canvas,
  },
  hero: {
    backgroundColor: palette.rose,
    paddingHorizontal: gap.large,
    paddingBottom: 70,
    paddingTop: gap.huge,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
  },
  hello: {
    color: palette.paper,
    fontSize: 32,
    fontWeight: '900',
    marginTop: gap.large,
  },
  caption: {
    color: palette.roseSoft,
    fontSize: 15,
    marginTop: gap.tiny,
  },
  body: {
    flex: 1,
    paddingHorizontal: gap.large,
    paddingBottom: gap.large,
    justifyContent: 'space-between',
  },
  sheet: {
    backgroundColor: palette.paper,
    borderRadius: corner.round,
    paddingHorizontal: gap.large,
    marginTop: -44,
    elevation: 3,
    shadowColor: palette.ink,
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
});
