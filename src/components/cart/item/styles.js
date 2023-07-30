import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../themes';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: 145,
		backgroundColor: COLORS.white,
		padding: 10,
		marginVertical: 5,
		marginHorizontal: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
	},
	imageContainer: {
		maxWidth: 120,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.primary,
		borderRadius: 5,
	},
	image: {
		width: 100,
		height: 100,
	},
	detailContainer: {
		justifyContent: 'space-between',
		maxWidth: 190,
		gap: 5,
	},
	name: {
		fontSize: 13,
		fontFamily: FONTS.regular,
	},
	price: {
		fontSize: 13,
		fontFamily: FONTS.bold,
	},
	quantity: {
		fontSize: 12,
		fontFamily: FONTS.regular,
	},
	actionContainer: {
		gap: 20,
		flexDirection: 'row',
	},
	increaseButton: {
		width: 35,
		height: 35,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.primary,
		borderRadius: 20,
	},
	increaseButtonText: {
		color: COLORS.white,
		fontFamily: FONTS.bold,
		fontSize: 14,
	},
	decreaseButton: {
		width: 35,
		height: 35,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.primary,
		borderRadius: 20,
	},
	decreaseButtonText: {
		color: COLORS.white,
		fontFamily: FONTS.bold,
		fontSize: 14,
	},
	removeButton: {
		textAlign: 'center',
		verticalAlign: 'middle',
		width: 35,
		height: 35,
		backgroundColor: COLORS.primary,
		borderRadius: 20,
	},
});
