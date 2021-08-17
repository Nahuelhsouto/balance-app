import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Layout from "../components/Layout";
import DateTimePicker from "@react-native-community/datetimepicker";
import { saveTransac, getTransac } from "../api";
const TransacScreen = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [transac, setTransac] = useState({
    title: "",
    valor: "",
    fecha: date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay(),
    //    fecha: date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay(),
  });
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const handleChange = (name, value) =>
    setTransac({ ...transac, [name]: value });

  const handleSubmit = async () => {
    // console.log(transac);

    saveTransac(transac);

    navigation.navigate("HomeScreen");
  };

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({ headerTitle: "Editar Transaccion" });
      (async () => {
        const trans = await getTransac(route.params.id);

        setTransac({
          title: trans.title,
          valor: trans.valor,
          fecha: trans.fecha,
        });
        console.log(transac);
      })();
    }
  }, []);
  return (
    <Layout>
      <TextInput
        style={styles.ini}
        placeholder="¿En qué gastaste?"
        placeholderTextColor="#546574"
        onChangeText={(text) => handleChange("title", text)}
        value={transac.title}
      />
      <TextInput
        style={styles.in}
        placeholder="¿Cuánto gastaste?"
        placeholderTextColor="#546574"
        onChangeText={(text) => handleChange("valor", text)}
        // value={transac.valor}
      />

      <TouchableOpacity onPress={showDatepicker} style={styles.in}>
        <TextInput
          style={{
            color: "#ffffff",
            textAlign: "center",
            marginTop: 10,
          }}
          editable={false}
        >
          {date + ""}
        </TextInput>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}

      <TouchableOpacity style={styles.but} onPress={handleSubmit}>
        <Text style={{ color: "#ffffff", textAlign: "center" }}>Guardar</Text>
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  in: {
    width: "80%",
    color: "#ffffff",
    height: 50,
    borderWidth: 5,
    marginTop: 10,
    borderColor: "#982aff",
    textAlign: "center",
    borderRadius: 15,
  },
  ini: {
    width: "80%",
    color: "#ffffff",
    height: 50,
    borderWidth: 5,
    marginTop: 10,
    borderColor: "#982aff",
    textAlign: "center",
    borderRadius: 15,
  },
  but: {
    marginTop: 10,
    borderRadius: 10,
    width: "80%",
    backgroundColor: "#982aff",
    padding: 20,
  },
});

export default TransacScreen;
