import { useState } from "react";
import { Modal, type ModalProps, Text, View } from "react-native";
import type { ITask } from "@/api/tasks/types";
import Button from "../ui/button";
import Icons from "../ui/icons";
import Input from "../ui/input";

interface TaskInfoModalProps extends ModalProps {
	task: ITask | null;
	onClose: () => void;
}

export function TaskInfo({ task, onClose, ...rest }: TaskInfoModalProps) {
	if (!task) {
		return null;
	}

	return (
		<Modal
			visible={task !== null}
			animationType="slide"
			transparent={true}
			role="alert"
			{...rest}
		>
			<View className="flex-1 justify-center items-center">
				<View className="bg-white gap-4 p-5 pb-8 rounded-lg shadow-lg w-11/12 sm:w-1/2">
					<View className="flex-row justify-between">
						<View className="flex-row items-center gap-2">
							<View className="bg-purple-500 p-2 rounded-lg">
								<Icons color="white" name="box-open" size={15} />
							</View>
							<Text className="font-title text-xl">Visualizar</Text>
						</View>
						<View className="flex-row items-center gap-2">
							<Button variant="outline" size="sm">
								<Icons name="trash" />
							</Button>
							<Button variant="outline" size="sm">
								<Icons name="check" />
							</Button>
							<Button variant="danger" size="sm" onPress={onClose}>
								<Icons color="white" name="times" size={20} />
							</Button>
						</View>
					</View>
					<Text className="font-title text-sm">{task.title}</Text>
					<Text className="font-body text-xs text-gray-400">
						{task.description}
					</Text>
					<View className="h-2 w-full bg-gray-200 rounded-full mt-4">
						<View
							className="h-2 bg-purple-800 rounded-full"
							style={{ width: `${task.completed ? 100 : 0}%` }}
						/>
					</View>

					<Text className="mt-2 font-body text-xs text-gray-400">
						{task.createdAt.toLocaleDateString()}
					</Text>
				</View>
			</View>
		</Modal>
	);
}
