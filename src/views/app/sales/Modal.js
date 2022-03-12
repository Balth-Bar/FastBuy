import globalStyles from "../../../globalStyles";
import React from 'react';
import { Text, View, Image } from 'native-base';
import AnimatedButton from "../../shared/AnimatedButton";
import { formartDate, formatQuantity } from "../../../helper";
import { Modal } from "react-native";

const OrderModal = ({
    setShowModal,
    showModal,
    order
}) => {
    console.log(order)
    return (
        <Modal visible={showModal} onRequestClose={() => setShowModal(!showModal)}
            animationType="slide"
            transparent={true}
        >

            {/* <Modal.Content w={"100%"} bg="#d4e0f5"> */}
            <View style={globalStyles.centeredView} >
                <View style={globalStyles.modalView} >
                    <View mt="5%" style={[globalStyles.inputContainer, { width: "100%" }]}>

                        <View>

                            <View flexDirection={"row"} justifyContent="space-between">
                                <Text
                                    fontSize={"md"}
                                    bold
                                >
                                    Fecha:
                                </Text>
                                <Text>
                                    {formartDate(order.date)}
                                </Text>

                            </View>

                            <View flexDirection={"row"} justifyContent="space-between">
                                <Text
                                    fontSize={"md"}
                                    bold
                                >
                                    Cliente:
                                </Text>
                                <Text>
                                    {order.client}
                                </Text>

                            </View>

                            <Text
                                fontSize={"md"}
                                bold
                            >
                                Productos:
                            </Text>
                            <View bg="#d4e0f5" w="110%" alignSelf={"center"} p={2} style={{ borderRadius: 5 }}>
                                {order && (
                                    order.products.map((product, index) =>
                                        <View key={index} flexDirection="row" justifyContent="space-between" mt="1%" >
                                            <Text w={100}>{product.title}</Text>
                                            <Text>{product.amount}</Text>
                                            <Text>{formatQuantity(product.totalPrice)}</Text>
                                        </View>
                                    )
                                )}
                            </View>


                            <View flexDirection={"row"} justifyContent="space-between">
                                <Text
                                    fontSize={"md"}
                                    bold
                                >
                                    Total:
                                </Text>
                                <Text>
                                    {formatQuantity(order.total)}
                                </Text>

                            </View>

                        </View>
                        <AnimatedButton
                            onPress={() => setShowModal(!showModal)}
                        >
                            <View style={globalStyles.buttonStyle}
                            >
                                <Text
                                    textAlign={"center"}
                                    color="#FFF"
                                    fontSize={17}
                                >
                                    cerrar
                                </Text>
                            </View>

                        </AnimatedButton>

                    </View>
                    {/* </Modal.Content> */}
                </View>
            </View>
        </Modal >
    )
}

export default OrderModal;