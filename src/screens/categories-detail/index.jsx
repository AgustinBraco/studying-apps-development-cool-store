import { View, Text, Image } from 'react-native';
import PRODUCTS from '../../constant/data/products.json'
import { styles } from './styles.js';

function ProductDetail({navigation, route}){
  const { productId, color } = route.params;
  const product = PRODUCTS.find(product => product.id === productId);
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productDetailImage} resizeMode='contain'/>
      <Text>{product.description}</Text>
      <Text>UDS {product.price}</Text>
    </View>
  );
};

export default ProductDetail;