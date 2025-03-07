import { useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Screen6() {
    const router = useRouter();
    const params = useLocalSearchParams();

    return (
        <View>
            <Text>Datos</Text>
            <Text>Nombre: {params.nombre || "El mensaje no llegó"}</Text>
            <Text>Correo: {params.correo || "El mensaje no llegó"}</Text>
            <Text>Edad: {params.edad || "El mensaje no llegó"}</Text>
            {/*Hola mundo*/}
            <Button
                title="atras"
                onPress={() => router.back()} />
        </View>
    );
}