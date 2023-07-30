import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles.js';
import { CartItem } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import {
	clearCart,
	decreaseItemQuantity,
	increaseItemQuantity,
	removeItemFromCart,
} from '../../store/cart/cart.slice';
import { useCreateOrderMutation } from '../../store/orders/api';

function Cart({ navigation }) {
	const cart = useSelector((state) => state.cart.items);
	const total = useSelector((state) => state.cart.total);

	const [createOrder, { data, error, isLoading }] = useCreateOrderMutation();

	const dispatch = useDispatch();
	const onIncreaseCartItem = (id) => {
		dispatch(increaseItemQuantity({ id }));
	};

	const onDecreaseCartItem = (id) => {
		dispatch(decreaseItemQuantity({ id }));
	};

	const onRemoveCartItem = (id) => {
		dispatch(removeItemFromCart({ id }));
	};

	function actualDate() {
		const date = new Date();
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const year = date.getFullYear();
		const hours = String(date.getHours()).padStart(2, '0');
		const minutes = String(date.getMinutes()).padStart(2, '0');
		const actualDate = `${day}/${month}/${year} ${hours}:${minutes}`;
		return actualDate;
	};

	const onCreateOrder = async () => {
		const newOrder = {
			id: Math.floor(Math.random() * 1000),
			items: cart,
			total,
			user: {
				id: 1,
				first_name: 'John',
				last_name: 'Doe',
				email: 'johndoe@mail.com',
			},
			payment: {
				method: 'VISA',
			},
			delivery: {
				method: 'UPS',
				trackingNumber: Math.floor(Math.random() * 1000),
			},
			createAt: actualDate(),
			finishedAt: '',
		};

		try {
			await createOrder(newOrder);
			dispatch(clearCart());
			navigation.navigate('OrdersTab');
		} catch (err) {
			console.warn('Catch error:', err);
		};
	};

	if (!cart || cart.length <= 0) {
		return (
			<View style={styles.emptyCart}>
				<Text style={styles.emptyCartText}>Your cart is empty</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={cart}
				renderItem={({ item }) => (
					<CartItem
						{...item}
						onIncreaseCartItem={onIncreaseCartItem}
						onDecreaseCartItem={onDecreaseCartItem}
						onRemoveCartItem={onRemoveCartItem}
					/>
				)}
				keyExtractor={(item) => item.id.toString()}
				style={styles.listContainer}
			/>

			<View style={styles.checkoutContainer}>
				<TouchableOpacity onPress={onCreateOrder} style={styles.checkoutButton}>
					<Text style={styles.checkoutTotal}>Total USD {total}</Text>
					<Text style={styles.checkoutText}>Checkout</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default Cart;
