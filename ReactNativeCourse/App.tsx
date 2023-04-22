import React from "react";
import { StatusBar } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MilesOverviewScreen from "./components/MilesOverviewScreen";
import MealDetailsScreen from "./components/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouritesScreen from "./screens/FavouritesScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faList, faStar } from "@fortawesome/free-solid-svg-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#351401" },
      headerTintColor: "white",
      sceneContainerStyle: { backgroundColor: "#24180f" },
      drawerContentStyle: { backgroundColor: "#351401" },
      drawerInactiveTintColor: "white",
      drawerActiveTintColor: "#e4baa1"
    }}>
    <Drawer.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{
        title: "All Categories",
        drawerIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faList} color={color} size={size} />
        )
      }}
    />
    <Drawer.Screen
      name="Favourites"
      component={FavouritesScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faStar} color={color} size={size} />
        )
      }}
    />
  </Drawer.Navigator>;
};

function App(): JSX.Element {

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#24180f" }
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="MilesOverviewScreen"
            component={MilesOverviewScreen}
          />
          <Stack.Screen
            name="MealDetailsScreen"
            component={MealDetailsScreen}
            options={{
              title: "About the Meal"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
