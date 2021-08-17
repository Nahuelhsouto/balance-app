import React from "react";
import TransactionList from "../components/TransactionList";
import Layout from "../components/Layout";
//JSON.stringify(new Date(item.fecha).toLocaleDateString() para la fecha formato
const Homescreen = () => {
  return (
    <Layout>
      <TransactionList />
    </Layout>
  );
};

export default Homescreen;
