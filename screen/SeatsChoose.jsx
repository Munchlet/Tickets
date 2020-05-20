import { Entypo, Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import React from "react";
import { Dimensions, PixelRatio, StatusBar, StyleSheet, Text, View } from "react-native";
import SeatsView from "../component/SeatsView";

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#3444c5",
		flex: 1,
	},
	seatsView: {
		flex: 2,
	},
	headerView: {
		marginTop: Constants.statusBarHeight,
		flexDirection: "row",
		paddingLeft: 20,
		alignItems: "center",
	},
	headerText: {
		color: "white",
		fontFamily: "opensans-bold",
		marginLeft: 20,
		fontSize: 72 / PixelRatio.get(),
	},
	timingView: {
		flex: 1,
		backgroundColor: "white",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
});

export default function SeatsChoose() {
	const [details, setDetails] = React.useState([
		{
			title: "Jan 26",
			name: "Date",
		},
		{
			title: "20:40",
			name: "Hour",
		},
		{
			title: "6,7,8",
			name: "Seats",
		},
		{
			title: "3",
			name: "Row",
		},
	]);

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#3444c5" barStyle="light-content" />
			<View style={styles.seatsView}>
				<View style={styles.headerView}>
					<Ionicons name="md-arrow-back" size={24} color="white" />
					<Text style={styles.headerText}>Choose Seats</Text>
				</View>
				<SeatsView />
			</View>
			<View style={styles.timingView}>
				<View style={{ flexDirection: "row", paddingLeft: 20, alignItems: "center", marginVertical: 20 }}>
					<Entypo name="location-pin" size={22} color="#160d6f" />
					<Text style={{ color: "#6a697b", fontFamily: "opensans-semibold", marginLeft: 8, fontSize: 46 / PixelRatio.get() }}>Rooftop Film Club</Text>
				</View>
				<View style={{ flexDirection: "row" }}>
					{details.map((detail, i) => {
						return (
							<View
								style={[
									{
										flex: 1,
										justifyContent: "center",
										alignItems: "center",
										borderRadius: 20,
										marginHorizontal: 8,
										padding: 8,
										height: 100,
									},
									i === 2 && {
										backgroundColor: "#e9ebfa",
									},
								]}>
								<Text style={{ fontSize: 62 / PixelRatio.get(), fontFamily: "opensans-bold", color: "#160d6f" }}>{detail.title}</Text>
								<Text style={{ fontSize: 42 / PixelRatio.get(), fontFamily: "opensans-semibold", color: "#6b6980", marginTop: 8 }}>
									{detail.name}
								</Text>
							</View>
						);
					})}
				</View>
				<View
					style={{
						position: "absolute",
						bottom: 0,
						justifyContent: "space-between",
						flexDirection: "row",
						height: Dimensions.get("window").height / 3 / 3,
						flex: 1,
						width: Dimensions.get("window").width,
					}}>
					<View style={{ paddingLeft: 20, flex: 1, justifyContent: "center" }}>
						<Text style={{ fontSize: 42 / PixelRatio.get(), fontFamily: "opensans-semibold", color: "#727185", paddingLeft: 12 }}>Price</Text>
						<Text style={{ fontSize: 82 / PixelRatio.get(), fontFamily: "opensans-bold", color: "#160d6f", paddingLeft: 12 }}>$47.50</Text>
					</View>
					<View
						style={{
							borderTopLeftRadius: 38,
							backgroundColor: "#0d0846",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							flex: 1,
							height: "100%",
						}}>
						<Text style={{ color: "white", fontSize: 82 / PixelRatio.get(), fontFamily: "opensans-semibold" }}>Buy</Text>
						<Ionicons style={{ marginLeft: 20 }} name="ios-arrow-round-forward" size={42} color="white" />
					</View>
				</View>
			</View>
		</View>
	);
}
