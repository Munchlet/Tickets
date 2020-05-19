import { Feather } from "@expo/vector-icons";
import Constants from "expo-constants";
import React from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 20,
		marginTop: Constants.statusBarHeight + 20,
		marginBottom: 40,
	},
	headerText: {
		fontFamily: "opensans-bold",
		fontSize: 82 / PixelRatio.get(),
		color: "#0d0749",
	},
});

export default function HomeHeader() {
	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>Movies</Text>
			<Feather name="search" size={20} color="#0d0749" />
		</View>
	);
}
