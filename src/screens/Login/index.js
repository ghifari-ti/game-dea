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
	const SubmitLogin = () => {
		navigation.navigate('Home');
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
				{/* <View style={tailwind('flex-1')}>
                    <Image source={Congrats}></Image>
                </View> */}
				<View style={tailwind('w-2/3 mb-3')}>
					<InputForm placeholder={'Email'} />
				</View>
				<View style={tailwind('w-2/3 mb-3')}>
					<InputForm placeholder={'Password'} />
				</View>
				<View style={tailwind('w-2/3 mb-3')}>
					<ButtonForm actionButton={SubmitLogin} text={'Sign In'} />
				</View>
				<View style={tailwind('w-2/3 mb-10 flex-row items-center')}>
					<View>
						<Text style={tailwind('text-center text-base text-gray-300')}>
              Don't have an account?{' '}
						</Text>
					</View>
					<TouchableOpacity onPress={() => navigation.navigate('Registration')}>
						<Text
							style={tailwind('text-center text-lg font-bold text-yellow-300')}>
							{' '}
              Sign Up
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default index;

const styles = StyleSheet.create({});
