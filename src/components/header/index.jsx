import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../../themes/index.js';

const Header = ({ title, onHandleGoBack }) => {
	return (
		<View style={styles.headerContainer}>
			{title !== 'Categories' ? (
				<TouchableOpacity onPress={onHandleGoBack}>
					<AntDesign name='back' size={28} color={COLORS.white} />
				</TouchableOpacity>
			) : (
				<AntDesign name='back' size={26} color={COLORS.primary} />
			)}

			<Text style={styles.headerTitle}>{title}</Text>
			<AntDesign name='back' size={26} color={COLORS.primary} />
		</View>
	);
};

export default Header;
