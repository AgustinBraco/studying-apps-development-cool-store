import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories, Products, ProductDetail } from '../screens';
import { COLORS, FONTS } from '../themes';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SettingsNavigator from './settings';

const Stack = createNativeStackNavigator();

function ShopNavigator() {
	return (
		<Stack.Navigator
			initialRouteName="Categories"
			screenOptions={({ navigation }) => ({
				presentation: 'modal',
				headerStyle: {
					backgroundColor: COLORS.primary,
				},
				headerTitleStyle: {
					fontFamily: FONTS.bold,
					fontSize: 26,
				},
				headerTitleAlign: 'center',
				headerTintColor: COLORS.white,
				animation: 'fade_from_bottom',
				headerRight: () => (
					<TouchableOpacity
						onPress={() => navigation.navigate('SettingsStack')}
					>
						<Ionicons name="settings-outline" size={24} color={COLORS.white} />
					</TouchableOpacity>
				),
			})}
		>
			<Stack.Screen name="Categories" component={Categories} />
			<Stack.Screen
				name="Products"
				component={Products}
				options={({ navigation, route }) => ({
					headerStyle: {
						backgroundColor: route.params.color,
					},
					title: route.params.name,
				})}
			/>
			<Stack.Screen
				name="ProductDetail"
				component={ProductDetail}
				options={({ navigation, route }) => ({
					headerStyle: {
						backgroundColor: route.params.color,
					},
					title: route.params.title,
				})}
			/>
			<Stack.Screen
				name="SettingsStack"
				component={SettingsNavigator}
				options={() => ({
					headerShown: false,
				})}
			/>
		</Stack.Navigator>
	);
}

export default ShopNavigator;
