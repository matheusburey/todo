import { Modal, type ModalProps, Text, View } from "react-native";
import Button from "../ui/button";
import Icons from "../ui/icons";

interface ErrorFeedbackProps extends ModalProps {
	error: string;
	onClose: () => void;
}

export function ErrorFeedback({ error, onClose, ...rest }: ErrorFeedbackProps) {
	return (
		<Modal animationType="slide" transparent={true} role="alert" {...rest}>
			<View className="flex-1 justify-center items-center">
				<View className="bg-white p-5 rounded-lg shadow-lg w-11/12 sm:w-1/2">
					<View className="flex-row justify-between">
						<View className="flex-row items-center gap-2">
							<View className="bg-red-600 py-1 px-2 rounded">
								<Icons color="white" name="exclamation" size={20} />
							</View>
							<Text className="font-title text-xl">Oops..</Text>
						</View>

						<Button variant="danger" size="sm" onPress={onClose}>
							<Icons color="white" name="times" size={20} />
						</Button>
					</View>

					<Text className="my-4 font-body text-base text-center text-gray-400">
						Ocorreu algum erro!
					</Text>
					<Button variant="danger">Tentar novamente</Button>
					<Text className="mt-4 font-body text-base text-center text-gray-400">
						Você já pode tentar novamente, clicando no botão acima ou aguarde
						alguns minutos...
					</Text>
				</View>
			</View>
		</Modal>
	);
}
