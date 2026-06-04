import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import type { ITask } from "@/api/tasks/types";
import ListOfCards from "@/components/list-of-cards";
import LoadingSkeleton from "@/components/loading-skeleton";
import Button from "@/components/ui/button";
import Icons from "@/components/ui/icons";
import TASKS from "@/constants/mock_todo";
import IconLogo from "../assets/images/icon.png";

export default function HomeScreen() {
	const [isLoading, setIsLoading] = useState(true);
	const [tasks, setTasks] = useState<ITask[]>([]);

	useEffect(() => {
		// Simulate fetching tasks from an API
		setTimeout(() => {
			setIsLoading(true);
			setTasks(TASKS);
			setIsLoading(false);
		}, 3000);
	}, []);

	return (
		<View className="flex-1 pb-8 pt-2 bg-white">
			<View className="flex-row p-5 items-center  justify-between border-b-2 border-gray-50">
				<View className="flex-row items-center gap-4 ">
					<Image source={IconLogo} style={{ width: 60, height: 60 }} />
					<Text className="font-title text-base">Dashboard</Text>
				</View>
				<TouchableOpacity
					className="p-4"
					onPress={() => {
						console.log("Pressed");
					}}
					activeOpacity={0.7}
				>
					<Icons name="th" size={30} />
				</TouchableOpacity>
			</View>
			<View className="p-5 gap-4">
				{isLoading ? (
					Array(6)
						.fill(null)
						// biome-ignore lint/suspicious/noArrayIndexKey: <ignore>
						.map((_, i) => <LoadingSkeleton key={i} />)
				) : !tasks.length ? (
					<View className="p-5 gap-4 border-2 items-center border-gray-500 border-dashed rounded-lg">
						<Icons name="clipboard-list" size={30} />
						<Text className="font-title text-center text-xl">
							Vamos criar sua primeira tarefa
						</Text>
						<Text className="font-body text-base text-center">
							Insira sua meta e mostre a você mesmo sua capacidade em cumprir{" "}
							<Text className="font-bold">suas atividades</Text>
						</Text>
						<Button>Criar minha primeira tarefa</Button>
					</View>
				) : (
					<ListOfCards tasks={tasks} />
				)}
			</View>
		</View>
	);
}
