import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories, Products, ProductDetail, Orders } from '../screens';
import { COLORS, FONTS } from '../themes';

const Stack = createNativeStackNavigator();

function ShopNavigator() {
	return (
		<Stack.Navigator
			initialRouteName="Categories"
			screenOptions={{
				presentation: 'modal',
				headerStyle: {
					backgroundColor: COLORS.primary,
				},
				headerTitleStyle: {
					fontFamily: FONTS.bold,
					fontSize: 26,
				},
				headerTintColor: COLORS.white,
				animation: 'fade_from_bottom',
			}}
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
		</Stack.Navigator>
	);
}

export default ShopNavigator;
