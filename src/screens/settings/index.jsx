import { View, FlatList } from 'react-native';
import { styles } from './styles.js';
import { MENUS } from '../../constant/data/menus.js';
import { MenuItem } from '../../components/index.js';

function Settings({navigation}) {

	const onSelect = ({route}) => {
		navigation.navigate(route);
	};

	const renderItem = ({item}) => <MenuItem {...item} onSelect={onSelect}/>
	const keyExtractor = (item) => item.id;

	return (
		<View style={styles.container}>
			<FlatList 
				data={MENUS}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
				contentContainerStyle={styles.settingList}
			/>
		</View>
	);
}

export default Settings;
