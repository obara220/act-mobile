import { useState } from "react";
import { Image, Text, View, ScrollView } from "react-native";
import { RadioButton } from "react-native-paper";
import Button from "@/components/Button";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

const DriverInfo = () => {
  const [cleanValue, setCleanValue] = useState("pass");
  const [fluidValue, setFluidValue] = useState("pass");
  
  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <ScrollView>
      <View className="p-4 mt-5">
        <View className="w-full my-3 flex flex-row justify-center items-center border-[1px] border-gray-300 rounded-xl p-3">
          <Image
            source={require("@/assets/images/items/car.png")}
            style={{ width: "60%", height: 150 }}
            resizeMode="contain"
          />
          <Image
            source={require("@/assets/images/items/car-number.png")}
            style={{ width: "40%", height: 100, marginTop: 20 }}
            resizeMode="contain"
          />
        </View>
        <View className="w-full my-3 flex flex-col justify-center items-center border-[1px] border-gray-300 rounded-xl">
          <View className="flex justify-center rounded-b-xl bg-[#0A7AFF] px-8 py-2">
            <Text className="text-base text-white">Safety Check</Text>
          </View>
          <View className="w-full flex flex-col justify-center items-center p-2">
            <Text className="text-5xl text-bold">234</Text>
            <Text className="text-lg mt-2 mb-6">miles</Text>
            <Button primary style={{ border: '1px solid #d1d5db', lineHeight: 0, paddingVertical: 0 }} mode="outlined">
              <Text className={`text-[${colors.primary}]`}>
                Edit
              </Text>
            </Button>
          </View>
        </View>
        <View className="w-full my-3 flex flex-col justify-center items-center border-[1px] border-gray-300 rounded-xl">
          <View className="flex justify-center rounded-b-xl bg-[#0A7AFF] px-8 py-2">
            <Text className="text-base text-white">Safety Check</Text>
          </View>
          <View className="w-full flex flex-row justify-between border-b-[1px] border-gray-300 p-4">
            <Text className="text-base text-[#383E50]">Clean</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setCleanValue(newValue)}
              value={cleanValue}
            >
              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-row items-center justify-between">
                  <RadioButton value="pass" />
                  <Text>Pass</Text>
                </View>
                <View className="flex flex-row items-center justify-between">
                  <RadioButton value="failed" />
                  <Text>Fail</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
          <View className="w-full flex flex-row justify-between border-b-[1px] border-gray-300 p-4">
            <Text className="text-base text-[#383E50]">Fluids</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setFluidValue(newValue)}
              value={fluidValue}
            >
              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-row items-center justify-between">
                  <RadioButton value="pass" />
                  <Text>Pass</Text>
                </View>
                <View className="flex flex-row items-center justify-between">
                  <RadioButton value="failed" />
                  <Text>Fail</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DriverInfo;
