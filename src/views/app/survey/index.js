import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, Button, useToast, Modal } from 'native-base';
import globalStyles from '../../../globalStyles';
import { TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AnimatedButton from '../../shared/AnimatedButton';
import { AppContext } from '../../../../context/appContext/appState';
import AddModal from './ModalAdd';
import { NavigationContext } from '@react-navigation/native';
import { formatQuantity } from '../../../helper';

// import { formatQuantity } from '../../../helper';

const Survey = ({

}) => {
    const navigation = useContext(NavigationContext);

    const [client, setClient] = useState("");
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const { apiData, setOrderData, orderData, userName } = useContext(AppContext);
    const [total, setTotal] = useState(0);

    const toast = useToast();

    const showAlert = (title, description, status) => {
        toast.show({
            placement: "top",
            title,
            description,
            status,
        })
    }

    const validateData = () => {
        if (!client) {
            showAlert("Error", "Nombre del cliente es necesario", "alert")
            return
        }
        if (products.length == 0) {
            showAlert("Error", "Agrege productos al pedido", "alert")
            return
        }
        const order = {
            products,
            client,
            date: Date.now(),
            userName
        }
        setOrderData([...orderData, order])
        setProducts([])
        navigation.goBack()
    }

    return (
        <View View flex={1} bg={"#f5f5f5"} justifyContent="center" >
            <Text
                fontSize={"2xl"}
                textAlign="center"
                bg="#022760"
                w="80%"
                borderRadius={5}
                color="#FFF"
                p={2}
                alignSelf="center"
                mb="5%"
            >
                Nuevo Pedido
            </Text>

            <View mt="5%" style={[globalStyles.inputContainer, { width: "70%" }]}>
                <TextInput
                    placeholder='Nombre (cliente)'
                    style={globalStyles.inputField}
                    placeholderTextColor="#FFF"
                    onChangeText={(text) => setClient(text)}
                />
                <MaterialIcons
                    style={globalStyles.inputIcon}
                    name="people" size={30}
                />
            </View>
            <AnimatedButton
                onPress={() => { setShowModal(!showModal) }}
            >
                <Text
                    fontSize={"md"}
                    textAlign="center"
                    bg="#337ff1"
                    w="70%"
                    borderRadius={5}
                    color="#FFF"
                    p={2}
                    alignSelf="center"
                    marginTop={"2%"}
                >
                    Agregar Productos
                </Text>
            </AnimatedButton>

            <View bg="#d4e0f5" w={"70%"} h={100} alignSelf="center" borderRadius={15} mt="2%">
                <ScrollView p={1}>
                    {products.map((product, index) =>
                        <View
                            key={index}
                            style={{
                                justifyContent: "space-between",
                                flexDirection: "row",
                                marginHorizontal: "5%",
                                marginVertical: "1%",
                                padding: 2,
                            }}
                        >
                            <Text >
                                {product.title}
                            </Text>
                            <Text >
                                {formatQuantity(product.totalPrice)}
                            </Text>

                        </View>
                    )}
                </ScrollView>
            </View>
            <View w="70%" alignSelf={"center"} justifyContent="space-between" flexDirection={"row"} m="4%">
                <Text fontSize={"md"} bold>
                    Total:
                </Text>
                <Text fontSize={"md"}>
                    {formatQuantity(total)}
                </Text>
            </View>
            <AnimatedButton
                onPress={() => { validateData() }}
            >
                <View style={globalStyles.buttonStyle}
                >
                    <Text
                        textAlign={"center"}
                        color="#FFF"
                        fontSize={"md"}
                    >
                        Enviar
                    </Text>
                </View>

            </AnimatedButton>

            <AddModal
                showModal={showModal}
                setShowModal={setShowModal}
                apiData={apiData}
                setProducts={setProducts}
                products={products}
                setTotal={setTotal}
                total={total}
            />
        </View >
    );
}

export default Survey;