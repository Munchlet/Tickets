import React from "react";
import { Dimensions, ImageBackground, PixelRatio, StyleSheet, Text, View } from "react-native";
import { AirbnbRating } from "react-native-ratings";

const styles = StyleSheet.create({
	container: {
		width: (Dimensions.get("window").height / 3 / 3) * 2,
		marginHorizontal: 20,
		alignItems: "flex-start",
		overflow: "hidden",
	},
	poster: {
		borderRadius: 12,
		height: Dimensions.get("window").height / 3,
		width: (Dimensions.get("window").height / 3 / 3) * 2,
		elevation: 4,
	},
	title: {
		marginTop: 12,
		fontFamily: "opensans-bold",
		fontSize: 52 / PixelRatio.get(),
		color: "#0d0749",
	},
	rating: {
		marginTop: 4,
	},
});

export default function LargePosterWithText({ title, vote_average, poster_path }) {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.poster}
				source={{ uri: `https://image.tmdb.org/t/p/original/${poster_path}` }}
				resizeMode="cover"
				imageStyle={{ borderRadius: 12 }}
			/>
			<Text numberOfLines={1} style={styles.title}>
				{title}
			</Text>
			<AirbnbRating showRating={false} count={5} defaultRating={Math.round((vote_average / 10.0) * 5)} size={12} starContainerStyle={styles.rating} />
		</View>
	);
}
