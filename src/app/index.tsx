import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import Logo from "../assets/images/logo.png";

export default function HomeScreen() {
	const { user, signIn } = useAuth();

	const [loading, setLoading] = useState(false);

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSignIn = async () => {
		setLoading(true);
		const successResponse = await signIn({ email, password });
		if (successResponse) {
			router.push("/dashboard");
		}
		setLoading(false);
	};

	useEffect(() => {
		if (user?.accessToken) {
			router.push("/dashboard");
		}
	}, [user]);

	return (
		<ScrollView className="flex-1 bg-white">
			<LinearGradient
				colors={["#38085C", "#38085C", "#FFFFFF", "#FFFFFF"]}
				locations={[0, 0.4, 0.4, 1]}
				className="flex-1 px-5 pb-8 pt-14"
			>
				<View>
					<Image source={Logo} style={{ width: 150, height: 100 }} />
					<Text className="font-title mt-8 text-4xl text-white">
						O jeito fácil
					</Text>
					<Text className="mt-2 font-body text-base text-white">
						flexível e atrativo de gerenciar{" "}
						<Text className="font-bold">seus projetos</Text>
					</Text>
				</View>
				<View className="border-2 gap-4 border-gray-50 p-4 pb-5 rounded-xl mt-5 bg-white">
					<Text className="font-title mt-8 mb-4 text-4xl">
						Bem vindo de volta!
					</Text>
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
						iconName="lock"
						label="Senha"
						secureTextEntry
						placeholder="Digite sua senha"
						help="Digite uma senha forte"
					/>
					<Button
						variant="secondary"
						onPress={handleSignIn}
						disabled={loading}
						loading={loading}
					>
						Entrar
					</Button>

					<Text className="font-body text-center mt-4 text-base text-gray-400">
						Ainda não possui uma conta?
					</Text>

					<Button variant="outline" onPress={() => router.push("/signup")}>
						Cadastrar
					</Button>
					<Text
						className="font-body underline text-center mt-2 text-base text-gray-500"
						onPress={() => router.push("/dashboard")}
					>
						Continuar como visitante
					</Text>
				</View>
			</LinearGradient>
		</ScrollView>
	);
}
