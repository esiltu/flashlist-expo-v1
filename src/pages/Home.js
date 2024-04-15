import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
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
    <SafeAreaView style={styles.container}>
      <FlashList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>Price: ${item.price}</Text>
              <Text style={styles.category}>Category: {item.category}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={300} // Increased size due to additional content and styling
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Light grey background
  },
  productContainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff", // White background for each product
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10, // Rounded corners for the image
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007BFF", // Blue color for price
  },
  category: {
    fontSize: 14,
    color: "#606060", // Grey color for category
  },
  description: {
    fontSize: 12,
    color: "#404040", // Darker text for description
  },
});
