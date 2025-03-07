import { useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Screen2() {
    const router = useRouter();
    const { mensaje } = useLocalSearchParams();

    return (
        <View>
            <Text>Recibir mensaje</Text>
            <Text>{mensaje || "El mensaje no llegó"}</Text>
            <Button
                title="Enviar"
                onPress={() => router.back()} />
                            <Button
                title="Screen3"
                onPress={()=> router.push(`/screen3`)}/>
        </View>
    );
}