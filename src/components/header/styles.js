import { StyleSheet, StatusBar } from 'react-native';
import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		backgroundColor: COLORS.primary,
		marginTop: StatusBar.currentHeight,
		height: 50,
		justifyContent: 'space-between',
		marginHorizontal: 15,
		alignItems: 'center',
	},
	headerTitle: {
		fontSize: 24,
		color: COLORS.white,
		fontFamily: FONTS.bold,
	},
});
