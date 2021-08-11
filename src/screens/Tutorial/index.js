import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { useEffect, useState } from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import tailwind from 'tailwind-rn';
import {BackGroundLogin} from '../../assets';
import {ButtonForm} from '../../components';
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
		navigation.goBack();
	};
	return (
		<SafeAreaView style={tailwind('h-full')}>
			<View style={tailwind('absolute h-full w-full')}>
				<Image source={BackGroundLogin} />
			</View>
			<View
				style={tailwind('px-6 py-4 w-full flex-row bg-white justify-between')}>
				<Image style={tailwind('h-12 w-12')} source={require('../../assets/images/logo.png')}/>
				<TouchableOpacity onPress={()=> pauseMusic()}>
					<Image style={tailwind('mt-3')} source={require('../../assets/images/sound_btn_blue.png')}/>
				</TouchableOpacity>
			</View>
			<View style={tailwind('px-6 py-6 w-full flex-row justify-center')}>
				<Text style={tailwind('text-2xl font-bold text-white')}>
          HOW TO USE
				</Text>
			</View>
			<View style={tailwind('h-1/2 w-full justify-center')}>
				<View style={tailwind('px-5 h-full')}>
					<View style={tailwind('w-full rounded-xl p-2 h-full bg-white')}>
						<FlatList 
						data={[
							{key: 1, text: '1. Terdapat 3 level, dimana pemain harus menyelesaikan level 1 terlebih dahulu sebelum melanjutkan level berikutnya'},
							{key: 2, text: '2. Dalam 1 level terdapat 10 soal kuis yang harus pemain jawab'},
							{key: 3, text: '3. Bentuk soal berupa pilihan ganda (a, b, c, d)'},
							{key: 4, text: '4. Tombol (Next) untuk menjawab soal berikutnya'},
							{key: 5, text: '5. Dalam 1 level pemain harus mendapatkan nilai minimal 7 untuk dapat membuka level selanjutnya.'},
							{key: 6, text: '6. Nilai akhir dapat dilihat pada menu (Achievement)'}
						]}
						renderItem={({item})=> <Text style={tailwind('my-1')}>{item.text}</Text>}
						/>
					</View>
				</View>
			</View>
			<View style={tailwind('w-full mt-5 flex-row justify-center')}>
				<View style={tailwind('w-1/2')}>
					<ButtonForm actionButton={(goToHome)} text={'Home'} />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default index;

const styles = StyleSheet.create({});
