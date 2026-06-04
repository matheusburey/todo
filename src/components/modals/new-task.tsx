import { useState } from "react";
import { Modal, type ModalProps, Text, View } from "react-native";
import Button from "../ui/button";
import Icons from "../ui/icons";
import Input from "../ui/input";

interface NewTaskProps extends ModalProps {
	onClose: () => void;
}

export function NewTask({ onClose, ...rest }: NewTaskProps) {
	const [loading, setLoading] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	function handleAddTask() {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			onClose();
		}, 2000);
	}

	return (
		<Modal animationType="slide" transparent={true} role="alert" {...rest}>
			<View className="flex-1 justify-center items-center">
				<View className="bg-white gap-4 p-5 pb-8 rounded-lg shadow-lg w-11/12 sm:w-1/2">
					<View className="flex-row justify-between">
						<View className="flex-row items-center gap-2">
							<View className="bg-purple-500 py-1 px-2 rounded-lg">
								<Icons color="white" name="file-alt" size={20} />
							</View>
							<Text className="font-title text-xl">Adicionar</Text>
						</View>

						<Button variant="danger" size="sm" onPress={onClose}>
							<Icons color="white" name="times" size={20} />
						</Button>
					</View>

					<Input
						value={title}
						onChangeText={setTitle}
						label="Titulo"
						placeholder="Digite o titulo da tarefa"
						help="Ex: Estudar React"
					/>
					<Input
						value={description}
						onChangeText={setDescription}
						label="Descrição"
						placeholder="Digite a descrição da tarefa"
						help="Máximo 100 caracteres"
					/>
					<Button
						variant="secondary"
						onPress={handleAddTask}
						loading={loading}
						disabled={loading}
					>
						Adicionar Tarefa
					</Button>
				</View>
			</View>
		</Modal>
	);
}
