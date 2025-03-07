import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

export default function Screen1() {
    const router = useRouter();
    const [inputValue, setInputValue] = useState("");

    return (
        <View>
            <Text style={{color:"red"}}>Ingresa un dato</Text>
            <TextInput
                placeholder="Ingresa un valor"
                value={inputValue}
                onChangeText={setInputValue}
            />
            <Button 
            title="Enviar"
            onPress={()=> router.push(`/screen2?mensaje=${encodeURIComponent(inputValue)}`)}/>
        </View>
    );
}