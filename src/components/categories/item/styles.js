import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../themes';

export const styles = StyleSheet.create({
	itemContainer: {
		borderTopStartRadius: 20,
		borderBottomEndRadius: 20,
		margin: 10,
	},
	imageBackground: {
		height: 150,
		width: '100%',
		justifyContent: 'center',
	},
	imageBackgroundTablet: {
		height: 250,
		width: '100%',
		justifyContent: 'center',
	},
	categoryName: {
		fontSize: 22,
		fontFamily: FONTS.semibold,
		color: COLORS.white,
		padding: 20,
	},
	categoryNameTablet: {
		fontSize: 44,
		fontFamily: FONTS.semibold,
		color: COLORS.white,
		padding: 20,
	},	
});
