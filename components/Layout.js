import React from "react";
import { View, StyleSheet } from "react-native";

const Layout = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111f2a",
    flex: 1,
    alignItems: "center",
  },
});

export default Layout;
