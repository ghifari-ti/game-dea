import React from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import tailwind from 'tailwind-rn';

const index = ({
	text,
	actionButton,
	txtColor = 'text-black',
	bgColor = 'bg-yellow-300',
}) => {
	const className = `py-3 border border-transparent rounded-xl ${bgColor}`;
	const textClassName = `text-center text-lg font-bold ${txtColor}`;
	return (
		<TouchableOpacity onPress={actionButton} style={tailwind(className)}>
			<Text style={tailwind(textClassName)}>{text}</Text>
		</TouchableOpacity>
	);
};

export default index;

const styles = StyleSheet.create({});
