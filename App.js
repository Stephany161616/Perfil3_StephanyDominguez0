import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackRoutes from './src/routes/StackRoutes';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <StackRoutes />
    </SafeAreaProvider>
  );
}
