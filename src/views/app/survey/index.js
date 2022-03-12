import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, Button, useToast, Modal } from 'native-base';
import globalStyles from '../../../globalStyles';
import { Alert, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AnimatedButton from '../../shared/AnimatedButton';
import { AppContext } from '../../../../context/appContext/appState';
import AddModal from './ModalAdd';
import { NavigationContext } from '@react-navigation/native';
import { formartDate, formatQuantity } from '../../../helper';
import DateTimePicker from '@react-native-community/datetimepicker';

// import { formatQuantity } from '../../../helper';

const Survey = ({

}) => {
    const navigation = useContext(NavigationContext);

    const [client, setClient] = useState("");
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const { apiData, setOrderData, orderData, userName } = useContext(AppContext);
    const [total, setTotal] = useState(0);

    const [date, setDate] = useState(new Date(Date.now()));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const toast = useToast();

    // const showAlert = (title, description, status) => {
    //     toast.show({
    //         placement: "top",
    //         title,
    //         description,
    //         status,
    //     })
    // }

    const validateData = () => {
        if (client == "") {
            Alert.alert(
                'Error',
                'Ingrese Nombre del cliente',
                [
                    { text: "Ok" }
                ]
            )
        }
        else if (products.length == 0) {
            Alert.alert(
                'Error',
                'Agrege productos al pedido',
                [
                    { text: "Ok" }
                ]
            )
        }
        else {
            var order = {
                products,
                client,
                date,
                userName,
                total
            }
            setOrderData([...orderData, order])
            setProducts([])
            navigation.navigate("Home")
        }

    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(!show);
        setDate(currentDate);
    };

    return (
        <ScrollView>
            <View View flex={1} bg={"#f5f5f5"} mt={"15%"} >

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
                <Text
                    textAlign={"center"}
                    fontSize={"md"}
                    mt="2%"
                    bold
                >Fecha</Text>
                <AnimatedButton
                    onPress={() => { setShow(!show) }}
                >
                    <View
                        style={[globalStyles.buttonStyle, { marginTop: 0 }]}
                    >
                        <Text
                            textAlign={"center"}
                            color="#FFF"
                            fontSize={"md"}
                        >
                            {formartDate(date)}
                        </Text>

                    </View>

                </AnimatedButton>
                {show &&
                    (<DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        onChange={onChange}
                    />)
                }
                <AnimatedButton
                    onPress={() => { setShowModal(!showModal) }}
                >
                    <View
                        style={globalStyles.buttonStyle}
                    >
                        <Text
                            textAlign={"center"}
                            color="#FFF"
                            fontSize={"md"}
                        >
                            Agregar Productos
                        </Text>

                    </View>

                </AnimatedButton>

                <View bg="#d4e0f5" w={"80%"} h={100} alignSelf="center" borderRadius={15} mt="2%">
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
                                <Text w={100} >
                                    {product.title}
                                </Text>
                                <Text >
                                    {product.amount}
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
                <Button
                    style={{ position: "absolute", width: 10, alignSelf: "center", backgroundColor: "#022760" }}
                    onPress={() => { validateData() }}
                    disabled

                >
                    {/* <Text
                        w={0}
                        h={0}
                        textAlign={"center"}
                        color="#FFF"
                        fontSize={"md"}
                    >
                        Enviar
                    </Text> */}
                </Button>
                <View>
                    <AnimatedButton
                        onPress={() => validateData()}
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
                </View>

            </View >

            {showModal && (<AddModal
                showModal={showModal}
                setShowModal={setShowModal}
                apiData={apiData}
                setProducts={setProducts}
                products={products}
                setTotal={setTotal}
                total={total}
            />)}
        </ScrollView>
    );
}

export default Survey;