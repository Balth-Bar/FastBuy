import React, { useContext } from 'react';
import { StyleSheet } from 'react-native'
import { View, Text } from 'native-base';
import globalStyles from '../../../globalStyles';
import { AppContext } from '../../../../context/appContext/appState';
import { background } from 'native-base/lib/typescript/theme/styled-system';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationContext } from '@react-navigation/native';

const InitScreen = ({

}) => {
    const navigation = useContext(NavigationContext);
    const { userName } = useContext(AppContext)
    console.log(navigation)

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