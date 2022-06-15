import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer } from './components/Navigation/MyDrawer';

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
