import { View, Text, ActivityIndicator, Image, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import useFetch from "@/services/useFetch";
import { movieDetails } from "@/services/api";
import { icons } from "@/constants/icons";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const movieId = Array.isArray(id) ? id[0] : id;
  const {
    data,
    loading: movieLoading,
    error: movieError,
  } = useFetch(() => movieDetails(movieId));

  // console.log("data", data);

  return (
    <View className="flex-1 bg-primary">
      {movieLoading ? (
        <ActivityIndicator
          size={"large"}
          color={"#0000ff"}
          className=" self-center mt-36"
        />
      ) : movieError ? (
        <Text className="mt-10 text-lg text-white self-center">
          {movieError}
        </Text>
      ) : (
        <View className="flex-1 mb-32">
          <Image
            source={{
              uri: data?.poster_path
                ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                : "https://placehold.co/600x400/1a1a1a/ffffff?text=No+Image",
            }}
            className="w-full h-96 bg-gray-100 "
          />
          <View className="px-5">
            <Text className="text-white text-xl mt-5 font-bold uppercase">
              {data?.title}
            </Text>
            {/* release date | duration | language section */}
            <View className="flex-row items-start gap-3">
              <Text className="text-gray-400 text-sm ">
                {data?.release_date ? data?.release_date.split("-")[0] : "2024"}
              </Text>
              <Text className="text-gray-400 text-sm ">PG-13</Text>
              <Text className="text-gray-400 text-sm ">
                {data?.runtime <= 0 ? "2h 46min" : data?.runtime}
              </Text>
            </View>
            {/* rating */}
            <View className=" flex-row items-center mt-3  w-36  h-8 px-2 gap-2 bg-dark-100 rounded">
              <Image source={icons.star} className="w-4 h-4 " />
              <Text className="text-white text-sm font-bold">
                {data?.vote_average ? data?.vote_average : "4.5 "}
                <Text className="text-gray-400">/10 (200K)</Text>
              </Text>
            </View>
            {/* overview */}
            <View className="mt-5 gap-2 ">
              <Text className="text-sm text-gray-100">Overview</Text>
              <Text className="text-gray-300 text-base" >{data?.overview ? data?.overview : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet"}</Text>
            </View>
            {/* visit hom button */}
            <View>
              <TouchableOpacity className="flex-row bg-light-200 justify-center items-center mt-10 py-3 rounded-lg gap-1">
                <Text className="text-primary text-sm font-semibold">Visit Homepage</Text>
                <Image source={icons.arrow} className="w-6 h-4" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default MovieDetails;
