import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
	container: {
		width: 150,
		height: 150,
		backgroundColor: COLORS.white,
		borderColor: COLORS.primary,
		borderWidth: 3,
		borderRadius: 150,
	},
	button: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: 150,
		height: 150,
		borderColor: COLORS.primary,
		borderWidth: 3,
		borderRadius: 150,
	},
});

