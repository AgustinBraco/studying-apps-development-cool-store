import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../themes';

export const styles = StyleSheet.create({
	orderItem: {
		alignItems: 'center',
		backgroundColor: COLORS.primary,
		borderRadius: 10,
		marginVertical: 15,
		padding: 5,
		gap: 5,
		marginHorizontal: 30,
	},
	orderItemText: {
		fontSize: 18,
		color: COLORS.black,
	},
});