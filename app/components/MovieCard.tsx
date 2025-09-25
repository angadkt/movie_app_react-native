import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { icons } from "@/constants/icons";

const MovieCard = ({ title, id, poster_path, vote_average }: Movie) => {
  const [imageError, setImageError] = React.useState(false);
  return (
    <Link
      href={{
        pathname: "/movies/[id]",
        params: { id: id.toString() },
      }}
      className="flex-1 mb-6"
      asChild
    >
      <TouchableOpacity className="w-[100%] gap-2 mb-6 ">
        <Image
          source={{
            uri: imageError
              ? "https://placehold.co/600x400/1a1a1a/ffffff?text=No+Image"
              : `https://image.tmdb.org/t/p/w500${poster_path}`,
          }}
          className="w-full h-48 rounded-lg  bg-gray-300"
          resizeMode="cover"
          onError={() => setImageError(true)}
        />
        <Text className="text-sm font-bold mt-2 text-white" numberOfLines={1}>
          {title}
        </Text>

        <View className="flex-row   gap-x-1">
          <Image source={icons?.star} className="size-4" />
          <Text className="text-xs text-gray-400">
            {Math.round(vote_average / 2)}
          </Text>
        </View>
        <Text className="text-xs text-gray-400">Action Movie</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
