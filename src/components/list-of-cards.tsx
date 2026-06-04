import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import type { ITask } from "@/api/tasks/types";
import { TaskInfo } from "@/components/modals";
import Card from "./card";
import { NewTask } from "./modals/new-task";
import Button from "./ui/button";
import Icons from "./ui/icons";
import Input from "./ui/input";

interface ListOfCardsProps {
	tasks: ITask[];
}

export default function ListOfCards({ tasks }: ListOfCardsProps) {
	const [searchInput, setSearchInput] = useState("");
	const [selected, setSelected] = useState<ITask | null>(null);
	const [search, setSearch] = useState("");
	const [showNewTaskModal, setShowNewTaskModal] = useState(false);

	const filteredTasks = tasks.filter((task) =>
		task.title.toLowerCase().includes(search.toLowerCase()),
	);

	function handleClearSearch() {
		setSearch("");
		setSearchInput("");
	}

	function handleSearch() {
		setSearch(searchInput);
	}

	function toggleNewTaskModal() {
		setShowNewTaskModal(!showNewTaskModal);
	}

	return (
		<>
			<View className="flex-row items-center gap-2 ">
				<Input
					value={searchInput}
					clearable
					clearableOnPress={handleClearSearch}
					onChangeText={setSearchInput}
					placeholder="Pesquisar por tarefa"
				/>
				<Button onPress={handleSearch} size="lg">
					<Icons name="search" size={24} color="white" />
				</Button>
			</View>
			<Button variant="secondary" onPress={toggleNewTaskModal}>
				Adicionar nova tarefa
			</Button>
			{filteredTasks.length === 0 && (
				<View className="p-5 gap-4 border-2 items-center border-gray-500 border-dashed rounded-lg">
					<Icons name="clipboard-list" size={30} />
					<Text className="font-title text-center text-xl">
						Nenhuma tarefa encontrada
					</Text>
				</View>
			)}
			<FlatList
				data={filteredTasks}
				keyExtractor={(item) => item.id}
				contentContainerStyle={{ gap: 20, paddingBottom: 10 }}
				renderItem={({ item }) => (
					<Card task={item} openTaskDetail={(item) => setSelected(item)} />
				)}
			/>
			<TaskInfo task={selected} onClose={() => setSelected(null)} />
			{showNewTaskModal && <NewTask onClose={toggleNewTaskModal} />}
		</>
	);
}
