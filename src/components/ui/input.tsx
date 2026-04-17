import { useCallback, useEffect, useState } from "react";
import { Text, TextInput, type TextInputProps, View } from "react-native";
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
}

export default function Input({
	label,
	help,
	iconName,
	error,
	value,
	...rest
}: InputProps) {
	const [variation, setVariation] = useState<KeysVariation>("default");

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

	useEffect(() => {
		if (error) {
			setVariation("error");
		}
	}, [error]);

	return (
		<View className="gap-2">
			{label && (
				<Text className="font-body text-sm text-gray-400">{label}</Text>
			)}
			<View
				style={{ borderColor: inputVariations[variation] }}
				className="bg-gray-50 flex-row items-center gap-2 border-2 rounded-lg px-3"
			>
				{iconName && <Icons name={iconName} size={18} color="#9E9EA7" />}
				<TextInput
					value={value}
					onBlur={handleInputBlur}
					onFocus={handleInputFocus}
					className="w-11/12 h-14 rounded-lg text-base"
					placeholderTextColor="#9E9EA7"
					{...rest}
				/>
			</View>
			{error ? (
				<Text className="font-body text-xs text-red-500">{error}</Text>
			) : (
				help && <Text className="font-body text-xs text-gray-300">{help}</Text>
			)}
		</View>
	);
}
