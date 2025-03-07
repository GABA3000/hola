import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

export default function Screen5() {
    const router = useRouter();

    const [form, setForm] = useState({ nombre: "", correo: "", edad: "" });

    const handlerChange = (field: any, value: any) => { setForm((prev) => ({ ...prev, [field]: value })); };

    return (
        <View>
            <Text style={{ color: "red" }}>Ingresa un dato</Text>
            <TextInput
                placeholder="Ingresa el nombre"
                value={form.nombre}
                onChangeText={(text) => handlerChange("nombre", text)}
            />
            <TextInput
                placeholder="Ingresa el correo"
                value={form.correo}
                onChangeText={(text) => handlerChange("correo", text)}
                keyboardType="email-address"
            />
            <TextInput
                placeholder="Ingresa la edad"
                value={form.edad}
                onChangeText={(text) => handlerChange("edad", text)}
                keyboardType="numeric"
            />
            <Button
                title="Enviar screen 6"
                onPress={() => router.push({pathname:"/screen6",params:form})} />
            <Button
                title="atras"
                onPress={() => router.back()} />
        </View>
    );
}