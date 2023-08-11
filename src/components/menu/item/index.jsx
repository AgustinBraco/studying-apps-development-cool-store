import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { styles } from './styles.js';
import { COLORS } from '../../../themes';

const MenuItem = ({icon, route, title, onSelect}) => {

	return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => onSelect({route})}>
        <Ionicons name={icon} size={28} color={COLORS.primary}/>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuItem;