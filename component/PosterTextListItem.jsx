import React from "react";
import { Dimensions, ImageBackground, PixelRatio, StyleSheet, Text, View } from "react-native";
import { AirbnbRating } from "react-native-ratings";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginVertical: 12,
		marginHorizontal: 20,
	},
	poster: {
		borderRadius: 12,
		elevation: 2,
		height: Dimensions.get("window").height / 7,
		width: (Dimensions.get("window").height / 7 / 3) * 2,
	},
	textContainer: {
		paddingLeft: 20,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	title: {
		fontSize: 48 / PixelRatio.get(),
		fontFamily: "opensans-bold",
		color: "#0d0749",
	},
	rating: {
		marginVertical: 8,
	},
	genres: {
		flexDirection: "row",
		fontFamily: "opensans-semibold",
	},
});

export default function PostTextListItem({ title, vote_average, poster_path, genres }) {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.poster}
				source={{ uri: `https://image.tmdb.org/t/p/original/${poster_path}` }}
				resizeMode="cover"
				imageStyle={{ borderRadius: 12 }}
			/>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{title}</Text>
				<AirbnbRating
					showRating={false}
					count={5}
					defaultRating={Math.round((vote_average / 10.0) * 5)}
					size={12}
					starContainerStyle={styles.rating}
				/>
				<Text style={styles.genres}>{genres}</Text>
			</View>
		</View>
	);
}
