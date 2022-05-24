import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import DetailRestaurant from "./screens/DetailRestaurant";
import ApplyFormUser from "./screens/ApplyFormUser";
import HistoryPayments from "./screens/HistoryPayments";
import Payment from "./screens/Payment";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {/*<Navigation colorScheme={colorScheme} />*/}
          <Payment/>
          <StatusBar />
      </SafeAreaProvider>
    );
  }
}
