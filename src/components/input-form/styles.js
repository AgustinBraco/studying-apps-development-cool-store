import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from "../../themes";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	input: {
		height: 45,
		borderBottomColor: COLORS.primary,
		borderBottomWidth: 2,
		width: '90%',
		fontFamily: FONTS.regular,
		marginBottom: 5,
		paddingLeft: 10,
	},
	errorContainer: {
		alignItems: 'flex-end',
	},
	error: {
		fontSize: 12,
		fontFamily: FONTS.regular,
		color: COLORS.error,
	}
});
