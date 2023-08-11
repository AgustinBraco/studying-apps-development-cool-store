import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	content: {
		width: '80%',
		maxWidth: 400,
		padding: 15,
		margin: 15,
		backgroundColor: COLORS.white,
		borderWidth: 1,
		borderColor: COLORS.primary,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
		borderRadius: 5,
	},
	header: {
		fontFamily: FONTS.medium,
		fontSize: 20,
		textDecorationColor: 'black',
		textDecorationLine: 'underline',
		textAlign: 'center',
		color: COLORS.text,
		paddingVertical: 10,
	},
	label: {
		fontFamily: FONTS.light,
		fontSize: 16,
		color: COLORS.black,
		paddingLeft: 5,
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
	linkContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
	},
	linkText: {
		fontFamily: FONTS.medium,
		fontSize: 16,
		textAlign: 'center',
		color: COLORS.primary,
	},
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
	},
	button: {
		backgroundColor: COLORS.secondary,
		width: 120,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
	buttonText: {
		fontFamily: FONTS.bold,
		fontSize: 16,
		textAlign: 'center',
		color: COLORS.white,
	},
});
