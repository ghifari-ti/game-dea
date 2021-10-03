import React from 'react';
import BottomSheet, {BottomSheetBackgroundProps} from '@gorhom/bottom-sheet';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColors,
} from 'react-native-reanimated';
import {useRef} from 'react';
import {useMemo} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';
import {TouchableOpacity as RNGHTouchableOpacity} from 'react-native-gesture-handler';
import RenderHTML from 'react-native-render-html';
import {useCallback} from 'react';
import {useEffect} from 'react';
import tailwind from 'tailwind-rn';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CongratsImage, HomeButtonImage} from '../../assets';
import {ButtonForm} from '../../components';

const CongratsSheetComponent = ({
  bottomSheetRef,
  handleSheetChanges,
  countBenar,
  totalSoal,
  nextSoal,
}) => {
  const snapPoints = useMemo(() => ['0%', '100%'], []);
  useEffect(() => {
    return;
  }, []);

  const customBackground = ({style, animatedIndex}) => {
    const animatedBackground = useMemo(
      () =>
        interpolateColors(animatedIndex, {
          inputRange: [0, 1],
          outputColorRange: ['#fff', '#6ba4ff'],
        }),
      [animatedIndex],
    );

    const containerStyle = useMemo(
      () => [
        style,
        {
          backgroundColor: animatedBackground,
        },
      ],
      [style, animatedBackground],
    );

    return <Animated.View style={containerStyle} />;
  };

  return (
    <View style={tailwind('absolute left-0 right-0 top-0 bottom-0')}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundComponent={customBackground}
        enableContentPanningGesture={false}
        enableHandlePanningGesture={false}>
        <View style={tailwind('h-full')}>
          <Text style={tailwind('text-center text-4xl font-bold text-white')}>
            Congratulations!
          </Text>
          <View style={tailwind('flex-row justify-center my-3')}>
            <Image source={CongratsImage} />
          </View>
          <Text style={tailwind('text-center text-4xl font-bold text-white')}>
            Score:
          </Text>
          <Text style={tailwind('text-center text-4xl font-bold text-white')}>
            {countBenar} / {totalSoal}
          </Text>
          <View style={tailwind('flex-row justify-center mt-2')}>
            <View style={tailwind('w-1/2')}>
              <RNGHTouchableOpacity
                onPress={nextSoal}
                style={tailwind(
                  'py-3 border border-transparent rounded-xl bg-yellow-300',
                )}>
                <Text style={tailwind('text-center text-lg font-bold')}>
                  Home
                </Text>
              </RNGHTouchableOpacity>
            </View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default CongratsSheetComponent;
