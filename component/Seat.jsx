import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		height: 20,
		width: 20,
		borderRadius: 4,
		margin: 6,
	},
});

export default function Seat({ num }) {
	const [seatStyle, setSeatStyle] = React.useState({
		borderColor: "transparent",
		backgroundColor: "transparent",
		borderWidth: 1,
	});

	React.useEffect(() => {
		switch (num) {
			case 0:
				setSeatStyle({
					borderColor: "white",
					borderWidth: 1,
				});
				break;
			case 2: // selected
				setSeatStyle({
					borderColor: "white",
					backgroundColor: "#01fff7",
					borderWidth: 1,
				});
				break;
			case 1: // reserved
				setSeatStyle({
					borderColor: "white",
					backgroundColor: "#8692ff",
					borderWidth: 1,
				});
				break;
		}
	}, [num]);

	return <View style={[styles.container, { ...seatStyle }]}></View>;
}
