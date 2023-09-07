import { View, Button, Alert, Text } from 'react-native';
import { styles } from './styles';
import {
	getCurrentPositionAsync,
	requestForegroundPermissionsAsync,
} from 'expo-location';
import { useState } from 'react';
import { COLORS } from '../../themes';
import MapPreview from '../map-preview';

const LocationSelector = ({ onLocation }) => {
	const [pickedLocation, setPickedLocation] = useState(null);

	const verifyPermissions = async () => {
		const { status } = await requestForegroundPermissionsAsync();

		if (status != 'granted') {
			Alert.alert(
				'Insufficient permissions!',
				'Yoy need to grant location permissions to use this app.',
				[{ text: 'Okay' }]
			);
			return false;
		}
		return true;
	};

	const onHandlerGetLocation = async () => {
		const isLocationPermissionGranted = await verifyPermissions();

		if (!isLocationPermissionGranted) return;
		const location = await getCurrentPositionAsync({
			accuracy: 6,
			timeInterval: 5000,
		});

		const { latitude, longitude } = location.coords;

		setPickedLocation({ lat: latitude, lng: longitude });
		onLocation({ lat: latitude, lng: longitude });
	};

	return (
		<View style={styles.container}>
			<MapPreview location={pickedLocation} style={styles.preview}>
				<Text style={styles.text}> No location chosen yet!</Text>
			</MapPreview>
			<Button
				title="Get user location"
				onPress={onHandlerGetLocation}
				color={COLORS.secondary}
			/>
		</View>
	);
};

export default LocationSelector;
