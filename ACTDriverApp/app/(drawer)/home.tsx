import { Text, View, Image, Button, ScrollView } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Link } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";

const HomeScreen = () => {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const colors = colorScheme === "dark" ? Colors.dark : Colors.light;

  const handleGoInfo = () => {
    router.navigate("/driverInfo");
  };

  return (
    <ScrollView
      className="px-5"
      style={{ flex: 1, width: "100%", paddingHorizontal: 15 }}
    >
      <View className="w-full mt-36">
        <Text className={`text-2xl text-[#383E50]`}>
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
        <View className="flex flex-col items-end my-4">
          <Text className="text-3xl mt-1 text-[#383E50]">
            This trip is assigned to the
          </Text>
          <Text className="text-3xl mt-1 text-[#383E50]">
            following{" "}
            <Text className={`text-[#0A7AFF] text-3xl mt-1`}>crew member.</Text>
          </Text>
        </View>
        <View className="w-full mt-3 flex flex-row justify-start items-center border-[1px] border-gray-300 py-3 px-10 rounded-lg">
          <Image
            source={require("@/assets/images/items/avatar.png")}
            style={{ width: 60, height: 60 }}
            alt="avatar"
          />
          <View className="flex flex-col ml-6 my-auto">
            <Text className="text-xl text-bold mb-1 text-[#383E50]">
              Jhon Doe
            </Text>
            <Text className="text-[#383E50] text-base">Pilot</Text>
          </View>
        </View>

        <View className="w-full border-[1px] border-gray-300 p-3 rounded-lg my-5">
          <Link screen="driverInfo" params={{}} style={{ width: "100%" }}>
            <View className="w-full justify-between items-center flex flex-row">
              <Image
                source={require("@/assets/images/items/messages-icon.png")}
                style={{ width: 20, height: 20 }}
                alt="avatar"
              />
              <View className="w-4/5 ml-3 flex flex-row justify-between items-center">
                <Text className="text-[#383E50] text-lg">Chat with Joseph</Text>
                <View className="bg-red-600 rounded-full p-1 w-6 h-6 mr-4">
                  <Text className="text-white text-[11px] ml-[1px]">9+</Text>
                </View>
              </View>
              <AntDesign name="arrowright" size={24} color={colors.text} />
            </View>
          </Link>
        </View>
      </View>
      <View className="w-full h-full flex flex-col flex-1">
        <View className="w-full">
          <Image
            source={require("@/assets/images/items/map.png")}
            style={{ width: "100%", height: 600 }}
            alt="avatar"
          />
        </View>
        <View className="w-full my-5 flex flex-col justify-center border-[1px] border-gray-300 p-3 rounded-lg">
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
      <View className="w-full mb-3 border-[1px] border-gray-300 p-3 rounded-lg bg-[#00AF06] text-white">
        <Link screen="driverInfo" params={{}} style={{ width: "100%" }}>
          <View className="w-[85%] justify-between items-center flex flex-row">
            <Image
              source={require("@/assets/images/items/chart-white.png")}
              style={{ width: 20, height: 20 }}
              alt="avatar"
            />
            <Text className="text-white text-lg w-full ml-3">More Info</Text>
            <AntDesign name="arrowright" size={24} color="white" />
          </View>
        </Link>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
