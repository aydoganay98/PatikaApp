import React from "react";
import { SafeAreaView, Text, TextInput, FlatList, StyleSheet } from "react-native";
import product_card from "./product_card.json";
import ProductCard from "./components/ProductCard";

function App() {
    const renderPro = ({ item }) => <ProductCard product={item} />
    const numColumns = 2
    return (
        <SafeAreaView>
            <Text style={styles.title}>PATIKASTORE</Text>
            <TextInput style={styles.searchbar} placeholder="Ara..." />
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={product_card}
                renderItem={renderPro}
                numColumns = {numColumns}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#000080",
        marginLeft: 5,
    },
    searchbar: {
        backgroundColor: "white",
        borderWidth: 1,
        height: 40,
        padding: 10,
        margin: 5,
        borderRadius: 10
    }
});

export default App;
