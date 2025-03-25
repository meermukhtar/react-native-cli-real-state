
import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, RefreshControl } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import AppBar from "../components/AppBar";

const posts = [
  {
    id: "1",
    text: "Hello world! This is my first post.",
    image: null,
    time: "10:30 AM",
    date: "March 13, 2025",
  },
  {
    id: "2",
    text: "Beautiful sunset today! 🌅",
    image: "https://images.freeimages.com/images/large-previews/a1b/the-sun-1396604.jpg",
    time: "6:45 PM",
    date: "March 12, 2025",
  },
  {
    id: "3",
    text: "Beautiful sunset today! 🌅",
    image: "https://cdn.creazilla.com/photos/15143401/sunsplash-photo-md.jpeg",
    time: "6:45 PM",
    date: "March 12, 2025",
  },
  {
    id: "4",
    text: "Hello world! This is my first post.",
    image: null,
    time: "10:30 AM",
    date: "March 13, 2025",
  },
  {
    id: "5",
    text: "Beautiful sunset today! 🌅",
    image: "https://i.pinimg.com/originals/30/0c/3f/300c3f11156a0bf2523d3be212ba0859.jpg",
    time: "6:45 PM",
    date: "March 12, 2025",
  },
  {
    id: "6",
    text: "Beautiful sunset today! 🌅",
    image: "https://c.pxhere.com/photos/d1/8d/colourful_colorful_palm_trees_sky_cloud-1410725.jpg!d",
    time: "6:45 PM",
    date: "March 12, 2025",
  },
  {
    id: "7",
    text: "Beautiful sunset today! 🌅",
    image: "https://media.istockphoto.com/id/1227201505/photo/sunsplash.jpg?b=1&s=170667a&w=0&k=20&c=pCEWDugrD4Z-PNd8IAkw_qIBkBEdHZqz9qdlS6-FCy8=",
    time: "6:45 PM",
    date: "March 12, 2025",
  },
  {
    id: "8",
    text: "Hello world! This is my first post.",
    image: null,
    time: "10:30 AM",
    date: "March 13, 2025",
  },
  {
    id: "9",
    text: "Beautiful sunset today! 🌅",
    image: "https://plus.unsplash.com/premium_photo-1691938884993-cd87199d807b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    time: "6:45 PM",
    date: "March 12, 2025",
  },
  {
    id: "10",
    text: "Beautiful sunset today! 🌅",
    image: "https://images.unsplash.com/photo-1741471884167-a2b08fb14a3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    time: "6:45 PM",
    date: "March 12, 2025",
  },
  {
    id: "11",
    text: "Beautiful sunset today! 🌅",
    image: "https://images.unsplash.com/photo-1741017638661-dab7a153f925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    time: "6:45 PM",
    date: "March 12, 2025",
  },
  {
    id: "12",
    text: "Hello world! This is my first post.",
    image: null,
    time: "10:30 AM",
    date: "March 13, 2025",
  },
  {
    id: "13",
    text: "Hello world! This is my first post.",
    image: null,
    time: "10:30 AM",
    date: "March 13, 2025",
  },
  {
    id: "14",
    text: "Beautiful sunset today! 🌅",
    image: "https://images.unsplash.com/photo-1741527383649-b0d7c54d12ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
    time: "6:45 PM",
    date: "March 12, 2025",
  },
  {
    id: "15",
    text: "Beautiful sunset today! 🌅",
    image: "https://plus.unsplash.com/premium_photo-1667428818562-fc8379f23bfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
    time: "6:45 PM",
    date: "March 12, 2025",
  },
  {
    id: "16",
    text: "Hello world! This is my first post.",
    image: null,
    time: "10:30 AM",
    date: "March 13, 2025",
  },
];


const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);

  return (
    <View className="bg-slate-200 p-2 mx-3 my-2 rounded-xl shadow-md">
      {/* Post Header */}
      <View className="flex-row justify-between mb-2">
        <Text className="text-gray-500 text-xs">{post.time} • {post.date}</Text>
        <TouchableOpacity>
          <Icon name="more-vertical" size={20} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Post Content */}
      <View className="flex-row gap-2 items-center mb-2">
      <Image  source={{
          uri: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        }} className="w-10 h-10 rounded-full"/>
        {post.text && <Text className="text-blue-800 text-sm mb-2">{post.text}</Text>}
      </View>
      {post.image && <Image source={{ uri: post.image }} className="w-full h-40 rounded-lg" />}

      {/* Post Actions */}
      <View className="flex-row justify-between mt-3">
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <Icon name="heart" size={20} color={liked ? "red" : "gray"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="message-circle" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="repeat" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="share-2" size={20} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CardsClone = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);
  return (
    // <SafeAreaView>
    
    <View className="flex-1 bg-gray-100 mb-20">
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      <AppBar title={'Post-Card'}/>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
      />
    </View>
    // </SafeAreaView>
  );
};

export default CardsClone;
