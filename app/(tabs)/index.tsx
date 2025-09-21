import SearchBar from "@/app/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import MovieCard from "../components/MovieCard";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));
  // console.log("movies", movies);
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%" }}
        className="flex-1 px-5"
      >
        <Image source={icons.logo} className="w-12 h-10  mt-20 mb-5 mx-auto" />
        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text className="mt-10 text-lg text-white self-center">
            {moviesError}
          </Text>
        ) : (
          <View className="flex-1 mt-5">
            {/* Search Bar */}
            <SearchBar
              onPress={() => {
                router.push("/search");
              }}
              placeHolder="search for a movie"
            />
            <>
              <Text className="text-white mt-10 mb-2">Latest Movies</Text>
              <FlatList
                scrollEnabled={false}
                data={movies}
                numColumns={3}
                columnWrapperStyle={{ gap: 10 , justifyContent: "flex-start" , paddingRight:5 , marginBottom:10 }}
                keyExtractor={(item, index) =>
                  item.id?.toString() ?? index.toString()
                }
                renderItem={({ item }) => (
                  // <View className="">
                  <MovieCard title={item.title} />
                  // </View>
                )}
                ListEmptyComponent={() => (
                  <Text className="text-white mt-10 self-center">
                    No movies found{" "}
                  </Text>
                )}
                showsVerticalScrollIndicator={false}
                className="mt-2 pb-32"
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
