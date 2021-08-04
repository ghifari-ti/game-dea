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

// const soundIcon = <FontAwesome5 color={'#0A35DB'} size={20} name={'volume-up'} />;
// const soundOffIcon = <FontAwesome5 color={'#0A35DB'} size={20} name={'volume-off'} />;

const index = ({navigation}) => {
	const goToHome = () => {
		navigation.navigate('Home');
	};

	const goToQuiz = () => {
		navigation.navigate('Quiz');
	};
	return (
		<SafeAreaView style={tailwind('h-full')}>
			<View style={tailwind('absolute h-full w-full')}>
				<Image source={BackGroundLogin} />
			</View>
			<View style={tailwind('px-6 py-4 w-full flex-row justify-between')}>
				<TouchableOpacity onPress={goToHome}>
					<Text style={tailwind('text-white')}>Back</Text>
				</TouchableOpacity>
				<Text style={tailwind('text-white')}>Logo</Text>
				<TouchableOpacity>
					<Text style={tailwind('text-white')}>Icon Sounds</Text>
				</TouchableOpacity>
			</View>
			<View style={tailwind('w-full my-5 flex-row justify-center')}>
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
					<View style={tailwind('h-full bg-white')}>
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
					</View>
				</View>
			</View>
			<View style={tailwind('flex-row flex-wrap flex-wrap w-full')}>
				<TouchableOpacity style={tailwind('w-1/2 px-5 mb-3')}>
					<View
						style={tailwind(
							'w-full rounded mt-1 px-2 py-6 bg-white items-center',
						)}>
						<View
							style={tailwind('w-3/4 rounded-xl mt-1 px-2 py-1 bg-yellow-600')}>
							<Text
								style={tailwind('text-sm text-white font-bold text-center')}>
                Jawaban 1
							</Text>
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={tailwind('w-1/2 px-5 mb-3')}>
					<View
						style={tailwind(
							'w-full rounded mt-1 px-2 py-6 bg-white items-center',
						)}>
						<View
							style={tailwind('w-3/4 rounded-xl mt-1 px-2 py-1 bg-yellow-600')}>
							<Text
								style={tailwind('text-sm text-white font-bold text-center')}>
                Jawaban 2
							</Text>
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={tailwind('w-1/2 px-5 mb-3')}>
					<View
						style={tailwind(
							'w-full rounded mt-1 px-2 py-6 bg-white items-center',
						)}>
						<View
							style={tailwind('w-3/4 rounded-xl mt-1 px-2 py-1 bg-yellow-600')}>
							<Text
								style={tailwind('text-sm text-white font-bold text-center')}>
                Jawaban 3
							</Text>
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={tailwind('w-1/2 px-5 mb-3')}>
					<View
						style={tailwind(
							'w-full rounded mt-1 px-2 py-6 bg-white items-center',
						)}>
						<View
							style={tailwind('w-3/4 rounded-xl mt-1 px-2 py-1 bg-yellow-600')}>
							<Text
								style={tailwind('text-sm text-white font-bold text-center')}>
                Jawaban 4
							</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default index;

const styles = StyleSheet.create({});
