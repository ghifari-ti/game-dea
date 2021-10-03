import React from 'react';
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import tailwind from 'tailwind-rn';
import {BackgroundLogin, BackGroundLogin} from '../../assets';
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
				<Image source={BackgroundLogin} />
			</View>
			<View
				style={tailwind('px-6 py-4 w-full flex-row bg-white justify-between')}>
				<Image style={tailwind('h-12 w-12')} source={require('../../assets/images/logo.png')}/>
				<TouchableOpacity onPress={()=> pauseMusic()}>
					<Image style={tailwind('mt-3')} source={require('../../assets/images/sound_btn_blue.png')}/>
				</TouchableOpacity>
			</View>
			<View style={tailwind('px-6 my-5  w-full flex-row justify-center')}>
				<Text style={tailwind('text-3xl font-bold text-white')}>
          ACHIEVEMENTS
				</Text>
			</View>
			<View style={tailwind('flex-row justify-center')}>
				<View style={tailwind('w-3/4')}>
					<TouchableOpacity style={tailwind('px-5 mb-3')}>
						<View style={tailwind('w-full rounded bg-white')}>
							<Text style={tailwind('text-xl text-center')}>Level 1</Text>
						</View>
						<View style={tailwind('w-full rounded mt-1 px-2 py-4 bg-white')}>
							<Text style={tailwind('text-3xl font-bold text-center')}>9</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={tailwind('px-5 mb-3')}>
						<View style={tailwind('w-full rounded bg-white')}>
							<Text style={tailwind('text-xl text-center')}>Level 2</Text>
						</View>
						<View style={tailwind('w-full rounded mt-1 px-2 py-4 bg-white')}>
							<Text style={tailwind('text-3xl font-bold text-center')}>7</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={tailwind('px-5 mb-3')}>
						<View style={tailwind('w-full rounded bg-white')}>
							<Text style={tailwind('text-xl text-center')}>Level 3</Text>
						</View>
						<View style={tailwind('w-full rounded mt-1 px-2 py-4 bg-white')}>
							<Text style={tailwind('text-3xl font-bold text-center')}>1</Text>
						</View>
					</TouchableOpacity>
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
