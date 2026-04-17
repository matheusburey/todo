import { FontAwesome5 } from "@expo/vector-icons";

export type IconNames = React.ComponentProps<typeof FontAwesome5>["name"];

interface IconsProps {
	name: IconNames;
	size?: number;
	color?: string;
}

export default function Icons({ ...rest }: IconsProps) {
	return <FontAwesome5 {...rest} />;
}
