import {
	TouchableHighlight,
	ImageBackground,
	Text,
	useWindowDimensions,
} from 'react-native';
import { styles } from './styles.js';

const CategoryItem = ({
	id,
	name,
	backgroundColor,
	backgroundImage,
	onSelectCategory,
	imageBackgroundLandscape,
}) => {
	// Mobile: 390 - Tablet: 700
	const { width } = useWindowDimensions();
	const isTablet = width > 700;

	return (
		<TouchableHighlight
			underlayColor="#BBB"
			onPress={() => onSelectCategory(id)}
			style={[styles.itemContainer, { backgroundColor: backgroundColor }]}
		>
			<ImageBackground
				source={{ uri: backgroundImage }}
				style={[styles.imageBackground, imageBackgroundLandscape]}
				resizeMode={isTablet ? 'contain' : 'cover'}
			>
				<Text
					style={isTablet ? styles.categoryNameTablet : styles.categoryName}
				>
					{name}
				</Text>
			</ImageBackground>
		</TouchableHighlight>
	);
};

export default CategoryItem;
