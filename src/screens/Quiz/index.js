import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	useWindowDimensions,
	View,
} from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import tailwind from 'tailwind-rn';
import {BackGroundLogin} from '../../assets';
import {ButtonForm} from '../../components';
import queryString from 'query-string'
import RenderHTML from 'react-native-render-html';
import BottomSheetComponent from './bottomsheet';
import { useCallback } from 'react';
import { useRef } from 'react';

// const soundIcon = <FontAwesome5 color={'#0A35DB'} size={20} name={'volume-up'} />;
// const soundOffIcon = <FontAwesome5 color={'#0A35DB'} size={20} name={'volume-off'} />;

const BoxSoal = ({width, soal})=>{
	return (
								<RenderHTML
								contentWidth={width }
								source={soal}
								/>
	)
}

const index = ({route, navigation}) => {
	const [nomor,setNomor] = useState(0)
	const [listjawab, setListjawab] = useState({})
	const [soal,setSoal] = useState([{
		list_jawaban : "{\"A\": \"hi\", \"B\": \"ww\", \"C\": \"cc\", \"D\": \"gg\"}"
	}]);
	const {width} = useWindowDimensions();
	const bottomSheetRef = useRef(null);
	const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);



	useEffect(async()=>{
		var level = { 'level': route.params.level};
		try {
			var res = await axios.post('https://dea.himti.my.id/api/getsoal',
			queryString.stringify(level),
			{
				headers:{
					"Content-Type": "application/x-www-form-urlencoded"
				}
			})
			var data = res.data
			setSoal(data);
		
			
		} catch(e){
			console.log(e)
		}
		
			
		return
	},[])

	useEffect(()=>{
		var test = JSON.parse(soal[nomor].list_jawaban);
		setListjawab(test)
		console.log(listjawab)
		return;
	},[nomor])
	const goToHome = () => {
		navigation.navigate('Home');
	};

	const goToQuiz = () => {
		navigation.navigate('Quiz');
	};

	const changeNomor = () => {
		bottomSheetRef.current.expand()
		//setNomor(nomor+1);
	}

	return (
		<SafeAreaView style={tailwind('h-full')}>
			<View style={tailwind('absolute h-full w-full')}>
				<Image source={BackGroundLogin} />
			</View>
			<View style={tailwind('px-6 py-4 w-full flex-row justify-between')}>
				<TouchableOpacity onPress={goToHome}>
					<Text style={tailwind('text-white')}>Back</Text>
				</TouchableOpacity>
				<Image style={tailwind('h-11 w-11')} source={require('../../assets/images/logo.png')} />
				<TouchableOpacity>
					<Image source={require('../../assets/images/sound_btn_white.png')} />
				</TouchableOpacity>
			</View>
			<View style={tailwind('w-full my-1 flex-row justify-center')}>
				<View style={tailwind('w-1/2 items-center')}>
					<View
						style={tailwind(
							'w-1/2 py-1 border border-white bg-yellow-300 rounded-xl ',
						)}>
						<Text style={tailwind('text-center')}>{'1 of 10'}</Text>
					</View>
				</View>
			</View>
			<View style={tailwind('flex-row h-1/2 mb-3 justify-center')}>
				<View style={tailwind('w-full h-full px-5')}>
					<View style={tailwind('h-full bg-white relative')}>
						<View
							style={tailwind(
								'w-full rounded px-2 pt-1 bg-white items-center',
							)}>
							<View
								style={tailwind(
									'w-3/4 rounded-xl px-2 py-1 bg-yellow-600',
								)}>
								<Text
									style={tailwind('text-sm text-white font-bold text-center')}>
                  Level 1
								</Text>
							</View>
						</View>
						<ScrollView style={tailwind('relative mx-2 px-2')}>
						<BoxSoal width={width} 
						soal={{html: soal[nomor].soal_text? soal[nomor].soal_text: '<p style=" text-align: center;">Loading</p>'}}/>
						</ScrollView>
					</View>
				</View>
			</View>
			<View style={tailwind('flex-row flex-wrap flex-wrap w-full')}>
				{Object.keys(listjawab).map((key)=> {
					return(
						<TouchableOpacity key={key} onPress={changeNomor} style={tailwind('w-1/2 px-5 mb-3')}>
					<View
						style={tailwind(
							'w-full rounded mt-1 px-2 py-3 bg-white items-center',
						)}>
						<View
							style={tailwind('w-5/6 rounded-xl mt-1 px-1 py-1 bg-yellow-600')}>
							<Text
								style={tailwind('text-sm text-white font-bold text-center')}>
									{listjawab[key]}
							</Text>
						</View>
					</View>
				</TouchableOpacity>
					)
				})}

				
			</View>
			<BottomSheetComponent bottomSheetRef={bottomSheetRef} handleSheetChanges={handleSheetChanges}/>
		</SafeAreaView>
	);
};

export default index;

const styles = StyleSheet.create({});
