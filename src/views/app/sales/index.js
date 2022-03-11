import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, ScrollView, Modal } from 'native-base';
import Switch from './Switch';
import DateTimePicker from '@react-native-community/datetimepicker';
import { formartDate } from '../../../helper';
import AnimatedButton from '../../shared/AnimatedButton';
import globalStyles from '../../../globalStyles';
import { AppContext } from '../../../../context/appContext/appState';
import { Pressable } from 'react-native';
import OrderModal from './Modal';


const Sales = ({
    navigation
}) => {
    const [date, setDate] = useState(new Date(Date.now()));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [time, setTime] = useState(1);
    const [milsecs, setMilsecs] = useState(0);

    const [filterData, setFilterData] = useState([]);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate
        setShow(!show);
        setDate(currentDate);
    };

    const [showModal, setShowModal] = useState(false);
    const [order, setOrder] = useState({});

    const { orderData } = useContext(AppContext)

    useEffect(() => {
        // if (time == 1) {
        //     setDate(new Date(Date.now()))
        // }
        let filterData = []
        if (time == 1) {
            filterData = orderData.filter((order) => formartDate(order.date) === formartDate(date))
        }
        else {
            let initialDate = new Date(date - milsecs)
            filterData = orderData
                .filter((order) => {
                    let orderData = order.date
                    let finalDate = new Date(date)

                    if (orderData >= initialDate && orderData <= finalDate) {
                        return order
                    }
                })
        }
        setFilterData(filterData)

    }, [time, date, orderData])

    return (
        <View flex={1} bg={"#f5f5f5"} >
            <View flex={1}>
                <Switch
                    setTime={setTime}
                    setMilsecs={setMilsecs}
                />
                <Text
                    textAlign={"center"}
                    fontSize={"md"}
                    mt="2%"
                    bold
                >Seleccione Fecha</Text>

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
                <View bg="#d4e0f5" w={"80%"} h="2/3" alignSelf="center" borderRadius={15} mt="2%">
                    <ScrollView p={1}>
                        {filterData.map((product, index) =>
                            <Pressable
                                onPress={() => {
                                    setOrder(product)
                                    setShowModal(!showModal)
                                }}
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
                            </Pressable>
                        )}

                    </ScrollView>
                </View>
                {show &&
                    (<DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        onChange={onChange}
                    />)
                }
                {showModal && <OrderModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    order={order}
                />}
            </View>
        </View>
    );
}
export default Sales;