import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import { useFonts } from 'expo-font';
import { COLORS, FONTS } from './themes';
import { styles } from './styles.js';
import RootNavigator from "./navigations/index.jsx"

export default function App() {
	const [loaded] = useFonts({
		[FONTS.bold]: require('../assets/fonts/Comfortaa-Bold.ttf'),
		[FONTS.semibold]: require('../assets/fonts/Comfortaa-SemiBold.ttf'),
		[FONTS.medium]: require('../assets/fonts/Comfortaa-Medium.ttf'),
		[FONTS.regular]: require('../assets/fonts/Comfortaa-Regular.ttf'),
		[FONTS.light]: require('../assets/fonts/Comfortaa-Light.ttf'),
	});

	if (!loaded) {
		return (
			<View style={styles.loaderContainer}>
				<ActivityIndicator color={COLORS.primary} size='large' />
			</View>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<RootNavigator />
		</SafeAreaView>
	);
}