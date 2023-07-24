import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	containerProduct: {

	},
	productDetailImage: {
		height: 300,
		width: 300,
	},
	containerButton: {
		marginVertical: 10,
	},
	addToCartButton: {
		width: "100%",
		backgroundColor: COLORS.primary,
		padding: 15,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	addToCartText: {
		fontFamily: FONTS.semibold,
		fontSize: 16,
		color: COLORS.white,
	},
});
