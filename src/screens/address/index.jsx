import { View, Text } from 'react-native';
import { styles } from './styles.js';
import LocationSelector from '../../components/location-selector/index.jsx';
import { useState } from 'react';

function Address() {
	const [location, setLocation] = useState(null);
	const onLocation = () => {
		setLocation(location);
	};
	return (
		<View style={styles.container}>
			<LocationSelector onLocation={onLocation} />
		</View>
	);
}

export default Address;
