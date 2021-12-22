import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Chat from "./Chat";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components";
import Account from "./Account";

const Tab = createMaterialTopTabNavigator();

const Main: React.FC = () => {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.color.primary.main,
          tabBarInactiveTintColor: theme.color.common.gray,
          tabBarIndicatorStyle: {
            backgroundColor: theme.color.primary.main,
            height: 4.5,
          },
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: "bold",
            textTransform: "capitalize",
          },
          tabBarStyle: {
            paddingVertical: 5,
            borderWidth: 0,
            borderBottomWidth: 0,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: -10,
            },
            shadowOpacity: 0.5,
            shadowRadius: 8,
            elevation: 5,
          },
        }}
      >
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Cuenta" component={Account} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Main;
