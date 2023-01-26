import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Habit, New } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='habit' component={Habit} />
      <Screen name='new' component={New} />
    </Navigator>
  );
}
