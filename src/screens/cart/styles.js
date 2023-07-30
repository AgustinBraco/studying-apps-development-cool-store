import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	listContainer: {
		flex: 1,
	},
	emptyCart: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	emptyCartText: {
		fontFamily: FONTS.medium,
		fontSize: 16,
	},
	checkoutContainer: {
		backgroundColor: COLORS.white,
		padding: 10,
	},
	checkoutButton: {
		backgroundColor: COLORS.secondary,
		borderRadius: 5,
		paddingHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 50,
	},
	checkoutText: {
		fontSize: 18,
		color: COLORS.white,
		fontFamily: FONTS.bold,
	},
	checkoutTotal: {
		fontSize: 16,
		color: COLORS.white,
		fontFamily: FONTS.semibold,
	},
});
