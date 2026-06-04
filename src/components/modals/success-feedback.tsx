import { router } from "expo-router";
import { Modal, type ModalProps, Text, View } from "react-native";
import Button from "../ui/button";
import Icons from "../ui/icons";

interface SuccessFeedbackProps extends ModalProps {
	onClose: () => void;
}

export function SuccessFeedback({ onClose, ...rest }: SuccessFeedbackProps) {
	function handleCloseAndRedirect() {
		onClose();
		router.push("/");
	}

	return (
		<Modal animationType="slide" transparent={true} role="alert" {...rest}>
			<View className="flex-1 justify-center items-center">
				<View className="bg-white p-5 pb-8 rounded-lg shadow-lg w-11/12 sm:w-1/2">
					<View className="flex-row justify-between">
						<View className="flex-row items-center gap-2">
							<View className="bg-purple-500 py-1 px-2 rounded">
								<Icons color="white" name="exclamation" size={20} />
							</View>
							<Text className="font-title text-xl">Yeess..</Text>
						</View>

						<Button variant="danger" size="sm" onPress={onClose}>
							<Icons color="white" name="times" size={20} />
						</Button>
					</View>

					<Text className="my-4 font-body text-base text-center text-gray-400">
						Seu cadastro deu super certo, vamos lá!
					</Text>
					<Button variant="secondary" onPress={handleCloseAndRedirect}>
						Ir para o login agora
					</Button>
					<Text className="mt-4 font-body text-base text-center text-gray-400">
						Você já pode começar criando suas listas de tarefas agora mesmo...
					</Text>
				</View>
			</View>
		</Modal>
	);
}
