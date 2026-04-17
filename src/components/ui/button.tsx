import {
	ActivityIndicator,
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";

type Variant = "default" | "secondary" | "outline" | "danger";
type Size = "xl" | "md" | "sm";

interface ButtonProps extends TouchableOpacityProps {
	text?: string;
	loading?: boolean;
	variant?: Variant;
	size?: Size;
}

const variantsColors = {
	default: {
		container: "bg-purple-800 hover:bg-purple-900",
		text: "text-white",
	},
	secondary: {
		container: "bg-purple-500 hover:bg-purple-600",
		text: "text-white",
	},
	disabled: {
		container: "bg-gray-100",
		text: "text-gray-300",
	},
	outline: {
		container: "bg-transparent border-2 border-gray-300",
		text: "",
	},
	danger: {
		container: "bg-red-600 hover:bg-red-700",
		text: "text-white",
	},
};

const variantsSize = {
	xl: "h-16",
	md: "h-16 w-16",
	sm: "h-8 w-8",
};

export default function Button({
	loading,
	disabled,
	variant = "default",
	size = "xl",
	children,
	...rest
}: ButtonProps) {
	const s = disabled ? variantsColors.disabled : variantsColors[variant];
	const sz = variantsSize[size];

	return (
		<TouchableOpacity
			activeOpacity={0.7}
			disabled={disabled || loading}
			className={`${s.container} ${sz} justify-center rounded-lg`}
			{...rest}
		>
			{loading ? (
				<ActivityIndicator color="white" />
			) : (
				<Text className={`${s.text} font-button text-lg text-center`}>
					{children}
				</Text>
			)}
		</TouchableOpacity>
	);
}
