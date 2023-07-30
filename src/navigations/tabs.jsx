import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopNavigator from './shop.jsx';
import CartNavigator from './cart.jsx';
import OrdersNavigator from './orders.jsx';
import { COLORS, FONTS } from '../themes/index.js';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
	const cartSize = useSelector((state) => state.cart.items).length;

	return (
		<BottomTab.Navigator
			initialRouteName="ShopTab"
			screenOptions={{
				headerShown: false,
				tabBarLabelStyle: {
					fontFamily: FONTS.regular,
					fontSize: 14,
				},
				tabBarStyle: {
					backgroundColor: COLORS.white,
				},
				tabBarActiveTintColor: COLORS.primary,
				tabBarInactiveTintColor: COLORS.grey,
				tabBarIconStyle: {
					fontSize: 22,
				},
			}}
		>
			<BottomTab.Screen
				name="ShopTab"
				component={ShopNavigator}
				options={{
					tabBarLabel: 'Shop',
					tabBarIcon: ({ focused, color }) => (
						<Ionicons
							name={focused ? 'home' : 'home-outline'}
							size={20}
							color={color}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="CartTab"
				component={CartNavigator}
				options={{
					tabBarLabel: 'Cart',
					tabBarIcon: ({ focused, color }) => (
						<Ionicons
							name={focused ? 'cart' : 'cart-outline'}
							size={20}
							color={color}
						/>
					),
					tabBarBadge: cartSize,
					tabBarBadgeStyle: {
						backgroundColor: COLORS.secondary,
						color: COLORS.white,
						fontFamily: FONTS.regular,
						fontSize: 12,
					},
				}}
			/>
			<BottomTab.Screen
				name="OrdersTab"
				component={OrdersNavigator}
				options={{
					tabBarLabel: 'Orders',
					tabBarIcon: ({ focused, color }) => (
						<Ionicons
							name={focused ? 'list-circle' : 'list-circle-outline'}
							size={20}
							color={color}
						/>
					),
				}}
			/>
		</BottomTab.Navigator>
	);
};

export default TabsNavigator;
