import { View, FlatList, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { Input } from '../../components';
import { styles } from './styles.js';
import { COLORS } from '../../themes/index.js';
import { AntDesign } from '@expo/vector-icons';
import { useGetProductsByCategoryQuery } from '../../store/products/api';

function Products({ navigation, route }) {
	const { categoryId, color } = route.params;
	const [search, setSearch] = useState('');
	const [backgroundColor, setBackgroundColor] = useState(COLORS.white);
	const [filteredProducts, setFilteredProducts] = useState([]);

	// const products = useSelector((state) => state.products.data);
	const { data, error, isLoading } = useGetProductsByCategoryQuery(categoryId); 

	const filterBySearch = (query) => {
		let updatedProductList = [...filteredProductsByCategory];
		updatedProductList = updatedProductList.filter((product) => {
			return product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
		});
		setFilteredProducts(updatedProductList);
	};

	const onHandleBlur = () => {
		setBackgroundColor(COLORS.white);
	};

	const onHandleFocus = () => {
		setBackgroundColor(COLORS.background);
	};

	const onHandleChangeText = (text) => {
		setSearch(text);
		filterBySearch(text);
	};

	const onSelectProduct = ({productId, color, title}) => {
		navigation.navigate('ProductDetail', { productId, color, title });
	};

	const filteredProductsByCategory = data?.filter(
		(product) => product.categoryId === categoryId
	);

	if (isLoading) {
		return (
			<View style={styles.loaderContainer}>
				<ActivityIndicator size="large" color={COLORS.primary} />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<Input
					backgroundColor={backgroundColor}
					color={color}
					onHandleBlur={onHandleBlur}
					onHandleFocus={onHandleFocus}
					onHandleChangeText={onHandleChangeText}
					value={search}
					placeholder="Search"
					placeholderTextColor={color}
				/>

				{search.length > 0 && (
					<AntDesign
						name="delete"
						size={30}
						color={color}
						onPress={() => setSearch('')}
						style={styles.inputIcon}
					/>
				)}
			</View>

			<FlatList
				contentContainerStyle={styles.contentProductList}
				numColumns={2}
				showsVerticalScrollIndicator={false}
				data={search.length > 0 ? filteredProducts : filteredProductsByCategory}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => onSelectProduct({productId: item.id, color, title: item.name})}
						style={[styles.productContainer, { backgroundColor: color }]}
					>
						<Image source={{ uri: item.image }} style={styles.productImage} />
						<Text style={styles.productText}>{item.name}</Text>
						<Text style={styles.productPrice}>USD {item.price}</Text>
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.id.toString()}
			/>

			{filteredProducts.length === 0 && search.length > 0 && (
				<Text style={styles.notFound}>Not found</Text>
			)}
		</View>
	);
}

export default Products;
