import { View, TouchableOpacity, Image } from 'react-native';
import { Alert } from 'react-native';
import { styles } from './styles.js';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../themes/index.js';
import {
	requestCameraPermissionsAsync,
	launchCameraAsync,
	requestMediaLibraryPermissionsAsync,
	launchImageLibraryAsync,
} from 'expo-image-picker';
import { useState } from 'react';

const ImageSelector = ({ profileImage, onSelect }) => {
	// const verifyPermissions = async () => {
	// 	const { status } = await requestCameraPermissionsAsync();
	// 	if (status !== 'granted') {
	// 		Alert.alert('Permission denied', 'Need grant camera to use this app', [{text: "Ok"}])
	// 		return false;
	// 	};
	// 	return true;
	// };

	// const onHandleTakePhoto = async () => {
	// 	const isCameraPermission = await verifyPermissions();
	// 	if (!isCameraPermission) return;
	// 	const result = await launchCameraAsync({
	// 		allowsEditing: true,
	// 		aspect: [16, 9],
	// 		quality: 0.5,
	// 		base64: true,
	// 	});
	// };

	const [image, setImage] = useState(null);

	const verifyPermissions = async () => {
		const { status } = await requestMediaLibraryPermissionsAsync();
		if (status !== 'granted') {
			Alert.alert('Permission denied', 'Need grant camera to use this app', [
				{ text: 'Ok' },
			]);
			return false;
		}
		return true;
	};

	const onHandleGalery = async () => {
		const isMediaPermission = await verifyPermissions();
		if (!isMediaPermission) return;
		const result = await launchImageLibraryAsync({
			mediaTypes: 'Images',
			allowsEditing: true,
			aspect: [1, 1],
			quality: 0.5,
			base64: true,
		});

		await onSelect({
			uri: result.assets[0].uri,
			base64: result.assets[0].base64,
		});
		setImage(result.assets[0].uri);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={onHandleGalery}>
				{image || profileImage ? (
					<Image
						source={{ uri: image || profileImage }}
						style={styles.image}
						resizeMode="cover"
					/>
				) : (
					<Ionicons name="ios-camera" size={30} color={COLORS.primary} />
				)}
			</TouchableOpacity>
		</View>
	);
};

export default ImageSelector;
