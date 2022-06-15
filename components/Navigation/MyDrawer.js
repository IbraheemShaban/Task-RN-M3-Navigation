import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootNavigator } from '.';
import { Cart } from '../Cart';
import { ProductDetails } from '../ProductDetail';
import { ProductsList } from '../ProductsList';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={RootNavigator}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{ drawerLabel: 'Cart' }}
      />
    </Drawer.Navigator>
  );
}
