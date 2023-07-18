import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	input: {
		borderWidth: 2,
		borderRadius: 10,
		height: 50,
		marginVertical: 10,
		paddingLeft: 15,
		paddingRight: 45,
		textAlign: 'center',
		fontSize: 20,
		fontFamily: FONTS.regular,
		overflow: 'hidden',
	},
});
