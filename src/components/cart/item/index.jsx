import { TouchableOpacity, View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles.js';
import { COLORS } from '../../../themes/index.js';

const CartItem = ({
	id,
	categoryId,
	name,
	price,
	image,
	currency,
	quantity,
	stock,
  ...props
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
          <TouchableOpacity style={styles.increaseButton} onPress={() => {}}>
            <Text style={styles.increaseButtonText}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.decreaseButton} onPress={() => {}}>
            <Text style={styles.decreaseButtonText}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
          <Ionicons style={styles.removeButton} name='trash' size={20} color={COLORS.white} />
        </TouchableOpacity>
        </View>
      </View>
		</View>
	);
};

export default CartItem;
