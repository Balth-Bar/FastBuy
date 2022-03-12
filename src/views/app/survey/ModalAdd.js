import React, { useState, useEffect } from 'react';
import { Text, View, Image, Pressable, ScrollView, useToast } from 'native-base';
import AnimatedButton from '../../shared/AnimatedButton';
import globalStyles from '../../../globalStyles';
import { TextInput, Alert, Modal } from 'react-native';

const AddModal = ({
    showModal,
    setShowModal,
    apiData,
    products,
    setProducts,
    setTotal,
    total
}) => {
    const [datashow, setDatashow] = useState([]);
    const [pages, setPages] = useState(Array.apply(null, Array(Math.ceil(apiData.length / 4))));
    const [auxiliarModal, setAuxiliarModal] = useState(false);
    const [amount, setAmount] = useState();

    const [product, setProduct] = useState({});

    const toast = useToast();

    useEffect(() => {
        pagination(1)
    }, [])

    const pagination = (position) => {
        const endOffset = 4 * position;
        const itemOffset = endOffset - 4
        setDatashow(apiData.slice(itemOffset, endOffset))
    }
    const validateData = () => {
        if (!amount) {
            Alert.alert(
                'Error',
                'Ingrese una cantidad valida de productos',
                [
                    { text: "Ok" }
                ]
            )
            return
        }
        if (isNaN(amount)) {
            Alert.alert(
                'Error',
                'Ingrese una cantidad valida',
                [
                    { text: "Ok" }
                ]
            )
            return
        }

        const { title, price, category, images } = product
        setProducts([...products, { id: Date.now(), title, price, category, images, amount, totalPrice: price * amount }])
        setTotal(total + price * amount)
        setAmount(0)
        setAuxiliarModal(!auxiliarModal)
        setShowModal(!showModal)
    }

    // const showAlert = (title, description, status) => {
    //     toast.show({
    //         placement: "bottom",
    //         title,
    //         description,
    //         status,
    //     })
    // }

    return (
        <>
            <Modal visible={showModal} onRequestClose={() => setShowModal(!showModal)}
                animationType="slide"
                transparent={true}
            >
                {/* <Modal.Content w={"100%"} bg="#d4e0f5">
                    <Modal.CloseButton />
                    <Modal.Body marginTop={"10%"} padding={5} > */}
                <View style={globalStyles.centeredView} >
                    <View style={globalStyles.modalView} >
                        <View flexDirection={"row"} flexWrap="wrap" alignSelf={"center"} justifyContent="space-evenly">
                            {datashow.map((product, index) =>
                                <Pressable
                                    key={index}
                                    onPress={() => { setAuxiliarModal(!auxiliarModal); setProduct(product) }}
                                    onLongPress={() => { }}
                                    width={"45%"}
                                >
                                    <View mb="1%"  >
                                        <Image
                                            source={{ uri: product.images[0] }}
                                            alt="Alternate Text" size="xl"
                                            resizeMode="stretch"
                                            width={150}
                                            height={150}
                                            alignSelf="center"
                                        />
                                        <Text
                                            textAlign={"center"}
                                            fontSize="md"
                                            bold
                                        >
                                            ${product.price}
                                        </Text>
                                    </View>
                                </Pressable>

                            )

                            }
                        </View>
                        <View h={45}>
                            <ScrollView horizontal>
                                <View flexDirection={"row"} mt="1%">
                                    {pages.map((page, index) =>
                                        <Pressable onPress={() => pagination(index + 1)}
                                            style={{
                                                width: 45,
                                                height: 45,
                                                justifyContent: "center",
                                                borderColor: "#000",
                                                marginHorizontal: 1,
                                                backgroundColor: "#022760"
                                            }}
                                            key={index}
                                        >
                                            <Text textAlign={"center"}
                                                bold
                                                color={"#FFF"}
                                            >
                                                {index + 1}
                                            </Text>
                                        </Pressable>
                                    )
                                    }
                                </View>
                            </ScrollView>
                        </View>

                        <AnimatedButton
                            onPress={() => { setShowModal(!showModal) }}
                        >
                            <View style={[globalStyles.buttonStyle, { width: 100 }]}
                            >
                                <Text
                                    textAlign={"center"}
                                    color="#FFF"
                                    fontSize={17}
                                >
                                    Cerrar
                                </Text>
                            </View>

                        </AnimatedButton>
                        {/* </Modal.Body>

                </Modal.Content> */}
                    </View>

                </View>
            </Modal >

            <Modal visible={auxiliarModal} onRequestClose={() => setAuxiliarModal(!auxiliarModal)}
                transparent={true}
                animationType="slide"
            >
                {/* <Modal.Content w={"100%"} bg="#d4e0f5"> */}
                <View style={globalStyles.centeredView}>
                    <View style={globalStyles.modalView}>
                        <View mt="5%" style={[globalStyles.inputContainer, { width: "70%" }]}>
                            <TextInput
                                placeholder='Cantidad de productos'
                                style={globalStyles.inputField}
                                placeholderTextColor="#FFF"
                                onChangeText={(text) => setAmount(text)}
                                keyboardType="numeric"
                            />
                            <AnimatedButton
                                onPress={() => { validateData() }}
                            >
                                <View style={globalStyles.buttonStyle}
                                >
                                    <Text
                                        textAlign={"center"}
                                        color="#FFF"
                                        fontSize={17}
                                    >
                                        Agregar
                                    </Text>
                                </View>

                            </AnimatedButton>

                            <AnimatedButton
                                onPress={() => { setAuxiliarModal(!auxiliarModal) }}
                            >
                                <View style={globalStyles.buttonStyle}
                                >
                                    <Text
                                        textAlign={"center"}
                                        color="#FFF"
                                        fontSize={17}
                                    >
                                        Cerrar
                                    </Text>
                                </View>

                            </AnimatedButton>

                        </View>
                        {/* </Modal.Content> */}
                    </View>
                </View>
            </Modal>

        </>
    );
}
export default AddModal;