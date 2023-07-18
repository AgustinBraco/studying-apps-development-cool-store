import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	categoryContainer: {
		backgroundColor: COLORS.white,
	},
	listCategory: {
		backgroundColor: COLORS.white,
		paddingVertical: 10,
	},
	imageBackgroundLandscape: {
		height: 100,
		width: '100%',
		justifyContent: 'center',
	},
});
