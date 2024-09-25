import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { reactQuestions } from '../config/questionList'
import tw from 'tailwind-react-native-classnames';
import * as Progress from 'react-native-progress';


const Questions = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [quizProgress, setQuizProgress] = useState(reactQuestions.length);

  const progress = (currentQuestionIndex + 1) / quizProgress;

  const handleNext = () => {
    if (currentQuestionIndex === reactQuestions.length - 1) {
      navigation.navigate("Score",{score:score});
    }
    else{
      setSelectedOption(null); // Reset the selected option for the next question
      setIsCorrect(null); // Reset isCorrect for the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  // handle pressed option
  const handleOptionPress = (pressedOption) => {
    setSelectedOption(pressedOption);

    const isAnswerCorrect = reactQuestions[currentQuestionIndex].correctAnswer === pressedOption;

    setIsCorrect(isAnswerCorrect);

    if(isAnswerCorrect){
      setScore((prevScore) => prevScore + 10);
    }
  }

  return (
    <View style={tw`mt-6 p-4`}>
      <View style={tw`flex-row`}>
        <View style={tw`flex-1`}>
          <Progress.Bar
          progress={progress}
          width={null}
          height={20}
          color={"rgb(109, 40, 217)"}
          style={tw`mb-4`}/>
        </View>
      </View>
      <Text style={tw`text-2xl mb-4`}>{reactQuestions[currentQuestionIndex].question}</Text>
      {
        reactQuestions[currentQuestionIndex].options.map((option, index) => (
          <Pressable
            key={index}
            style={tw`border-2 border-purple-500 p-4 my-2 rounded-md ${
              selectedOption === option
              ? isCorrect
                ? "bg-green-200 border-green-500"
                : "bg-red-200 border-red-500"
                : "border-purple-500"
            }`}
            onPress={() => handleOptionPress(option)}
            disabled = {selectedOption}
          >
            <Text style={tw`text-lg`}>{option}</Text>
          </Pressable>
        ))
      }

      <Pressable
        style={tw`bg-purple-700 p-4 rounded-md mt-6`}
        onPress={handleNext}
      >
        <Text style={tw`text-white text-lg text-center font-bold`}>
          {currentQuestionIndex === reactQuestions.length - 1 ? "Finish" : "Next"}
        </Text>
      </Pressable>
    </View>
  )
}

export default Questions

const styles = StyleSheet.create({})
