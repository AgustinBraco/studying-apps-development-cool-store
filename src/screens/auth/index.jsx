import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';
import { useState } from 'react';
import { COLORS } from '../../themes/index.js';
import {
	useSignInMutation,
	useSignUpMutation,
} from '../../store/auth/api/index.js';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/auth/auth.slice.js';

function Auth() {
	const dispatch = useDispatch();

	const [isLogin, setIsLogin] = useState(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const headerTitle = isLogin ? 'Login' : 'Register';
	const buttonTittle = isLogin ? 'Enter' : 'Create';
	const linkText = isLogin ? 'Create account' : 'Already register';

	const [signIn, { data }] = useSignInMutation();
	const [signUp] = useSignUpMutation();

	const onHandlerAuth = async () => {
		try {
			if (isLogin) {
				const result = await signIn({ email, password });
				if (result.data) {
					dispatch(setUser(result.data))
				};
			} else {
				await signUp({ email, password });
			}
		} catch (err) {
			console.error('Catch error:', err);
		};
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.header}>{headerTitle}</Text>

				<Text style={styles.label}>Email</Text>
				<TextInput
					style={styles.input}
					placeholder="email@domain.com"
					placeholderTextColor={COLORS.grey}
					autoCapitalize="none"
					autoCorrect={false}
					onChangeText={(text) => setEmail(text)}
				></TextInput>

				<Text style={styles.label}>Password</Text>
				<TextInput
					style={styles.input}
					placeholder="**********"
					placeholderTextColor={COLORS.grey}
					autoCapitalize="none"
					autoCorrect={false}
					secureTextEntry={true}
					onChangeText={(text) => setPassword(text)}
				></TextInput>

				<View style={styles.linkContainer}>
					<TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
						<Text style={styles.linkText}>{linkText}</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.button} onPress={onHandlerAuth}>
						<Text style={styles.buttonText}>{buttonTittle}</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

export default Auth;
