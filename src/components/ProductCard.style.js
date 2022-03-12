import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"orange",
        borderRadius:10,
        margin:5,
    },
    image: {
        height: Dimensions.get('window').height/4,
        borderRadius:5,
        margin:10,
        resizeMode:"stretch",
    },
    title: {
        fontWeight:"bold",
        fontSize:20,
        paddingLeft:10,
    },
    price: {
        fontWeight:"bold",
        fontSize:20,
        color:"#7C8288",
        paddingBottom:5,
        paddingLeft:10,
        marginTop:5
    },
    instock: {
        fontSize:15,
        fontWeight: "bold",
        color:"red",
        marginLeft:10,
        marginBottom:5,
        borderWidth:2,
        borderColor:"red",
        marginRight:85,
        textAlign:"center",
    },
});