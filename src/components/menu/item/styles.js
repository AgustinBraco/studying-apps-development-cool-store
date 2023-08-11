import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../themes';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 10,
		padding: 20,
		marginHorizontal: 25,
		marginTop: 20,
		backgroundColor: COLORS.white,
		borderRadius: 10,
		borderBottomColor: COLORS.primary,
		borderBottomWidth: 3,
	},
	title: {
		fontFamily: FONTS.bold,
		fontSize: 18,
		color: COLORS.black,
	},
});
