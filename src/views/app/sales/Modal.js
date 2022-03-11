import globalStyles from "../../../globalStyles";
import React from 'react';
import { Text, View, Modal, Image } from 'native-base';
import AnimatedButton from "../../shared/AnimatedButton";
import { formartDate, formatQuantity } from "../../../helper";

const OrderModal = ({
    setShowModal,
    showModal,
    order
}) => {
    console.log(order)
    return (
        <Modal isOpen={showModal} onClose={() => setShowModal(!showModal)} >
            <Modal.Content w={"100%"} bg="#d4e0f5">
                <View mt="5%" style={[globalStyles.inputContainer, { width: "70%" }]}>

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
                        <View w="110%" alignSelf={"center"} bg="#FFF" p={2} style={{ borderRadius: 5 }}>
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
            </Modal.Content>

        </Modal >
    )
}

export default OrderModal;