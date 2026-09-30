import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PlanetsScreen from '../screens/PlanetsScreen';
import { palette } from '../styles/palette';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: palette.canvas,
    card: palette.paper,
    primary: palette.rose,
    text: palette.ink,
    border: palette.line,
  },
};

export default function StackRoutes() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: palette.rose,
          headerTitleStyle: { color: palette.ink, fontWeight: '800' },
          headerShadowVisible: false,
          animation: 'fade_from_bottom',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Planets" component={PlanetsScreen} options={{ title: 'Planetas de Dragon Ball' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
