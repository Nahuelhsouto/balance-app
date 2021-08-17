import React, { useState, useEffect } from "react";
import { getTransac, deleteTran } from "../api";
import { FlatList, RefreshControl } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  const [transac, setTransac] = useState([]);
  const [refresing, setRefresing] = useState(false);

  const isFocused = useIsFocused();
  const loadTransac = async () => {
    const data = await getTransac();
    setTransac(data);
  };
  useEffect(() => {
    loadTransac();
  }, [isFocused]);

  const handleDelete = async (id) => {
    await deleteTran(id);
    await loadTransac();
  };
  const renderItem = ({ item }) => {
    return <TransactionItem transac={item} handleDelete={handleDelete} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadTransac();
    setRefresing(false);
  });
  return (
    <FlatList
      style={{ width: "80%" }}
      data={transac}
      keyExtractor={(item) => item.id + ""}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={refresing}
          colors={["#982aff"]}
          onRefresh={onRefresh}
        />
      }
    />
  );
};

export default TransactionList;
