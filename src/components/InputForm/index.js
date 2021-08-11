import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import tailwind from 'tailwind-rn';

const index = ({placeholder, value, onChangeText, isSecure}) => {
	return (
		<View
			style={tailwind(
				'pl-4 py-2 border border-transparent rounded-xl border border-white rounded-xl bg-white',
			)}>
			<TextInput
				style={tailwind('py-1 text-black')}
				placeholderTextColor='black'
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				secureTextEntry={isSecure}
			/>
		</View>
	);
};

export default index;

const styles = StyleSheet.create({});
