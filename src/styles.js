import { StyleSheet } from 'react-native';
import { COLORS } from './themes';

export const styles = StyleSheet.create({
	loaderContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		flex: 1,
		backgroundColor: COLORS.primary,
	},
});
