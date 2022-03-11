import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native'
import { View, Text, HStack, Spinner, Heading, ScrollView } from 'native-base';
import globalStyles from '../../../globalStyles';
import { AppContext } from '../../../../context/appContext/appState';
import { background } from 'native-base/lib/typescript/theme/styled-system';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationContext } from '@react-navigation/native';
import { getProducts } from '../../../services/appis';
import { formartDate } from '../../../helper';


const InitScreen = ({
}) => {
    const [sime, setsime] = useState();
    const navigation = useContext(NavigationContext);
    const { userName, setData, apiData, orderData } = useContext(AppContext)

    useEffect(() => {
        const callData = async () => {
            const data = await getProducts()
            setData(data.products)
        }
        callData()
    }, [])

    if (apiData.length == 0) {
        return (
            <View flex={1} alignContent="center">
                <Spinner />
            </View>
        )
    }
    return (
        <View flex={1} bg={"#f5f5f5"} >
            <View style={globalStyles.header} >
                <Text
                    fontSize={"4xl"}
                    style={{
                        color: "#FFF",
                        fontWeight: "500",
                        textAlign: "center",
                    }}>
                    Bienvenido
                </Text>
                <Text color="#FFF" textAlign={"center"} fontSize="xl" mb="5%">
                    {userName}
                </Text>

            </View>

            <View bg="#d4e0f5" w={"80%"} h="2/3" alignSelf="center" borderRadius={15} mt="2%">
                <ScrollView p={1}>
                    {orderData.map((product, index) =>
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
                            <Text fontSize={"md"} >
                                {formartDate(product.date)}
                            </Text>
                            <Text fontSize={"md"} bold >
                                {product.client}
                            </Text>
                        </View>
                    )}

                </ScrollView>
            </View>

            <AntDesign
                style={styles.iconPosition}
                name="pluscircle" size={50} color="#337ff1"
                onPress={() => { navigation.navigate("Survey") }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    iconPosition: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: "1%"
    }
})
export default InitScreen