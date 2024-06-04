import { NavigationContainer, useTheme, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, // 自訂drawer項目用
} from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Divider, Image, Text, VStack, KeyboardAvoidingView, StatusBar } from '@gluestack-ui/themed';
import { TouchableOpacity, Pressable, Platform } from 'react-native';

import TheTheme from '../theme';
import StatisticsScreen from "../screens/StatisticsScreen"
import NullScreen from "../screens/NullScreen"
import ActionButton from "../components/ActionButton";
import HomeScreen from "../screens/HomeScreen"
import Question1Screen from '../screens/Question1Screen';
import Question2Screen from '../screens/Question2Screen';
import HelpScreen from '../screens/HelpScreen';
import LogoutScreen from "../screens/LogoutScreen"
import GeneralAccountScreen from '../screens/GeneralAccountScreen';
import AuthScreen from "../screens/AuthScreen";
import DiaryScreen from "../screens/DiaryScreen";

import { selectLogin } from "../redux/accountSlice";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// const Navigation = () => {
//   return (
//     <NavigationContainer theme={TheTheme}>
//       <TheDrawer />
//     </NavigationContainer>
//   );
// }

const Navigation = () => {
  const login = useSelector(selectLogin);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.select({ ios: 0, android: -500 })}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      {
        (!login.hasLogin) ?
          <AuthScreen /> :
          (
            <NavigationContainer theme={TheTheme}>
              <TheDrawer />
            </NavigationContainer>
          )
      }
    </KeyboardAvoidingView>
  );
}

/*Drawer專區-起點*/
const TheDrawer = () => { // Drawer導覽編排
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        //headerShown: false,
        // drawerActiveTintColor: colors.primary2,
        drawerInactiveTintColor: colors.character1,
        drawerStyle: { width: 300 },
        drawerLabelStyle: { fontSize: 14 }, // icon旁的文字設定
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          drawerLabel: "首頁",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{
          drawerLabel: "登入",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={24} />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Setting"
        component={GeneralAccountScreen}
        options={{
          headerTransparent: true, // 使 Header 背景透明化
          headerTitle: "", //文字透明化 => 直接不寫標題
          drawerLabel: "設定",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={HelpScreen}
        options={{
          headerTransparent: true, // 使 Header 背景透明化
          headerTitle: "", //文字透明化 => 直接不寫標題
          drawerLabel: "幫助",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="help-circle" color={color} size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          headerTransparent: true, // 使 Header 背景透明化
          headerTitle: "", //文字透明化 => 直接不寫標題
          drawerLabel: "登出",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="logout" color={color} size={24} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props) => { // Drawer頁面排版
  const { colors } = useTheme();

  return (
    <DrawerContentScrollView {...props}
      contentContainerStyle={{ paddingTop: 0 }}
    >
      <VStack mt={40} mb={16} ml={16}>
        <Image
          height={48}
          width={48}
          source={{ uri: "https://i.imgur.com/x0ukH7v.png" }}
          alt='userImage'
        />
        {/*登入後再從 firebase 撈用戶名來用……原本是這麼打算啦*/}
        <Text fontSize={20} color={colors.character1} my={16}>很高興見到你！</Text>
      </VStack>
      <Divider mb={8} />

      {/*Drawer.Screen內容*/}
      <DrawerItemList {...props} />

      {/*自訂Drawer項目：DrawerItem，目前沒放*/}
    </DrawerContentScrollView>
  );
}
/*Drawer專區-終點*/


/*Stack專區-起點*/
const HomeStack = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerTintColor: colors.character1, // 改變返回鍵與 Header 文字的顏色
        //headerShown:false,
      }}
    >
      <Stack.Screen
        name="HomeTab"
        component={TheTab}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Question1"
        component={Question1Screen}
        options={() => ({
          headerTransparent: true, // 使 Header 背景透明化
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={40}
                style={{ color: colors.character1 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Question2"
        component={Question2Screen}
        options={() => ({
          headerTransparent: true, // 使 Header 背景透明化
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={40}
                style={{ color: colors.character1 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Diary"
        component={DiaryScreen}
        options={() => ({
          headerTransparent: true, // 使 Header 背景透明化
          headerTitle: "", //文字透明化 => 直接不寫標題
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="close"
                size={32}
                style={{ color: colors.character1 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
/*Stack專區-終點*/

/*Tab專區-起點*/
const TheTab = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarInactiveTintColor: colors.character2,
        tabBarActiveTintColor: colors.character1,
        //headerShown: false,
        tabBarStyle: { height: 60 },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={32} />
          ),
          headerTransparent: true, // 使 Header 背景透明化
          headerTitle: "", //文字透明化 => 直接不寫標題
          headerLeft: () => (
            <MaterialCommunityIcons
              style={{ marginLeft: 15 }}
              color={colors.character1}
              name={"menu"}
              size={32}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ActionButton"
        component={NullScreen}
        options={{
          headerShown: false,
          tabBarButton: () => <ActionButton />
        }}
      />
      <Tab.Screen
        name="Statistic"
        component={StatisticsScreen}
        options={{
          headerTransparent: true, // 使 Header 背景透明化
          headerTitle: "", //文字透明化 => 直接不寫標題
          headerLeft: () => (
            <MaterialCommunityIcons
              style={{ marginLeft: 15 }}
              color={colors.character1}
              name={"menu"}
              size={32}
              onPress={() => navigation.openDrawer()}
            />
          ),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart-pulse" color={color} size={32} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
/*Tab專區-終點*/

export default Navigation;