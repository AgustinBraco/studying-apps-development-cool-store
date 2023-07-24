import { FlatList, SafeAreaView, View } from 'react-native';
import { CategoryItem } from '../../components';
import { styles } from './styles.js';
import useOrientation from '../../hooks/useOrientation';
import { ORIENTATION } from '../../constant/orientation.js';
import { useSelector } from 'react-redux';

function Categories({ navigation, route }) {
	const categories = useSelector((state) => state.categories.data);
	const orientation = useOrientation();
	const onSelectCategory = ({ categoryId, color, name }) => {
		navigation.navigate('Products', { categoryId, color, name });
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<FlatList
					showsVerticalScrollIndicator={false}
					style={styles.categoryContainer}
					contentContainerStyle={styles.listCategory}
					data={categories}
					renderItem={({ item }) => (
						<CategoryItem
							{...item}
							onSelectCategory={() =>
								onSelectCategory({
									categoryId: item.id,
									color: item.backgroundColor,
									name: item.name,
								})
							}
							imageBackgroundLandscape={
								orientation === ORIENTATION.LANDSCAPE
									? styles.imageBackgroundLandscape
									: {}
							}
						/>
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</SafeAreaView>
	);
}

export default Categories;
