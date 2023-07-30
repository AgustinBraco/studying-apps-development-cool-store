import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles.js';

const OrderItem = ({ id, total, createAt, items }) => {
	return (
    <TouchableOpacity onPress={() => {}} style={styles.orderItem}>
      <Text style={styles.orderItemText}>Order N°{id}</Text>
      <Text style={styles.orderItemText}>{createAt}</Text>
      <Text style={styles.orderItemText}>Products: {items.length}</Text>
      <Text style={styles.orderItemText}>Total: USD {total}</Text>
    </TouchableOpacity>
	);
};

export default OrderItem;