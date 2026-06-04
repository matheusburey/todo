import { Modal, type ModalProps, Text, View } from "react-native";
import Button from "../ui/button";
import Icons from "../ui/icons";

interface ModalFeedbackProps extends ModalProps {
	title: string;
	message: string;
	buttonText: string;
	buttonAction: () => void;
	secondaryMessage?: string;
	status?: "success" | "error";
	onClose: () => void;
}

export function ModalFeedback({
	title,
	message,
	buttonText,
	secondaryMessage,
	buttonAction,
	status,
	onClose,
	...rest
}: ModalFeedbackProps) {
	return (
		<Modal animationType="slide" transparent={true} role="alert" {...rest}>
			<View className="flex-1 justify-center items-center">
				<View className="bg-white p-5 pb-8 rounded-lg shadow-lg w-11/12 sm:w-1/2">
					<View className="flex-row justify-between">
						<View className="flex-row items-center gap-2">
							<View
								className={`${status === "success" ? "bg-purple-500" : "bg-red-500"} py-1 px-2 rounded`}
							>
								<Icons color="white" name="exclamation" size={20} />
							</View>
							<Text className="font-title text-xl">{title}</Text>
						</View>

						<Button variant="danger" size="sm" onPress={onClose}>
							<Icons color="white" name="times" size={20} />
						</Button>
					</View>

					<Text className="my-4 font-body text-base text-center text-gray-400">
						{message}
					</Text>
					<Button
						variant={status === "success" ? "secondary" : "danger"}
						onPress={buttonAction}
					>
						{buttonText}
					</Button>
					<Text className="mt-4 font-body text-base text-center text-gray-400">
						{secondaryMessage}
					</Text>
				</View>
			</View>
		</Modal>
	);
}
