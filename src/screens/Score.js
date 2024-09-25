import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { useRoute } from '@react-navigation/native';

const Score = ({navigation}) => {
    const route = useRoute();
    const { score } = route.params;

  return (
    <View style={tw`flex-1 items-center`}>
      <Image source={require("../../assets/win.jpg")}
      style={tw.style(tw`h-3/6`, {aspectRatio:1})}/>
      <Text style={tw`text-4xl text-green-800 font-bold mt-5`}>Congratulations!</Text>
      <Text style={tw`text-2xl mt-10 text-purple-800 font-bold`}>Your Score {score} points</Text>

      <Pressable style={tw`bg-purple-700 mt-10 px-4 py-2 rounded`} onPress={() => navigation.navigate("Splash")}>
        <Text style={tw`text-white text-2xl`} >Play Again</Text>
      </Pressable>
    </View>
  )
}

export default Score

const styles = StyleSheet.create({})