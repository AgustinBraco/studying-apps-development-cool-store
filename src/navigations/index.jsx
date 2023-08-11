import { NavigationContainer } from '@react-navigation/native';
import TabsNavigator from './tabs.jsx';
import AuthNavigator from './auth.jsx';
import { useSelector } from 'react-redux';

function RootNavigator() {
	const user = useSelector((state) => state.auth.user);

	return (
		<NavigationContainer>
			{user?.localId ? <TabsNavigator /> : <AuthNavigator />}
		</NavigationContainer>
	);
};

export default RootNavigator;
