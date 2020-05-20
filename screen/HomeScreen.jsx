import { MovieDb } from "moviedb-promise";
import React from "react";
import { Dimensions, FlatList, PixelRatio, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import BottomNavigation from "../component/BottomNavigation";
import HomeHeader from "../component/HomeHeader";
import LargePosterWithText from "../component/LargePosterWithText";
import PosterTextListItem from "../component/PosterTextListItem";

const styles = StyleSheet.create({
	container: {},
	popularList: {
		height: Dimensions.get("window").height / 2 - 30,
	},
	title: {
		color: "#0d0749",
		fontSize: 82 / PixelRatio.get(),
		marginHorizontal: 20,
		fontFamily: "opensans-bold",
		marginBottom: 20,
	},
});

export default function HomeScreen({ navigation }) {
	const [populars, setPopulars] = React.useState([]);
	const [trendings, setTrendings] = React.useState([]);
	const [genres, setGenres] = React.useState([]);
	const [loaded, setLoaded] = React.useState(false);

	const moviedb = new MovieDb("");

	React.useEffect(() => {
		async function searchMovies() {
			Promise.all([moviedb.moviePopular(), moviedb.movieNowPlaying(), moviedb.genreMovieList()]).then((values) => {
				setPopulars(values[0].results);
				setTrendings(values[1].results);
				setGenres(values[2].genres);
				setLoaded(true);
			});
		}

		searchMovies();
	}, []);

	const mapGenres = (genre_ids) => {
		if (genres.length < 1) return "";
		return genre_ids
			.map((id) => {
				const g = genres.find((g) => id === g.id);
				return g.name || "Unknown";
			})
			.join(", ");
	};

	const onTitlePress = () => navigation.navigate("SeatsChoose");

	if (!loaded)
		return (
			<View>
				<Text>Loading</Text>
			</View>
		);

	return (
		<>
			<ScrollView style={styles.container}>
				<StatusBar backgroundColor="#f1f1f1" barStyle="dark-content" />
				<HomeHeader />
				<FlatList
					showsHorizontalScrollIndicator={false}
					horizontal={true}
					style={styles.popularList}
					data={populars}
					renderItem={({ item }) => <LargePosterWithText {...item} />}
					keyExtractor={(item) => item.id.toString()}
				/>
				<Text style={styles.title} onPress={onTitlePress}>
					Trending
				</Text>
				<View>
					{trendings.length > 0 &&
						trendings.map((trending) => <PosterTextListItem {...trending} key={trending.id.toString()} genres={mapGenres(trending.genre_ids)} />)}
				</View>
			</ScrollView>
			<BottomNavigation />
		</>
	);
}
