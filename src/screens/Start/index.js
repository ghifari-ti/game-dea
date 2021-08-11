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
import {BackGroundLogin} from '../../assets';
import {ButtonForm} from '../../components';
import SoundPlayer from 'react-native-sound-player';
import { useState } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const soundIcon = <FontAwesome5 color={'#0A35DB'} size={20} name={'volume-up'} />;
// const soundOffIcon = <FontAwesome5 color={'#0A35DB'} size={20} name={'volume-off'} />;

const index = ({navigation}) => {
	const [play, setPlay] = useState(true);

	useEffect( async()=>{
		var test = await AsyncStorage.getItem('music')
		console.log(test)
		setPlay(JSON.parse(test));
		return;
	}, [])

	useEffect( async()=>{
		await AsyncStorage.setItem('music', JSON.stringify(play));
	}, [play])

	const pauseMusic = async () =>
	{
		if(!play)
		{
			SoundPlayer.resume();
		} else {
			SoundPlayer.pause();
		}
		setPlay(!play)
	}

	const goToHome = () => {
		// navigation.navigate('Home');
		navigation.goBack();
	};

	
	

	const goToQuiz = (level) => {
		navigation.navigate('Quiz', {
			screen: 'Quiz',
			params: {
				level: level
			}
		});
	};
	return (
		<SafeAreaView style={tailwind('h-full')}>
			<View style={tailwind('absolute h-full w-full')}>
				<Image source={BackGroundLogin} />
			</View>
			<View style={tailwind('px-6 py-4 w-full flex-row justify-between')}>
				<TouchableOpacity onPress={goToHome}>
					<Image source={require('../../assets/images/back_button.png')} style={{width: 35, height: 35, resizeMode: 'cover'}}/>
					{/* <Text style={tailwind('text-white')}>Back</Text> */}
				</TouchableOpacity>
				<Image source={require('../../assets/images/logo.png')} style={{width: 80, height: 72, resizeMode: 'cover'}}/>
				{/* <Text style={tailwind('text-white')}>Logo</Text> */}
				<TouchableOpacity onPress={() => pauseMusic()}>
					<Image source={require('../../assets/images/sound_btn_white.png')} style={{width: 44, height: 34, resizeMode: 'cover'}}/>
					{/* <Text style={tailwind('text-white')}>Icon Sounds</Text> */}
				</TouchableOpacity>
			</View>
			<View style={tailwind('w-full my-5 flex-row justify-center')}>
				<View style={tailwind('w-1/2')}>
					<ButtonForm text={'TAKE OUR QUIZ'} />
				</View>
			</View>
			<View style={tailwind('flex-row justify-center')}>
				<View style={tailwind('w-1/2')}>
					<TouchableOpacity onPress={() => goToQuiz(1)} style={tailwind('px-5 mb-3')}>
						<View
							style={tailwind(
								'w-full rounded mt-1 px-2 py-6 bg-white items-center',
							)}>
							<View
								style={tailwind(
									'w-3/4 rounded-xl mt-1 px-2 py-1 bg-yellow-600',
								)}>
								<Text
									style={tailwind('text-sm text-white font-bold text-center')}>
                  Level 1
								</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={tailwind('px-5 mb-3')}>
						<View
							style={tailwind(
								'w-full rounded mt-1 px-2 py-6 bg-white items-center',
							)}>
							<View
								style={tailwind(
									'w-3/4 rounded-xl mt-1 px-2 py-1 bg-yellow-600',
								)}>
								<Text
									style={tailwind('text-sm text-white font-bold text-center')}>
                  Level 2
								</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={tailwind('px-5 mb-3')}>
						<View
							style={tailwind(
								'w-full rounded mt-1 px-2 py-6 bg-white items-center',
							)}>
							<View
								style={tailwind(
									'w-3/4 rounded-xl mt-1 px-2 py-1 bg-yellow-600',
								)}>
								<Text
									style={tailwind('text-sm text-white font-bold text-center')}>
                  Level 3
								</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default index;

const styles = StyleSheet.create({});
