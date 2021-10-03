import React from 'react';
import {
	Alert,
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import {BackgroundLogin, BackGroundLogin, Congrats} from '../../assets';
import tailwind from 'tailwind-rn';
import {ButtonForm, InputForm} from '../../components';
import { useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import AsyncStorage from '@react-native-async-storage/async-storage';

const index = ({navigation}) => {
	const [fields, setFields] = useState({
		'email': '',
		'password': '',
	})

	useState( async()=>{
		var token = await AsyncStorage.getItem('token');
		if(token)
		{
			navigation.navigate('Home');
		}
		return;
	}, [])

	const onSubmit = () => {
		axios.post('https://dea.himti.my.id/api/login',
		queryString.stringify(fields), {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
		}).then( async (res) => {
			console.log(res.data);
			await AsyncStorage.setItem('token', res.data.token);
			await AsyncStorage.setItem('user_id', JSON.stringify(res.data.user_id));
			navigation.navigate('Home');
		}).catch((err)=>{
			console.log(err.response.data)
			Alert.alert("Error!", err.response.data.description, [
				{
					text: 'OK'
				}
			])
		})
	}

	const SubmitLogin = () => {
		//navigation.navigate('Home');
	};
	return (
		<SafeAreaView style={tailwind('h-full')}>
			<View style={tailwind('h-full flex justify-center items-center')}>
				<Image source={BackgroundLogin} />
			</View>
			<View
				style={tailwind(
					'absolute w-full h-full flex justify-center items-center',
				)}>
				{/* <View style={tailwind('flex-1')}>
                    <Image source={Congrats}></Image>
                </View> */}
				<Image source={require('../../assets/images/logo.png')} style={{height: 120, width: 130, marginBottom: 35}}/>
				<View style={tailwind('w-2/3 mb-3')}>
					<InputForm placeholder={'Email'} value={fields.email} 
					onChangeText={text => setFields({...fields, 'email': text})}/>
				</View>
				<View style={tailwind('w-2/3 mb-3')}>
					<InputForm placeholder={'Password'} isSecure={true} value={fields.password} onChangeText={text => setFields({...fields, 'password': text})}/>
				</View>
				<View style={tailwind('w-2/3 mb-3')}>
					<ButtonForm actionButton={onSubmit} text={'Sign In'} />
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
