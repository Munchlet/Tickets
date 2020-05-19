import { Feather } from "@expo/vector-icons";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "white",
		width: Dimensions.get("window").width,
		height: 70,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	icon: {
		flex: 1,
		alignItems: "center",
	},
});

export default function BottomNavigation() {
	return (
		<View style={styles.container}>
			<View style={styles.icon}>
				<Feather name="bookmark" size={20} color="#bfbdc9" />
			</View>
			<View style={styles.icon}>
				<Feather name="film" size={20} color="#2c2850" />
			</View>
			<View style={styles.icon}>
				<Feather name="calendar" size={20} color="#bfbdc9" />
			</View>
		</View>
	);
}
