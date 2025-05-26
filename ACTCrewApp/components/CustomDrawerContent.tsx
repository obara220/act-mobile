import { useEffect } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Text, ScrollView, View, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router, usePathname } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import items from "@/constants/DrawerItems";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import "@/global.css";

function CustomDrawerContent() {
  const insets = useSafeAreaInsets();
  const pathname = usePathname();
  const colorScheme = useColorScheme();
  const colors = colorScheme === "dark" ? Colors.dark : Colors.light;

  useEffect(() => {}, [pathname]);

  return (
    <DrawerContentScrollView
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: colors.primary,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
      }}
    >
      <ScrollView style={{ flex: 1 }}>
        <View className="flex items-start justify-center" style={{ paddingHorizontal: 15 }}>
          <View className="overflow-hidden mt-8">
            <Image
              source={require("@/assets/images/items/logo.png")}
              style={{ width: 150, height: 50 }}
            />
          </View>
          <View style={{ marginTop: 6 }}>
            <Text style={{ color: "white", fontSize: 30 }}>
              ACT S.A.F.E. Mobile — Secure, reliable, and transparent ground
              transportation for pilots.
            </Text>
          </View>
        </View>
        <View className={`border border-[#FFFFFF20] my-4 p-4 flex flex-col items-center rounded-xl mt-24`}>
          <View
            className={`flex flex-row justify-center items-center w-16 h-16 mx-auto p-2 border border-white rounded-full bg-[${colors.purple}]`}
          >
            <Text className="text-xl font-bold color-white">JD</Text>
          </View>
          <Text className="text-2xl color-white my-4 font-normal">
            John Doe
          </Text>
          <Text className="text-lg color-white font-light">Pilot</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          {items.map((item) => {
            return (
              <DrawerItem
                key={item.label}
                onPress={() => {
                  if (item.url.includes('logout'))
                    router.push("/");
                  else 
                    router.push(item.url);
                }}
                label={item.label}
                icon={() => (
                  <Feather
                    name={item.icon}
                    size={24}
                    color="#fff"
                    style={{ marginRight: 10 }}
                  />
                )}
                labelStyle={{
                  color: "#fff",
                  fontWeight: 400,
                  fontSize: 20,
                }}
                style={{
                  justifyContent: "center",
                  backgroundColor:
                    pathname === item.path ? "#2563EB" : "transparent",
                  borderRadius: 6,
                  marginVertical: 2,
                  shadowColor:
                    pathname === item.path ? "#60A5FA" : "transparent",
                  shadowOffset: {
                    width: 0,
                    height: pathname === item.path ? 15 : 0,
                  },
                  shadowOpacity: pathname === item.path ? 0.24 : 0,
                  shadowRadius: pathname === item.path ? 16.41 : 0,
                  elevation: pathname === item.path ? 20 : 0,
                }}
              />
            );
          })}
        </View>
      </ScrollView>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
