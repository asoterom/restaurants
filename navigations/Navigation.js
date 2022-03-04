import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import RestaurantsStack from './RestaurantsStack'
import FavoritesStack from './FavoritesStack'
import AccountStack from './AccountStack'
import TopRestaurantStack from './TopRestaurantStack'
import SearchStack from './SearchStack'

const Tab = createBottomTabNavigator()
 
export default function Navigation() {
  return (
      <NavigationContainer>
          <Tab.Navigator>
                <Tab.Screen
                    name="restaurants"
                    component={RestaurantsStack}
                    options={{title:"Restaurantes"}}
                />
                <Tab.Screen
                    name="favorites"
                    component={FavoritesStack}
                    options={{title:"Favoritos"}}
                />
                <Tab.Screen
                    name="top-restaurant"
                    component={TopRestaurantStack}
                    options={{title:"Top Restaurantes"}}
                />
                <Tab.Screen
                    name="search"
                    component={SearchStack}
                    options={{title:"Buscar"}}
                />
                <Tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{title:"cuenta"}}
                />
          </Tab.Navigator>
      </NavigationContainer>
  )
}