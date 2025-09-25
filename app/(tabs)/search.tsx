import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const search = () => {
  const [queryStr, setQueryStr] = React.useState("");
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch,
  } = useFetch(() => fetchMovies({ query: queryStr }));

  useEffect(() => {
    refetch();
  }, [queryStr]);
  return (
    <View className="flex-1 bg-primary  ">
      <Image
        source={images.bg}
        className="flex-1 absolute z-0 self-center w-full"
        resizeMode="cover"
      />
      <View className="  items-center px-5 mb-10">
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        <SearchBar
          placeHolder="search through 300+ movies online..."
          query={queryStr}
          setQuery={setQueryStr}
        />
      </View>
      {/* ==================== */}

      <View className="px-5 mb-5">
        <Text className="text-xl text-white font-bold">
          Search results for {queryStr}
        </Text>
      </View>

      {/* ===================== */}
      {moviesLoading ? (
        <ActivityIndicator
          size={"large"}
          color={"#0000ff"}
          className="mt-10 self-center"
        />
      ) : moviesError ? (
        <Text className="mt-10 text-lg text-white self-center">
          {moviesError}
        </Text>
      ) : (
        <View className="px-5 pb-96">
          <FlatList
            columnWrapperStyle={{
              gap: 10,
              justifyContent: "flex-start",
              paddingRight: 5,
              marginBottom: 10,
            }}
            data={movies}
            keyExtractor={(item, index) =>
              item.id?.toString() ?? index.toString()
            }
            renderItem={({ item }) => <MovieCard {...item} />}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            className="mt-2 pb-32"
          />
        </View>
      )}
    </View>
  );
};

export default search;
