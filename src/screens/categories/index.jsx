import { ActivityIndicator, FlatList, View } from 'react-native';
import { CategoryItem } from '../../components';
import { styles } from './styles.js';
import useOrientation from '../../hooks/useOrientation';
import { ORIENTATION } from '../../constant/orientation.js';
import { useGetCategoriesQuery } from '../../store/categories/api';
import { COLORS } from '../../themes';

function Categories({ navigation, route }) {
	const { data, error, isLoading } = useGetCategoriesQuery();
	const orientation = useOrientation();
	const onSelectCategory = ({ categoryId, color, name }) => {
		navigation.navigate('Products', { categoryId, color, name });
	};

	if (isLoading) {
		return (
			<View style={styles.loaderContainer}>
				<ActivityIndicator size="large" color={COLORS.primary} />
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<View style={styles.container}>
				<FlatList
					showsVerticalScrollIndicator={false}
					style={styles.categoryContainer}
					contentContainerStyle={styles.listCategory}
					data={data}
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
		</View>
	);
}

export default Categories;
