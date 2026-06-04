import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";
import { sigUpApi } from "@/api/user";
import Button from "./ui/button";
import Input from "./ui/input";

export function SignupForm() {
	const [loading, setLoading] = useState(false);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSignUp = async () => {
		setLoading(true);
		const data = {
			name,
			email,
			password,
			confirmPassword,
		};
		const res = await sigUpApi(data);

		setInterval(() => setLoading(false), 1000);
		if (res.detail.status === "ok") {
			Alert.alert("Sucesso", "Conta criada com sucesso");
			router.push("/");
		} else {
			Alert.alert("Erro", "Ocorreu um erro ao criar a conta");
		}
		setLoading(false);
	};

	return (
		<View className="border-2 gap-4 border-gray-50 p-4 pb-5 rounded-xl mt-5 bg-white">
			<Text className="font-title mt-8 mb-4 text-4xl">Crie sua conta</Text>
			<Input
				value={name}
				onChangeText={setName}
				iconName="user"
				label="Nome"
				placeholder="Digite seu nome"
				help="Ex: João Silva"
			/>
			<Input
				value={email}
				onChangeText={setEmail}
				iconName="envelope"
				label="Email"
				placeholder="Digite seu email"
				help="Ex: joao@email.com"
			/>
			<Input
				value={password}
				onChangeText={setPassword}
				secureTextEntry
				iconName="lock"
				label="Senha"
				placeholder="Digite sua senha"
				help="Digite uma senha forte"
			/>
			<Input
				value={confirmPassword}
				onChangeText={setConfirmPassword}
				secureTextEntry
				iconName="lock"
				label="Confirmação de senha"
				placeholder="Confirme sua senha"
				help="Digite sua senha novamente"
			/>
			<Button loading={loading} onPress={handleSignUp}>
				Entrar
			</Button>
			<Text
				className="font-body underline text-center mt-2 text-base text-gray-500"
				onPress={() => console.log("Continuar como visitante")}
			>
				Continuar como visitante
			</Text>
		</View>
	);
}
