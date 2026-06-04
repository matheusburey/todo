import { useCallback, useEffect, useState } from "react";
import {
	Text,
	TextInput,
	type TextInputProps,
	TouchableOpacity,
	View,
} from "react-native";
import Icons, { type IconNames } from "./icons";

const inputVariations = {
	error: "#DF1545",
	default: "#F6F6F7",
	focus: "#38085C",
	filled: "#168821",
};

type KeysVariation = keyof typeof inputVariations;

interface InputProps extends TextInputProps {
	label?: string;
	help?: string;
	iconName?: IconNames;
	error?: string | null;
	clearable?: boolean;
	clearableOnPress?: () => void;
}

export default function Input({
	label,
	help,
	iconName,
	secureTextEntry,
	error,
	value,
	clearable,
	clearableOnPress,
	...rest
}: InputProps) {
	const [variation, setVariation] = useState<KeysVariation>("default");
	const [showPassword, setShowPassword] = useState(secureTextEntry);

	const handleInputFocus = useCallback(() => {
		if (!error) {
			setVariation("focus");
		}
	}, [error]);

	const handleInputBlur = useCallback(() => {
		if (!value) {
			setVariation("default");
		} else if (!error) {
			setVariation("filled");
		}
	}, [error, value]);

	const handleClear = useCallback(() => {
		if (clearableOnPress) {
			clearableOnPress();
		}
	}, [clearableOnPress]);

	useEffect(() => {
		if (error) {
			setVariation("error");
		}
	}, [error]);

	return (
		<View className="gap-2 flex-1">
			{label && (
				<Text className="font-body text-sm text-gray-400">{label}</Text>
			)}
			<View
				style={{ borderColor: inputVariations[variation] }}
				className="bg-gray-50 flex-row items-center gap-2 border-2 rounded-lg px-3"
			>
				{iconName && <Icons name={iconName} size={18} />}
				<TextInput
					value={value}
					onBlur={handleInputBlur}
					onFocus={handleInputFocus}
					secureTextEntry={showPassword}
					className="w-[calc(100%-25px)] h-14 text-lg border-0 font-body focus:outline-none"
					placeholderTextColor="#9E9EA7"
					{...rest}
				/>
				{secureTextEntry && (
					<TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
						<Icons name={showPassword ? "eye-slash" : "eye"} size={18} />
					</TouchableOpacity>
				)}
				{clearable && value && (
					<TouchableOpacity className="" onPress={handleClear}>
						<Icons name="times" size={18} />
					</TouchableOpacity>
				)}
			</View>
			{error ? (
				<Text className="font-body text-xs text-red-500">{error}</Text>
			) : (
				help && <Text className="font-body text-xs text-gray-300">{help}</Text>
			)}
		</View>
	);
}
