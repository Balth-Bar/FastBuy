import React from 'react';
import { View, Text } from 'native-base';
import Switch from './Switch';

const Sales = ({
    navigation
}) => {
    return (
        <View flex={1} bg={"#f5f5f5"} >
            <View flex={1}>
                <Switch />
            </View>
        </View>
    );
}
export default Sales;