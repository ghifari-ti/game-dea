import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import tailwind from 'tailwind-rn';
import {BackGroundLogin} from '../../assets';
import {ButtonForm} from '../../components';

// const soundIcon = <FontAwesome5 color={'#0A35DB'} size={20} name={'volume-up'} />;
// const soundOffIcon = <FontAwesome5 color={'#0A35DB'} size={20} name={'volume-off'} />;

const index = ({navigation}) => {
	const goToHome = () => {
		navigation.navigate('Home');
	};
	return (
		<SafeAreaView style={tailwind('h-full')}>
			<View style={tailwind('absolute h-full w-full')}>
				<Image source={BackGroundLogin} />
			</View>
			<View
				style={tailwind('px-6 py-4 w-full flex-row bg-white justify-between')}>
				<Text>Logo</Text>
				<Text>Icon Sounds</Text>
			</View>
			<View style={tailwind('px-6 py-6 w-full flex-row justify-center')}>
				<Text style={tailwind('text-2xl font-bold text-white')}>
          HOW TO USE
				</Text>
			</View>
			<View style={tailwind('h-1/2 w-full justify-center')}>
				<View style={tailwind('px-5 h-full')}>
					<View style={tailwind('w-full rounded-xl p-2 h-full bg-white')}>
						<Text style={tailwind('text-2xl font-bold')}>HOW TO USE</Text>
					</View>
				</View>
			</View>
			<View style={tailwind('w-full mt-5 flex-row justify-center')}>
				<View style={tailwind('w-1/2')}>
					<ButtonForm actionButton={goToHome} text={'Home'} />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default index;

const styles = StyleSheet.create({});
