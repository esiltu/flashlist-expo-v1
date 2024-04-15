import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FlashList } from "@shopify/flash-list";
import getProducts from "../api/GetProducts";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <FlashList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text>Price: ${item.price}</Text>
            <Text>Category: {item.category}</Text>
            <Text>Description: {item.description}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={150} // Adjust based on your actual item size
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  productContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontWeight: "bold",
  },
});
