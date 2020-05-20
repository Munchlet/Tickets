import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ClipPath, Defs, LinearGradient, Path, Rect, Stop, Svg } from "react-native-svg";
import Seat from "./Seat";

const styles = StyleSheet.create({
	container: {
		width: Dimensions.get("window").width,
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
	},
});

export default function SeatsView() {
	const [seats] = React.useState([
		[8, 0, 0, 0, 8, 0, 0, 0, 8],
		[0, 0, 0, 0, 8, 0, 0, 0, 0],
		[0, 0, 0, 0, 8, 0, 2, 2, 2],
		[0, 0, 1, 1, 8, 0, 0, 0, 0],
		[0, 0, 0, 0, 8, 0, 1, 0, 0],
		[0, 0, 0, 0, 8, 0, 1, 1, 1],
		[0, 0, 0, 0, 8, 0, 0, 0, 0],
		[8, 0, 0, 0, 8, 0, 0, 0, 8],
	]);

	console.log(Dimensions.get("window").width - 100);

	return (
		<View style={styles.container}>
			<View style={{ backgroundColor: "transparent", alignItems: "center" }}>
				<Svg style={{ backgroundColor: "transparent", zIndex: 1 }} height="100" width={Dimensions.get("window").width}>
					<Defs>
						<LinearGradient id="grad" x1={0} y1={0} x2="0%" y2="90%">
							<Stop offset="0%" stopColor="#fff" stopOpacity="1" />
							<Stop offset="100%" stopColor="#00f" stopOpacity="0" />
						</LinearGradient>
						<ClipPath id="clip">
							<Path d="M82 40 C150 23 250 23, 338 40 L440 200 L0 200" fill="none" stroke="white" strokeWidth={2} />
						</ClipPath>
					</Defs>
					<Path d="M80 40 C150 25 250 25, 340 40" fill="none" stroke="white" strokeWidth={2} />
					<Rect style={{ opacity: 0.4 }} x="0" y="0" width={Dimensions.get("window").width} height="100" fill="url(#grad)" clipPath="url(#clip)" />
				</Svg>
			</View>
			<View>
				{seats.map((seatRow, row) => {
					return (
						<View style={{ flexDirection: "row" }}>
							{seatRow.map((_, col) => (
								<Seat num={seats[row][col]} />
							))}
						</View>
					);
				})}
			</View>
			<View style={{ flexDirection: "row" }}>
				<View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
					<View
						style={{
							backgroundColor: "#01fff7",
							borderRadius: 20,
							height: 18,
							width: 18,
							borderColor: "white",
							borderWidth: 1,
						}}></View>
					<Text style={{ marginLeft: 8, color: "white" }}>Selected</Text>
				</View>
				<View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
					<View style={{ backgroundColor: "#8692ff", borderRadius: 20, height: 18, width: 18, borderColor: "white", borderWidth: 1 }}></View>
					<Text style={{ marginLeft: 8, color: "white" }}>Reserved</Text>
				</View>
				<View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
					<View style={{ borderRadius: 20, height: 18, width: 18, borderColor: "white", borderWidth: 1 }}></View>
					<Text style={{ marginLeft: 8, color: "white" }}>Available</Text>
				</View>
			</View>
		</View>
	);
}
