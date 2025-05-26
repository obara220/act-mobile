import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import HomeHeaderComponent from "@/components/HomeHeaderComponent";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Dimensions } from "react-native";

function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerRight: () => <DrawerToggleButton tintColor="white" />,
        drawerStyle: {
          width: Dimensions.get("window").width / 1.5,
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="home"
    >
      <Drawer.Screen name="home" options={{ header: (props) => <HomeHeaderComponent {...props} /> }} />
      <Drawer.Screen name="topics" options={{ title: "Topics" }} />
      <Drawer.Screen name="messages" options={{ title: "Messages" }} />
      <Drawer.Screen
        name="notifications"
        options={{ title: "Notifications" }}
      />
      <Drawer.Screen name="bookmarks" options={{ title: "Bookmarks" }} />
      <Drawer.Screen name="profile" options={{ title: "Profile" }} />
    </Drawer>
  );
}

export default Layout;
