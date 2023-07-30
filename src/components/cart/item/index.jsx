import { TouchableOpacity, View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles.js';
import { COLORS } from '../../../themes/index.js';


const CartItem = ({
	id,
	name,
	price,
	image,
	currency,
	quantity,
  onIncreaseCartItem,
  onDecreaseCartItem,
  onRemoveCartItem,
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{`${currency.code} ${price}`}</Text>
        <Text style={styles.quantity}>Quantity: {quantity}</Text>
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.increaseButton} onPress={() => onIncreaseCartItem(id)}>
            <Text style={styles.increaseButtonText}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.decreaseButton} onPress={() => onDecreaseCartItem(id)}>
            <Text style={styles.decreaseButtonText}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onRemoveCartItem(id)}>
          <Ionicons style={styles.removeButton} name='trash' size={20} color={COLORS.white} />
        </TouchableOpacity>
        </View>
      </View>
		</View>
	);
};

export default CartItem;
