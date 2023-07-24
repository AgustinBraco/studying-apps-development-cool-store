import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cart/cart.slice.js';

function ProductDetail({navigation, route}){
  const { productId, color } = route.params;
  const products = useSelector((state) => state.products.data)
  const product = products.find(product => product.id === productId);

  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

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