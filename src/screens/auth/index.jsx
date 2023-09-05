import { View, Text, TouchableOpacity } from 'react-native';
import { useReducer } from 'react';
import { InputForm } from '../../components';
import { styles } from './styles.js';
import { useState } from 'react';
import { COLORS } from '../../themes/index.js';
import {
	useSignInMutation,
	useSignUpMutation,
} from '../../store/auth/api/index.js';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/auth/auth.slice.js';
import { UPDATE_FORM, onInputChange } from '../../utils/form/index.js'

const initialState = {
	email: { value: '', error: '', touched: false, hasError: true }, // true = required
	password: { value: '', error: '', touched: false, hasError: true },
	isFormValid: false,
};

const formReducer = (state, action) => {
	switch (action.type) {
		case UPDATE_FORM:
		const { name, value, hasError, error, touched, isFormValid } = action.data;
		return {
			...state,
			[name] : {
				...state[name],
				value,
				hasError,
				error,
				touched,
			},
			isFormValid,
		};

		default:
			return state;
	}
}

function Auth() {
	const dispatch = useDispatch();
	const [formState, dispatchFormState] = useReducer(formReducer, initialState);
	const [isLogin, setIsLogin] = useState(true);
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');

	const headerTitle = isLogin ? 'Login' : 'Register';
	const buttonTittle = isLogin ? 'Enter' : 'Create';
	const linkText = isLogin ? 'Create account' : 'Already register';

	const [signIn, { data }] = useSignInMutation();
	const [signUp] = useSignUpMutation();

	const onHandlerAuth = async () => {
		try {
			if (isLogin) {
				const result = await signIn({ email: formState.email.value, password: formState.password.value });
				if (result.data) {
					dispatch(setUser(result.data));
				}
			} else {
				await signUp({ email: formState.email.value, password: formState.password.value });
			}
		} catch (err) {
			console.error('Catch error:', err);
		}
	};

	const onHandlerInputChange = ({name, value}) => {
		onInputChange({name, value, dispatch: dispatchFormState, formState});
	}

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.header}>{headerTitle}</Text>

				<InputForm
					placeholder="email@domain.com"
					placeholderTextColor={COLORS.grey}
					autoCapitalize="none"
					autoCorrect={false}
					onChangeText={(text) => onHandlerInputChange({value: text, name: 'email'})}
					value={formState.email.value}
					label='Email'
					error={formState.email.error}
					touched={formState.email.touched}
					hasError={formState.email.hasError}
				></InputForm>

				<InputForm
					placeholder="**********"
					placeholderTextColor={COLORS.grey}
					autoCapitalize="none"
					autoCorrect={false}
					secureTextEntry={true}
					onChangeText={(text) => onHandlerInputChange({value: text, name: 'password'})}
					value={formState.password.value}
					label='Password'
					error={formState.password.error}
					touched={formState.password.touched}
					hasError={formState.password.hasError}
				></InputForm>

				<View style={styles.linkContainer}>
					<TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
						<Text style={styles.linkText}>{linkText}</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.buttonContainer}>
					<TouchableOpacity disabled={!formState.isFormValid} style={!formState.isFormValid ? styles.buttonDissabled : styles.button} onPress={onHandlerAuth}>
						<Text style={styles.buttonText}>{buttonTittle}</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

export default Auth;
