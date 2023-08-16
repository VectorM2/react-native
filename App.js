// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ForgotPassword from "./src/screens/ForgotPassword";

export default function App() {
  const Stack = createNativeStackNavigator();
  const globalScreenOptions = {
    // headerStyle: { backgroundColor: "#2C6BED" },
    headerStyle: { backgroundColor: "#212121" },
    headerTitleStyle: { color: "white" },
    headerTintColor: "white",
  };
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={globalScreenOptions}
        >
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="Register"
            component={RegisterScreen }
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen }
            options={{ headerShown: false }}
          />
          
         
        </Stack.Navigator>
      </NavigationContainer>
      {/* <StatusBar style="auto" /> */}
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});