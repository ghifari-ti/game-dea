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
		'username': '',
		'email': '',
		'password': '',
	})
	const onSubmit = ()=>{
		axios.post('http://192.168.1.200/deagamebackend/public/api/register',
			queryString.stringify(fields), {
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				}
			})
			.then((res)=> {
				//console.log(res.data)
				setFields({
					...fields,
					'username': '',
					'email': '',
					'password': '',
				})
				Alert.alert(
					"Berhasil",
					"Akun berhasil dibuat",
					[
						{
							text: "OK"
						}
					]
				)
			})
			.catch((err)=> {
				//console.log(err.response.data)
				var msg = '';
				Object.keys(err.response.data).forEach( key =>{
					msg += err.response.data[key] + '\n';
				})
				Alert.alert(
					"Error!",
					msg,
					[
						{
							text: "OK"
						}
					]
					)
			})
	}

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
				<View style={tailwind('w-2/3 mb-3')}>
					<InputForm placeholder={'Email'} value={fields.email} onChangeText={text => setFields({...fields, 'email': text})}/>
				</View>
				<View style={tailwind('w-2/3 mb-3')}>
					<InputForm placeholder={'Username'} value={fields.username} onChangeText={text => setFields({...fields, 'username': text})}/>
				</View>
				<View style={tailwind('w-2/3 mb-3')}>
					<InputForm placeholder={'Password'} isSecure={true} value={fields.password} onChangeText={text => setFields({...fields, 'password': text})} />
				</View>
				<View style={tailwind('w-2/3 mb-3')}>
					<ButtonForm text={'Sign Up'} actionButton={onSubmit} />
				</View>
				<View style={tailwind('w-2/3 mb-10 flex-row items-center')}>
					<View>
						<Text style={tailwind('text-center text-base text-gray-300')}>
              Do you hxave an account?{' '}
						</Text>
					</View>
					<TouchableOpacity onPress={() => navigation.navigate('Login')}>
						<Text
							style={tailwind('text-center text-lg font-bold text-yellow-300')}>
							{' '}
              Sign In
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default index;

const styles = StyleSheet.create({});
