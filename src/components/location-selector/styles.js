import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	preview: {
		width: '100%',
		height: 220,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: COLORS.primary,
		borderWidth: 1,
		marginVertical: 15,
	},
	text: {
		fontSize: 14,
		fontFamily: FONTS.medium,
		color: COLORS.black,
	},
	location: {
		fontSize: 14,
		fontFamily: FONTS.bold,
		color: COLORS.black,
	},
});
