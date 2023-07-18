import { View, TextInput } from 'react-native';
import { styles } from './styles.js';

const Input = ({
	backgroundColor,
	color,
	onHandleBlur,
	onHandleFocus,
	onHandleChangeText,
	...props
}) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				{...props}
				style={[styles.input, { backgroundColor: backgroundColor, borderColor: color, color: color }]}
				onFocus={onHandleFocus}
				onBlur={onHandleBlur}
				onChangeText={onHandleChangeText}
				autoCorrect={false}
				autoCapitalize='none'
				cursorColor={backgroundColor}
			/>
		</View>
	);
};

export default Input;
