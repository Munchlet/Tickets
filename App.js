import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "@use-expo/font";
import React from "react";
import { Text, View } from "react-native";
import { setCustomText, setCustomTextInput } from "react-native-global-props";
import HomeScreen from "./screen/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
	let [fontsLoaded] = useFonts({
		opensans: require("./assets/fonts/OpenSans-Regular.ttf"),
		"opensans-light": require("./assets/fonts/OpenSans-Light.ttf"),
		"opensans-semibold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
		"opensans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});

	React.useEffect(() => {
		setCustomTextInput({
			style: {
				fontFamily: "opensans",
			},
		});
		setCustomText({
			style: {
				fontFamily: "opensans",
			},
		});
	}, [fontsLoaded]);

	if (!fontsLoaded)
		return (
			<View>
				<Text>Loading</Text>
			</View>
		);

	return (
		<NavigationContainer>
			<Stack.Navigator headerMode="none" options={{ headerShown: false }}>
				<Stack.Screen name="Home" component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
