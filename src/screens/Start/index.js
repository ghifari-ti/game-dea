import React, { useCallback } from 'react';
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
import {BackgroundLogin} from '../../assets';
import {ButtonForm} from '../../components';
// import SoundPlayer from 'react-native-sound-player';
import { useState } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFocusEffect } from '@react-navigation/core';

// const soundIcon = <FontAwesome5 color={'#0A35DB'} size={20} name={'volume-up'} />;
// const soundOffIcon = <FontAwesome5 color={'#0A35DB'} size={20} name={'volume-off'} />;

const index = ({navigation}) => {
	const [play, setPlay] = useState(true);
	const [statusSoal, setStatusSoal] = useState({
		level_1: 'first',
		level_2: 'first',
		level_3: 'first',
	})
	const [level, setLevel] = useState({
		level_1: 'unlocked',
		level_2: 'locked',
		level_3: 'locked',
	})

	// useEffect( async()=>{
	// 	await refreshStatus();
	// 	return;
	// }, [])

	async function refreshStatus()
	{
		var user_id = JSON.parse(await AsyncStorage.getItem('user_id'));
			//LEVEL 1
			var level1rem = await cekJawaban(1, user_id, "remedial");
			if(level1rem.level == "remedial")
			{
				setStatusSoal({...statusSoal, level_1: 'remedial'})
			}
	
			//LEVEL 2
			let level2rem = await cekJawaban(2, user_id, "remedial");
			if(level2rem.level == "remedial")
			{
				setStatusSoal({...statusSoal, level_2: 'remedial'})
			}
	
			if(level1rem.level == "locked" || level1rem.level == "remedial")
			{
				if(level1rem.level == "locked")
				{
					var level1fir = await cekJawaban(1, user_id, "first");
					if(level1fir.level != 'remedial')
					{
						setLevel({...level, level_2: level1fir.level});
					} else {
						setStatusSoal({...statusSoal, level_1: level1fir.level}) 
					}
				}
				
			} else {
				setLevel({...level, level_2: level1rem.level});
			}
	
			//level 3
			let level3rem = await cekJawaban(3, user_id, "remedial");
			if(level2rem.level == "locked" || level2rem.level == "remedial")
			{
				if(level2rem.level == "locked")
				{
					var level2fir = await cekJawaban(2, user_id, "first");
					console.log(level2fir);
					if(level2fir.level != 'remedial')
					{
						setLevel({...level, level_3: level2fir.level});
					} else {
						setStatusSoal({...statusSoal, level_2: level2fir.level}) 
					}
				}
				
			} else {
				setLevel({...level, level_3: level2rem.level});
			}
	
			
			 
			console.log(level)
			console.log(statusSoal)
	}

	useFocusEffect(
		useCallback(()=>{
			refreshStatus();
		}, [])
	)

	useEffect( async()=>{
		var test = await AsyncStorage.getItem('music')
		console.log(test)
		setPlay(JSON.parse(test));
		return;
	}, [])

	useEffect( async()=>{
		await AsyncStorage.setItem('music', JSON.stringify(play));
	}, [play])

	async function cekJawaban(level, user_id, type)
	{
		try {
			var res = await fetch('https://dea.himti.my.id/api/cekjawaban',{
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				level: level,
				user_id: user_id,
				type: type,
			})
		});
		} catch (e)
		{
			console.log(e);
		}

		return await res.json();
		
	}

	const pauseMusic = async () =>
	{
		// if(!play)
		// {
		// 	SoundPlayer.resume();
		// } else {
		// 	SoundPlayer.pause();
		// }
		setPlay(!play)
	}

	const goToHome = () => {
		// navigation.navigate('Home');
		navigation.goBack();
	};

	
	

	const goToQuiz = (level, status) => {
		navigation.navigate('Quiz', {
			screen: 'Quiz',
			params: {
				level: level,
				status: status
			}
		});
	};
	return (
		<SafeAreaView style={tailwind('h-full')}>
			<View style={tailwind('absolute h-full w-full')}>
				<Image source={BackgroundLogin} />
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
					<TouchableOpacity onPress={() => goToQuiz(1, statusSoal.level_1)} style={tailwind('px-5 mb-3')}>
						<View
							style={tailwind(
								'w-full rounded mt-1 px-2 py-3 bg-white items-center',
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
							{(statusSoal.level_1 == 'remedial')? <View style={tailwind('mt-1')}>
								<Icon name="history" size={20}/>
							</View>: null}
						</View>
					</TouchableOpacity>
					
					{(level.level_2 == 'unlocked')? <TouchableOpacity onPress={() => goToQuiz(2, statusSoal.level_2)} style={tailwind('px-5 mb-3')}>
						<View
							style={tailwind(
								'w-full rounded mt-1 px-2 py-3 bg-white items-center',
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
							{(statusSoal.level_2 == 'remedial')? <View style={tailwind('mt-1')}>
								<Icon name="history" size={20}/>
							</View>: null}
						</View>
					</TouchableOpacity> : <TouchableOpacity style={tailwind('px-5 mb-3')}>
						<View
							style={tailwind(
								'w-full rounded mt-1 px-2 py-6 bg-gray-500 items-center',
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
							{(statusSoal.level_2 == 'remedial')? <View style={tailwind('mt-1')}>
								<Icon name="history" size={20}/>
							</View>: null}
						</View>
					</TouchableOpacity> }


					{(level.level_3 == 'unlocked')? <TouchableOpacity style={tailwind('px-5 mb-3')}>
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
					</TouchableOpacity> : <TouchableOpacity style={tailwind('px-5 mb-3')}>
						<View
							style={tailwind(
								'w-full rounded mt-1 px-2 py-6 bg-gray-500 items-center',
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
					</TouchableOpacity> }
				</View>
			</View>
		</SafeAreaView>
	);
};

export default index;

const styles = StyleSheet.create({});
