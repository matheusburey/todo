import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Logo from "../assets/images/logo.png";
import Icons from "@/components/ui/icons";

export default function HomeScreen() {
	return (
		<ScrollView className="flex-1 bg-white">
			<LinearGradient
				colors={["#38085C", "#38085C", "#FFFFFF", "#FFFFFF"]}
				locations={[0, 0.4, 0.4, 1]}
				className="flex-1 px-5 pb-8 pt-14"
			>
				<View>
					<View className="flex-row items-center justify-between">
					<Image source={Logo} style={{ width: 150, height: 100 }} />
					<Button
						variant="secondary"
						size="md"
						onPress={() => router.back()}
					>
						<Icons name="arrow-left" size={20} color="#FFFFFF" />
					</Button>
					</View>
					<Text className="font-title mt-8 text-4xl text-white">
						Agilidade e Simplicidade
					</Text>
					<Text className="mt-4 font-body text-base text-white">
						Agilize seus projetos com rapidez e muita performance
					</Text>
				</View>
				<View className="border-2 gap-4 border-gray-50 p-4 pb-10 rounded-xl my-5 bg-white">
					<Text className="font-title mt-8 mb-4 text-4xl">
						Crie sua conta
					</Text>
					<Input
						iconName="user"
						label="Nome"
						placeholder="Digite seu nome"
						help="Ex: João Silva"
					/>
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
					<Input
						iconName="lock"
						label="Confirmação de senha"
						placeholder="Confirme sua senha"
						help="Digite sua senha novamente"
					/>
					<Button onPress={() => console.log("Entrar")}>
						Entrar
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
