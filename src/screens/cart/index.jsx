import { View, Text, FlatList } from 'react-native';
import { styles } from './styles.js';
import { CartItem } from '../../components';
import { useSelector } from 'react-redux';

function Cart({}) {

  const cart = useSelector((state) => state.cart.items)

	return (
		<View style={styles.container}>
			<FlatList
        data={cart}
        renderItem={({item}) => <CartItem {...item} />}
        keyExtractor={(item) => item.id.toString()}
        style={styles.listContainer}
      />
		</View>
	);
}

export default Cart;
