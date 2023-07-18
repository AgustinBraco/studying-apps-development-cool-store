import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		paddingHorizontal: 15,
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	inputIcon: {
		position: 'absolute',
		right: 10,
	},
	contentProductList: {
		paddingTop: 10,
		paddingBottom: 30,
		gap: 20,
	},
	productContainer: {
		width: '45%',
		marginHorizontal: 10,
		padding: 15,
		backgroundColor: COLORS.primary,
		borderTopStartRadius: 20,
		borderBottomEndRadius: 20,
		gap: 10,
		justifyContent: 'space-between',
	},
	productImage: {
		width: '100%',
		height: 100,
	},
	productText: {
		fontSize: 16,
		fontFamily: FONTS.semibold,
		color: COLORS.white,
		textAlign: 'center',
	},
	productPrice: {
		fontSize: 16,
		fontFamily: FONTS.medium,
		color: COLORS.white,
		textAlign: 'center',
	},
	notFound: {
		flex: 1,
		textAlign: 'center',
		fontSize: 22,
		fontFamily: FONTS.regular,
	},
});
