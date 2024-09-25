import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const Splash = ({navigation}) => {
  return (
    <View style={tw`flex-1 items-center`}>
      <Image source={require("../../assets/splashImg.jpg")}
      style={tw.style(tw`h-3/6`, {aspectRatio:1})}/>
      <Text style={tw`text-3xl text-center mb-10`}>Instructions</Text>

      <View style={tw`bg-purple-700 p-2 rounded h-32 w-80 items-center justify-center`}>
        <Text style={tw`text-white text-lg`}>Each Questions have four options</Text>
        <Text style={tw`text-white text-lg`}>Progress should be shown at top</Text>
        <Text style={tw`text-white text-lg`}>Score should be shown at the end</Text>
      </View>

      <Pressable style={tw`bg-purple-700 mt-10 px-4 py-2 rounded`}
      onPress={() => navigation.navigate("Questions")}>
        <Text style={tw`text-white text-2xl`}>Start Quiz</Text>
      </Pressable>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})