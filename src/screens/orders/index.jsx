import { View, FlatList, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles.js';
import { useGetOrdersQuery } from '../../store/orders/api';
import OrderItem from '../../components/order/item/index.jsx';
import { COLORS } from '../../themes/index.js';

function Orders(){
  const {data, error, isLoading} = useGetOrdersQuery();
  
  const renderItem = ({ item }) => <OrderItem {...item}/>;
  const keyExtractor = (item) => item.id.toString();

  if (isLoading) {
		return (
			<View style={styles.loaderContainer}>
				<ActivityIndicator size="large" color={COLORS.primary} />
			</View>
		);
	};
  
  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Orders;