import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import TransacScreen from "./screens/TransacScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Transacciones Realizadas",
            headerStyle: { backgroundColor: "#111f2a" },
            headerTitleStyle: { color: "#ffffff", marginLeft: 20 },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("TransacScreen")}
              >
                <Text
                  style={{
                    color: "#ffffff",
                    marginRight: 25,
                    textAlign: "center",
                  }}
                >
                  Agregar
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="TransacScreen"
          component={TransacScreen}
          options={{
            title: "Agregar Transaccion",
            headerStyle: { backgroundColor: "#111f2a" },
            headerTitleStyle: { color: "#ffffff", marginLeft: 20 },
            headerTintColor: "#ffffff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
