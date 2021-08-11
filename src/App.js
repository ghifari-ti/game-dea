import React from 'react';
import { useEffect } from 'react';
import {View, Text} from 'react-native';
import Navigation from './navigations';
import SoundPlayer from './components/Music';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
	useEffect(async()=>{
		try{
			SoundPlayer.play()
			await AsyncStorage.setItem('music', JSON.stringify(true));
		} catch (e)
		{
			console.log(e)
		}

		return;
	}, [])

	return <Navigation />;
};

export default App;
