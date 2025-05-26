import { Image, Text, View, ScrollView } from "react-native";

const FlightInfoScreen = () => {
  return (
    <ScrollView>
      <View className="p-4 mt-4">
        <View className="w-full my-3 flex flex-col justify-center items-center border-[1px] border-gray-300 rounded-xl">
          <View className="flex justify-center rounded-b-xl bg-[#0A7AFF] px-8 py-2">
            <Text className="text-base text-white">Driver Information</Text>
          </View>
          <View className="w-full flex flex-row justify-between border-b-[1px] border-gray-300 p-4">
            <Text className="text-base text-[#383E50]">City</Text>
            <Text className="text-base text-[#383E50]">FT Walton</Text>
          </View>
          <View className="w-full flex flex-row justify-between border-b-[1px] border-gray-300 p-4">
            <Text className="text-base text-[#383E50]">Code</Text>
            <Text className="text-base text-[#383E50]">0105</Text>
          </View>
          <View className="w-full flex flex-row justify-between border-b-[1px] border-gray-300 p-4">
            <Text className="text-base text-[#383E50]">DOB</Text>
            <Text className="text-base text-[#383E50]">01/05/1960</Text>
          </View>
          <View className="w-full flex flex-row justify-between border-b-[1px] border-gray-300 p-4">
            <Text className="text-base text-[#383E50]">Hire Date</Text>
            <Text className="text-base text-[#383E50]">11/7/2025</Text>
          </View>
          <View className="w-full flex flex-row justify-between p-4">
            <Text className="text-base text-[#383E50]">TSA Cert</Text>
            <Text className="text-base text-[#383E50]">Yes</Text>
          </View>
        </View>
        <View className="w-full my-3 flex flex-col justify-center items-center border-[1px] border-gray-300 rounded-xl">
          <View className="flex justify-center rounded-b-xl bg-[#0A7AFF] px-8 py-2">
            <Text className="text-base text-white">Vehicle Information</Text>
          </View>
          <View className="flex flex-col p-4 w-full">
            <Image
              source={require("@/assets/images/items/car.png")}
              style={{ width: "100%", height: 300 }}
              resizeMode="contain"
            />
            <Image
              source={require("@/assets/images/items/car-number.png")}
              style={{ width: "auto", height: 100, marginTop: 20 }}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FlightInfoScreen;
