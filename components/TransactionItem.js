import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TransactionItem = ({ transac, handleDelete }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("TransacScreen", { id: transac.id })}
      >
        <Text style={styles.iTitle}>Gasto en {transac.title}</Text>
        <Text style={styles.iTitle}>Gastado {transac.valor}</Text>
        <Text style={styles.iTitle}>
          Realizado el{" "}
          {JSON.stringify(new Date(transac.fecha).toLocaleDateString())}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(transac.id)}>
        <Text
          style={{
            color: "#ffffff",
            borderRadius: 50,
            height: 20,
            width: 15,
            textAlign: "center",
          }}
        >
          x
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#222222",
    padding: 20,
    marginVertical: 10,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iTitle: {
    textAlign: "center",
    color: "#ffffff",
  },
});

export default TransactionItem;
