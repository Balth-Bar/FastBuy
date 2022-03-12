import { StyleSheet } from "react-native"


const labelSize = 16

const globalStyles = StyleSheet.create({
    pagesTitle: {
        marginBottom: 40,
        fontSize: 30,
        padding: 15,
        textTransform: 'uppercase',
        color: "#002862",
        fontWeight: "bold",
        alignSelf: "center",
    },
    inputContainer: {
        position: 'relative',
        width: "80%",
        alignSelf: "center",
        justifyContent: "center",
        marginBottom: "2%",
    },
    inputField: {
        backgroundColor: "#337ff1",
        width: "100%",
        alignSelf: "center",
        fontSize: labelSize,
        color: "#FFFF",
        borderRadius: 15,
        fontFamily: "Ubuntu-Regular",
        paddingLeft: 20,
    },
    inputIcon: {
        color: "#022760",
        position: 'absolute',
        right: 0,
        marginRight: "2%"
    },
    buttonStyle: {
        backgroundColor: "#022760",
        marginTop: "5%",
        width: "60%",
        alignSelf: "center",
        borderRadius: 15,
        padding: 5,
    },
    header: {
        backgroundColor: "#022760",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: "space-evenly"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

})

export default globalStyles