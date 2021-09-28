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
import AsyncStorage from '@react-native-async-storage/async-storage';

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
	const [userid, setUserid] = useState(0);
	const [isTrue,setIsTrue] = useState(false)
	const [nomor,setNomor] = useState(0)
	const [listjawab, setListjawab] = useState({})
	const [soal,setSoal] = useState([{
		list_jawaban : "{\"A\": \"loading..\", \"B\": \"loading..\", \"C\": \"loading..\", \"D\": \"loading..\"}"
	}]);
	const [jawaban, setJawaban] = useState([])
	const [totalSoal, setTotalSoal] = useState(0);
	const {width} = useWindowDimensions();
	const bottomSheetRef = useRef(null);
	const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);
	var status = route.params.status
	var level = route.params.level

	useEffect(async()=>{
		var user_id = JSON.parse(await AsyncStorage.getItem('user_id'));
		console.log(status)
		setUserid(user_id);
		console.log(user_id);
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
		var totals = Object.keys(soal).length
		setTotalSoal(totals)
		return;
	},[soal, nomor])
	const goToHome = () => {
		navigation.navigate('Home');
	};

	const goToQuiz = () => {
		navigation.navigate('Quiz');
	};

	const submitJawaban = (jwb) => {
		console.log(jwb + soal[nomor].kunci_jawaban);
		if(jwb == soal[nomor].kunci_jawaban){
			setIsTrue(true);
			setJawaban([...jawaban, {id: soal[nomor].id, is_true: true }])
		} else {
			setIsTrue(false);
			setJawaban([...jawaban, {id: soal[nomor].id, is_true: false }])
		}
		
		bottomSheetRef.current.expand()
		//setNomor(nomor+1);
	}

	const nextSoal = ()=>{
		if((nomor+1) == totalSoal)
		{
			// var test = JSON.stringify({
			// 			level: level,
			// 			user_id: userid,
			// 			type: status,
			// 			list_jawaban: jawaban
			// 		})
			// console.log(test)
			fetch('https://dea.himti.my.id/api/savejawaban', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					level: level,
					user_id: userid,
					type: status,
					list_jawaban: jawaban
				})
			}).then(res => res.text()).then(teks => console.log(teks))
			.catch(err => console.log(err))
			navigation.reset({
				index: 0,
				routes: [{name: 'Start'}]
			})


			return;
		}
		setNomor(nomor+1);
		bottomSheetRef.current.collapse()
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
						<Text style={tailwind('text-center')}>{(nomor+1) +' of ' + totalSoal}</Text>
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
						<TouchableOpacity key={key} onPress={() => submitJawaban(key)} style={tailwind('w-1/2 px-5 mb-3')}>
					<View
						style={tailwind(
							'w-full rounded mt-1 px-2 py-3 bg-white items-center',
						)}>
						<View
							style={tailwind('w-full rounded-xl mt-1 px-1 py-1 bg-yellow-600')}>
							<Text
								style={tailwind('text-sm text-white font-bold text-center')}>
									{key+'.'+listjawab[key]}
							</Text>
						</View>
					</View>
				</TouchableOpacity>
					)
				})}

				
			</View>
			<BottomSheetComponent 
			bottomSheetRef={bottomSheetRef} 
			handleSheetChanges={handleSheetChanges}
			width={width}
			penjelasan={{html: soal[nomor].penjelasan?soal[nomor].penjelasan:'<p>loading</p>'}}
			is_true={isTrue}
			nextSoal={nextSoal}
			/>
		</SafeAreaView>
	);
};

export default index;

const styles = StyleSheet.create({});
