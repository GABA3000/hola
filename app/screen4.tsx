import { useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Screen4() {
    const router = useRouter();
    const { nombre, correo, edad } = useLocalSearchParams();

    return (
        <View>
            <Text>Datos</Text>
            <Text>Nombre: {nombre || "El mensaje no llegó"}</Text>
            <Text>Correo: {correo || "El mensaje no llegó"}</Text>
            <Text>Edad: {edad || "El mensaje no llegó"}</Text>
            {/*Hola mundo*/}
            <Button
                title="screen5"
                onPress={() => router.push(`/screen5`)} />
            <Button
                title="atras"
                onPress={() => router.back()} />
        </View>
    );
}