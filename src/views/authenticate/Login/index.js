import React, { useEffect, useState, useContext } from 'react';
import { View, Text, useToast } from 'native-base';
import AnimatedButton from '../../shared/AnimatedButton';
import globalStyles from '../../../globalStyles';
import { TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppContext } from '../../../../context/appContext/appState'

const Login = ({

}) => {
    const [hide, setHide] = useState(true)
    const [user, setUser] = useState("Juan");
    const [pass, setPass] = useState("12345");

    const toast = useToast();

    const { signIn, isLoading, orderData } = useContext(AppContext)

    const showAlert = (title, description, status) => {
        toast.show({
            placement: "top",
            title,
            description,
            status,
        })
    }

    const validateData = async () => {
        if (!user || !pass) {
            showAlert("Error", "Todos los campos son obligatorios", "warning")
            return
        }
        signIn(user)
    }

    return (
        <View flex={1} bg={"#f5f5f5"} >
            <View flex={1} justifyContent="center">

                <Text
                    style={globalStyles.pagesTitle}
                >Fast Buy
                </Text>
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        placeholder='Usuario'
                        style={globalStyles.inputField}
                        placeholderTextColor="#FFF"
                        onChangeText={(text) => setUser(text)}
                    />
                    <MaterialIcons
                        style={globalStyles.inputIcon}
                        name="people" size={30}
                    />
                </View>
                <View style={[globalStyles.inputContainer, { marginBottom: 40 }]}>
                    <TextInput
                        placeholder='Contraseña'
                        style={[globalStyles.inputField, { width: "100%" }]}
                        placeholderTextColor="#FFF"
                        secureTextEntry={hide}
                        onChangeText={(text) => setPass(text)}
                    />
                    <MaterialCommunityIcons
                        style={globalStyles.inputIcon}
                        name={hide ? 'eye-off' : 'eye'} size={30}
                        onPress={() => setHide(!hide)}
                    />
                </View>
                <AnimatedButton
                    onPress={() => {
                        validateData()
                    }}
                >
                    <View style={globalStyles.buttonStyle}
                    >
                        <Text
                            textAlign={"center"}
                            color="#FFF"
                            fontSize={17}
                        >
                            Enviar
                        </Text>
                    </View>
                </AnimatedButton>
            </View>

        </View >
    );
}
export default Login;

