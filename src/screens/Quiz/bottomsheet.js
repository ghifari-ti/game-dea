import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useCallback } from 'react';

const BottomSheetComponent = ({bottomSheetRef, handleSheetChanges})=>{

    const snapPoints = useMemo(() => ['0%', '100%'], []);

    return (
        <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
      flex: 1,
      padding: 24,
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
    },
  });

export default BottomSheetComponent;