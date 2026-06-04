import { Text, TouchableOpacity, View } from "react-native";
import type { ITask } from "@/api/tasks/types";
import Button from "./ui/button";
import Icons from "./ui/icons";

interface IProps {
	task: ITask;
	openTaskDetail: (task: ITask) => void;
}

export default function Card({ task, openTaskDetail }: IProps) {
	return (
		<TouchableOpacity
			className="p-4 shadow-sm border border-gray-50 rounded-lg"
			onPress={() => openTaskDetail(task)}
		>
			<View className="mb-2 flex-row items-center justify-between">
				<Text className="font-title text-sm">{task.title}</Text>
				<View className="flex-row items-center gap-2">
					<Button variant="outline" size="sm">
						<Icons name="trash" />
					</Button>
					<Button variant="outline" size="sm">
						<Icons name="check" />
					</Button>
				</View>
			</View>
			<Text className="font-body text-xs text-gray-400">
				{task.description}
			</Text>

			{/* progress bar */}
			<View className="h-2 w-full bg-gray-200 rounded-xs mt-4">
				<View
					className="h-2 bg-purple-800 rounded-xs"
					style={{ width: `${task.completed ? 100 : 0}%` }}
				/>
			</View>

			<Text className="mt-2 font-body text-xs text-gray-400">
				{task.createdAt.toLocaleDateString()}
			</Text>
		</TouchableOpacity>
	);
}
