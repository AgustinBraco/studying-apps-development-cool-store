import { View, Button } from 'react-native';
import { styles } from './styles.js';
import LocationSelector from '../../components/location-selector/index.jsx';
import { useEffect, useState } from 'react';
import { COLORS } from '../../themes/index.js';
import {
	GOOGLE_CLOUD_API_KEY,
	URL_BASE_GEOCODING,
} from '../../constant/maps/index.js';
import { useUpdateAddressMutation } from '../../store/settings/api';
import { useSelector } from 'react-redux';

const Address = ({ navigation }) => {
	const [location, setLocation] = useState(null);
	const [address, setAddress] = useState(null);
	const [updateAddress] = useUpdateAddressMutation();
	const localId = useSelector((state) => state.auth.user.localId);

	const onLocation = async ({ lat, lng }) => {
		setLocation({ lat, lng });
	};

	const onHandlerUpdateLocatio = () => {
		updateAddress({ localId, address, location });
		navigation.navigate('Settings');
	};

	useEffect(() => {
		if (location) {
			const getGeocoding = async () => {
				const response = await fetch(
					`${URL_BASE_GEOCODING}/json?latlng=${location.lat},${location.lng}&key=${GOOGLE_CLOUD_API_KEY}`
				);
				const data = await response.json();
				if (!data.results) throw new Error('Something went wrong!');
				const address = data.results[0].formatted_address;
				setAddress(address);
			};

			getGeocoding();
		}
	}, [location]);

	return (
		<View style={styles.container}>
			<LocationSelector onLocation={onLocation} />
			<Button
				title="Confirm"
				onPress={onHandlerUpdateLocatio}
				color={COLORS.secondary}
			/>
		</View>
	);
};

export default Address;
