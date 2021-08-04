import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
	AchievementScreen,
	HomeScreen,
	LoginScreen,
	QuizScreen,
	RegistrationScreen,
	SplashScreen,
	StartScreen,
	TutorialScreen,
} from '../screens';

const Stack = createStackNavigator();

const SplashNavigation = () => {
	return (
		<Stack.Navigator initialRouteName={'Splash'}>
			<Stack.Screen
				name="Splash"
				component={SplashScreen}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name="Login"
				component={LoginNavigation}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
	);
};

const HomeNavigation = () => {
	return (
		<Stack.Navigator initialRouteName={'Home'}>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name="Login"
				component={LoginNavigation}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name="Tutorial"
				component={TutorialNavigation}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name="Start"
				component={StartNavigation}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name="Achievement"
				component={AchievementNavigation}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
	);
};

const StartNavigation = () => {
	return (
		<Stack.Navigator initialRouteName={'Start'}>
			<Stack.Screen
				name="Home"
				component={HomeNavigation}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name="Start"
				component={StartScreen}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name="Quiz"
				component={QuizNavigation}
				options={{headerShown: false}}/>

		</Stack.Navigator>
	);
};

const QuizNavigation = () => {
	return (
		<Stack.Navigator initialRouteName={'Quiz'}>
			<Stack.Screen
				name="Quiz"
				component={QuizScreen}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name="Start"
				component={StartScreen}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
	);
};

const TutorialNavigation = () => {
	return (
		<Stack.Navigator initialRouteName={'Tutorial'}>
			<Stack.Screen
				name="Home"
				component={HomeNavigation}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name="Tutorial"
				component={TutorialScreen}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
	);
};

const AchievementNavigation = () => {
	return (
		<Stack.Navigator initialRouteName={'Achievement'}>
			<Stack.Screen
				name="Home"
				component={HomeNavigation}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name="Achievement"
				component={AchievementScreen}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
	);
};

const LoginNavigation = () => {
	return (
		<Stack.Navigator initialRouteName={'Login'}>
			<Stack.Screen
				name="Splash"
				component={SplashNavigation}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name="Login"
				component={LoginScreen}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name="Home"
				component={HomeNavigation}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name="Registration"
				component={RegistrationNavigation}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
	);
};

const RegistrationNavigation = () => {
	return (
		<Stack.Navigator initialRouteName={'Registration'}>
			<Stack.Screen
				name="Splash"
				component={SplashNavigation}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name="Login"
				component={LoginNavigation}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name="Registration"
				component={RegistrationScreen}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
	);
};

const RootNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={'Splash'}>
				<Stack.Screen
					name="Splash"
					component={SplashNavigation}
					options={{headerShown: false}}
				/>
				<Stack.Screen name="Login" component={LoginNavigation} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigation;
