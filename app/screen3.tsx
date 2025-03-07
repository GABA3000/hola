import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

export default function Screen3() {
    const router = useRouter();
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [edad, setEdad] = useState("");

    return (
        <View>
            <Text style={{color:"red"}}>Ingresa un dato</Text>
            <TextInput
                placeholder="Ingresa el nombre"
                value={nombre}
                onChangeText={setNombre}
            />
                        <TextInput
                placeholder="Ingresa el correo"
                value={correo}
                onChangeText={setCorreo}
                keyboardType="email-address"
            />
                        <TextInput
                placeholder="Ingresa la edad"
                value={edad}
                onChangeText={setEdad}
                keyboardType="numeric"
            />
            <Button 
            title="Enviar"
            onPress={()=> router.push(`/screen4?nombre=${encodeURIComponent(nombre)}&correo=${encodeURIComponent(correo)}&edad=${encodeURIComponent(edad)}`)}/>
            <Button
                title="atras"
                onPress={() => router.back()} />
        </View>
    );
}