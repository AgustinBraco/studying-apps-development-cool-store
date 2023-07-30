import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './styles.js';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart/cart.slice.js';
import { useGetProductByIdQuery } from '../../store/products/api';
import { COLORS } from '../../themes/index.js';

function ProductDetail({navigation, route}){
  const { productId } = route.params;
  const { data, isLoading, error } = useGetProductByIdQuery(productId);
  const product = data?.find(product => product.id === productId);

  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (isLoading) {
		return (
			<View style={styles.loaderContainer}>
				<ActivityIndicator size="large" color={COLORS.primary} />
			</View>
		);
	}

  return (
    <View style={styles.container}>
      <View style={styles.containerProduct}>
        <Image source={{ uri: product.image }} style={styles.productDetailImage} resizeMode='contain'/>
        <Text>{product.description}</Text>
        <Text>UDS {product.price}</Text>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity onPress={onAddToCart} style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;