import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Logo from "../assets/images/logo-secondary.png";

export default function HomeScreen() {
	return (
		<ScrollView className="flex-1 bg-white">
			<LinearGradient
				colors={["#38085C", "#38085C", "#FFFFFF", "#FFFFFF"]}
				locations={[0, 0.4, 0.4, 1]}
				className="flex-1 px-5"
			>
				<View className="mt-10 pt-8">
					<Image source={Logo} style={{ width: 150, height: 100 }} />
					<Text className="font-title mt-8 text-4xl text-white">
						O jeito fácil
					</Text>
					<Text className="mt-4 font-body text-base text-white">
						flexível e atrativo de gerenciar{" "}
						<Text className="font-bold">seus projetos</Text>
					</Text>
				</View>
				<View className="border-2 gap-4 border-gray-50 p-4  rounded-xl mt-5 bg-white">
					<Text className="font-title mt-8 mb-4 text-4xl">
						Bem vindo de volta!
					</Text>
					<Input
						iconName="envelope"
						label="Email"
						placeholder="Digite seu email"
						help="Ex: joao@email.com"
					/>
					<Input
						iconName="lock"
						label="Senha"
						placeholder="Digite sua senha"
						help="Digite uma senha forte"
					/>
					<Button variant="secondary" onPress={() => console.log("Entrar")}>
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
						onPress={() => console.log("Continuar como visitante")}
					>
						Continuar como visitante
					</Text>
				</View>
			</LinearGradient>
		</ScrollView>
	);
}
