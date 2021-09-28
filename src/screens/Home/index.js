import React from 'react';
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import {BackGroundLogin, Congrats} from '../../assets';
import tailwind from 'tailwind-rn';
import {ButtonForm, InputForm} from '../../components';


const index = ({navigation}) => {
	

	const goToTutorial = () => {
		navigation.navigate('Tutorial');
	};
	const goToAchievement = () => {
		navigation.navigate('Achievement');
	};
	const goToStart = () => {
		navigation.navigate('Start');
	};
	return (
		<SafeAreaView style={tailwind('h-full')}>
			<View style={tailwind('h-full flex justify-center items-center')}>
				<Image source={BackGroundLogin} />
			</View>
			
			<View
				style={tailwind(
					'absolute w-full h-full flex justify-center items-center',
				)}>
					<Image source={require('../../assets/images/logo.png')} style={{height: 120, width: 130, marginBottom: 35}}/>
				<View style={tailwind('w-2/3 mb-3')}>
					<ButtonForm actionButton={goToStart} text={'START'} />
				</View>
				<View style={tailwind('w-2/3 mb-3')}>
					<ButtonForm
						actionButton={goToTutorial}
						bgColor={'bg-white'}
						text={'HOW TO USE'}
					/>
				</View>
				<View style={tailwind('w-2/3 mb-5')}>
					<ButtonForm
						actionButton={goToAchievement}
						bgColor={'bg-white'}
						text={'ACHIEVEMENTS'}
					/>
				</View>
				<View style={tailwind('w-2/3 mb-3')}>
					<ButtonForm
						txtColor={'text-white'}
						bgColor={'bg-red-600'}
						text={'EXIT'}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default index;

const styles = StyleSheet.create({});
