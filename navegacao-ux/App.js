import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';

export default function App() {
  return (
    <NavigationContainer
      linking={{
        prefixes: ['meuapp://'],
        config: {
          screens: {
            Home: {
              screens: {
                Details: 'details/:id',
              },
            },
          },
        },
      }}
    >
      <TabNavigator />
    </NavigationContainer>
  );
}