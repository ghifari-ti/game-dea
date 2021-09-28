import React from 'react';
import BottomSheet, {BottomSheetBackgroundProps} from '@gorhom/bottom-sheet';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColors,
} from 'react-native-reanimated';
import { useRef } from 'react';
import { useMemo } from 'react';
import { Button, ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { TouchableOpacity as RNGHTouchableOpacity } from 'react-native-gesture-handler';
import RenderHTML from 'react-native-render-html';
import { useCallback } from 'react';
import { useEffect } from 'react';
import tailwind from 'tailwind-rn';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomSheetComponent = ({bottomSheetRef, 
  handleSheetChanges, 
  width, penjelasan, 
  is_true, nextSoal})=>{

    const snapPoints = useMemo(() => ['0%', '100%'], []);
    useEffect(()=>{
      console.log(is_true)
      return;
    }, [])


const customBackground = ({style, animatedIndex })=>{
  const animatedBackground = useMemo(() => interpolateColors(animatedIndex, {
    inputRange: [0,1],
    outputColorRange: ['#fff', is_true?'#78c4fa':'#ff0000'],
  }),
  [animatedIndex]);

  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: animatedBackground,
      },
    ],
    [style, animatedBackground]
  );

  return <Animated.View style={containerStyle} />;
}

    return (
        <View style={tailwind('absolute left-0 right-0 top-0 bottom-0')}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundComponent={customBackground}
        enableContentPanningGesture={false}
        enableHandlePanningGesture={false}
      >
        <View style={tailwind('mx-2')}>
          <View>
            <Text style={tailwind('text-white text-4xl font-bold text-center mt-2')}>
              {is_true? 'Correct': 'Incorrect!'}
            </Text>
          </View>
          
          <View>
            <Text style={tailwind('text-center')}>
            {is_true? <Icon name="check" size={80} color="white" />:<Icon name="close" size={80} color="white" />}
            </Text>
          </View>
          <View>
            {is_true? <Text style={tailwind('text-center text-white text-xl font-bold rounded px-5 my-2 bg-blue-400')}>
              Yeay!, You're Great!
            </Text>:
            <Text style={tailwind('text-center text-white text-xl font-bold rounded px-5 my-2 bg-red-400')}>
            Sorry, you're still wrong!
          </Text>}
          </View>
          {is_true? <ScrollView style={tailwind('h-1/2 bg-white p-2 rounded-md')}>
          <RenderHTML 
          contentWidth={width}
          source={penjelasan}
          />
          </ScrollView>: null}
          
          <View style={tailwind('relative items-center mt-5')}>
            <RNGHTouchableOpacity onPress={nextSoal}>
              <View style={tailwind('bg-green-500 px-4 py-2 rounded')}>
                <Text style={tailwind('text-2xl text-white')}>
                  Next
                </Text>
              </View>
              </RNGHTouchableOpacity>
              
          </View>
          
        </View>
      </BottomSheet>
    </View>
    )
}



export default BottomSheetComponent;