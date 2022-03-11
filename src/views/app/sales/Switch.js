import React, { useState, useContext } from 'react';
import { View, Text, Pressable } from 'native-base'
import { StyleSheet, Touchable, Button } from 'react-native'


const Switch = ({
    navigation
}) => {
    const [colors, setColors] = useState(["#022760", "#DDDFE4", "#DDDFE4", "#DDDFE4"]);
    return (
        <View mt={"5%"} style={styles.container} >

            <Pressable style={styles.buttons} bg={colors[0]}
                onPress={() => {
                    setColors(["#022760", "#DDDFE4", "#DDDFE4", "#DDDFE4"])
                }}
            >
                <Text bold color={colors[0] == "#022760" ? "#FFF" : "#000"}>
                    día
                </Text>
            </Pressable>
            <Pressable style={styles.buttons} bg={colors[1]}
                onPress={() => {
                    setColors(["#DDDFE4", "#022760", "#DDDFE4", "#DDDFE4"])
                }}
            >
                <Text bold color={colors[1] == "#022760" ? "#FFF" : "#000"}>
                    Semana
                </Text>
            </Pressable>
            <Pressable style={styles.buttons} bg={colors[2]}
                onPress={() => {
                    setColors(["#DDDFE4", "#DDDFE4", "#022760", "#DDDFE4"])
                }}
            >
                <Text bold color={colors[2] == "#022760" ? "#FFF" : "#000"}>
                    Mes
                </Text>
            </Pressable>
            <Pressable style={styles.buttons} bg={colors[3]}
                onPress={() => {
                    setColors(["#DDDFE4", "#DDDFE4", "#DDDFE4", "#022760"])
                }}
            >
                <Text bold color={colors[3] == "#022760" ? "#FFF" : "#000"}>
                    Año
                </Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#DDDFE4",
        borderRadius: 20,
        flexDirection: "row",
        alignSelf: "center",
        marginBottom: "2%"
    },
    buttons: {
        width: "20%",
        alignItems: "center",
        borderRadius: 20,
        padding: 10,
        // margin: "2%"
    }

})

export default Switch;