import React, { useEffect } from "react";
import Signin from "./src/screens/auth/Signin";
import SignUp from "./src/screens/auth/Signup";
import Splash from "./src/screens/auth/Splash";
import Home from "./src/screens/app/Home";
import Favorites from "./src/screens/app/Favorites";
import Profile from "./src/screens/app/Profile";
import Config from "react-native-config";
import ProductDetails from "./src/screens/app/ProductDetails";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { colors } from "./src/utils/colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === 'Home') {
            icon = focused
            ? require('./src/assets/tabs/bookmark_active.png')
            : require('./src/assets/tabs/bookmark.png');
          } else if (route.name === 'Profile') {
            icon = focused
            ? require('./src/assets/tabs/profile_active.png')
            : require('./src/assets/tabs/profile.png');
          }

          return <Image style={{width: 24, height: 24}} source={icon}/>;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { borderTopColor: colors.lightGray }
      })}
      >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Favorites" component={Favorites}/>
        <Tab.Screen name="Profile" component={Profile}/>
      </Tab.Navigator>
  );
}

const App = () => {

  const isSignedIn = true

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: Config.GOOGLE_WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
    })
  }, [])

  const theme = {
    colors: {
      background: colors.white
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {
            isSigneIn = (
              <>
                <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown: false}}/>
              </>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default React.memo(App)