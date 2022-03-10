import React from 'react';
import { View, Text } from 'native-base';

const Survey = ({

}) => {
    return (
        <View flex={1} bg={"#f5f5f5"} >
            <Text
                fontSize={"2xl"}
                textAlign="center"
                bg="#022760"
                w="80%"
                borderRadius={5}
                color="#FFF"
                p={2}
                alignSelf="center"
                mt="10%"
            >
                Nuevo Pedido
            </Text>
        </View>
    );
}

export default Survey;