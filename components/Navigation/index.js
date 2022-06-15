import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import productStore from '../../stores/productStore';
import { Cart } from '../Cart';
import { ProductDetails } from '../ProductDetail';
import { ProductsList } from '../ProductsList';

const { Navigator, Screen } = createStackNavigator();

export function RootNavigator() {
  const navigation = useNavigation();
  return (
    <Navigator
      initialRouteName="ProductsList"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#90d4ed',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Screen name="Cart" component={Cart} />
      <Screen
        name="ProductsList"
        component={ProductsList}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Cart')}
              title="Cart"
              color="#fff"
            />
          ),
        }}
      />
      <Screen
        name="ProductDetail"
        component={ProductDetails}
        options={({ route }) => {
          const { id } = route.params;
          return {
            title: productStore.getProductById(id).name,
          };
        }}
      />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: 'orange',
    height: 52,
    padding: 12,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
