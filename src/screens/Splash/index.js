import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import tailwind from 'tailwind-rn';

const index = ({navigation}) => {
	useEffect(() => {
		setInterval(() => {
			navigation.navigate('Login');
		}, 3000);
		return () => {};
	}, [navigation]);
	return (
		<SafeAreaView style={tailwind('h-full')}>
			<View style={tailwind('h-full flex justify-center items-center')}>
				<View style={tailwind('bg-blue-200 w-1/2 px-5 py-5')}>
					<Text style={tailwind('text-blue-800 text-center font-semibold')}>
            Game Puzzle
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default index;

const styles = StyleSheet.create({});
