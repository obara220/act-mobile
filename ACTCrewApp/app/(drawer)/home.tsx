import { useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { TextInput as Input } from "react-native-paper";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
// import { ScrollView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { Link } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";

const HomeScreen = () => {
  const [errorText, setErrorText] = useState<string | null>(null);
  const colorScheme = useColorScheme();
  const router = useRouter();
  const colors = colorScheme === "dark" ? Colors.dark : Colors.light;

  const handleGoInfo = () => {
    router.navigate("/flightInfo");
  };

  return (
    <ScrollView
      className="px-5 mt-36 w-full"
      style={{ flex: 1, width: "100%", paddingHorizontal: 15 }}
    >
      <View className="w-full mt-5">
        <Input
          placeholder="Search Flight..."
          style={{ backgroundColor: colors.bg_surface }}
          selectionColor={colors.primary}
          cursorColor={colors.primary}
          textColor={colors.text}
          outlineStyle={{
            borderRadius: 24,
            borderWidth: 1,
            borderColor: colors.border,
          }}
          underlineColor="transparent"
          mode="outlined"
          right={<Input.Icon icon="magnify" color={colors.text} />}
        />
        {errorText ? (
          <Text
            style={{ fontSize: 14, color: colors.error, paddingVertical: 4 }}
          >
            {errorText}
          </Text>
        ) : null}
        <Text className={`text-2xl mt-5 text-[#383E50]`}>
          Upcoming Flight Details
        </Text>
        <View className="w-full my-3 flex flex-row justify-between items-center border-b-[1px] border-gray-300 pb-3">
          <View className="flex flex-col p-3 pb-0">
            <Text className="text-base text-left text-[#383E50]">
              Flight Number
            </Text>
            <Text className="text-xl font-bold mt-1 text-left text-[#383E50]">
              2251
            </Text>
          </View>
          <View className="flex flex-col p-3 pb-0 border-gray-300 border-x-[1px]">
            <Text className="text-base text-center text-[#383E50]">
              Departure Time
            </Text>
            <Text className="text-xl font-bold mt-1 text-center text-[#383E50]">
              3:15 PM
            </Text>
          </View>
          <View className="flex flex-col p-3 pb-0">
            <Text className="text-base text-right text-[#383E50]">
              Arrival Time
            </Text>
            <Text className="text-xl font-bold mt-1 text-right text-[#383E50]">
              7:00 PM
            </Text>
          </View>
        </View>
        <View className="flex flex-col items-end">
          <Text className="text-3xl mt-1 text-[#383E50]">
            Your driver is on the way
          </Text>
          <Text className="text-3xl mt-1 text-[#383E50]">
            and will arrive at your
          </Text>
          <Text className="text-3xl mt-1 text-[#383E50]">
            location in approximately
          </Text>
          <Text className={`text-[#0A7AFF] text-3xl mt-1`}>5 minutes.</Text>
        </View>
        <View className="w-full mt-3 flex flex-row justify-start items-center border-[1px] border-gray-300 py-3 px-10 rounded-lg">
          <Image
            source={require("@/assets/images/items/avatar.png")}
            style={{ width: 60, height: 60 }}
            alt="avatar"
          />
          <View className="flex flex-col ml-6 my-auto">
            <Text className="text-xl text-bold mb-1 text-[#383E50]">
              Joseph Smith
            </Text>
            <Text className="text-[#383E50] text-base">
              5+ years driving experience
            </Text>
          </View>
        </View>
        <View className="w-full my-3 border-[1px] border-gray-300 p-3 rounded-lg">
          <Link screen="flightInfo" params={{}}>
            <View className="w-[85%] flex flex-row items-center justify-between">
              <Image source={require("@/assets/images/items/chart-icon.png")} style={{ width: 20, height: 20 }} alt="avatar" />
              <Text className="text-[#383E50] text-lg w-full ml-3">More Info</Text>
              <AntDesign name="arrowright" size={24} color={colors.text} />
            </View>
          </Link>
        </View>
        <View className="w-full border-[1px] border-gray-300 p-3 rounded-lg">
          <Link screen="flightInfo" params={{}}>
            <View className="w-[85%] flex flex-row items-center justify-between">
              <Image source={require("@/assets/images/items/messages-icon.png")} style={{ width: 20, height: 20 }} alt="avatar" />
              <Text className="text-[#383E50] text-lg w-full ml-3">Chat with Joseph</Text>
              <AntDesign name="arrowright" size={24} color={colors.text} />
            </View>
          </Link>
        </View>
      </View>
      <View className="w-full mt-3 h-full flex flex-col flex-1">
        <View className="w-full">
          <Image
            source={require("@/assets/images/items/map.png")}
            style={{ width: "100%", height: 600 }}
            alt="avatar"
          />
        </View>
        <View className="w-full my-3 flex flex-col justify-center border-[1px] border-gray-300 p-3 rounded-lg">
          <View className="flex flex-col justify-center items-center px-5 pb-3">
            <Text className="text-base text-[#383E50]">Destination</Text>
            <Text className="text-xl text-[#383E50]">Hilton Los Angeles</Text>
          </View>
          <View className="flex flex-col justify-center items-center px-5 border-y-[1px] border-gray-300 py-3">
            <Text className="text-base text-[#383E50]">Pickup Location</Text>
            <Text className="text-xl text-[#383E50]">
              Terminal 4, Passager Pickup Zone
            </Text>
          </View>
          <View className="flex flex-col justify-center items-center px-5 pt-3">
            <Text className="text-base text-[#383E50]">
              Estimated Drive Time
            </Text>
            <Text className="text-xl text-[#383E50]">10 minutes</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
