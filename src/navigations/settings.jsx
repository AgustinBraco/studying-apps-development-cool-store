import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Settings, Profile, Address } from '../screens';
import { COLORS, FONTS } from '../themes';

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName='Settings'
			screenOptions={() => ({
				animation: 'fade_from_bottom',
				headerStyle: {
					backgroundColor: COLORS.primary,
				},
				headerTitleStyle: {
					fontFamily: FONTS.bold,
					fontSize: 26,
				},
				headerTitleAlign: 'center',
				headerTintColor: COLORS.white,
			})}
		>
			<Stack.Screen name='Settings' component={Settings} />
			<Stack.Screen name='Profile' component={Profile} />
			<Stack.Screen name='Address' component={Address} />
		</Stack.Navigator>
	);
};

export default SettingsNavigator;
