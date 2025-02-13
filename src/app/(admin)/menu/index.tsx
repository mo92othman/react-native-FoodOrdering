import { StyleSheet, ScrollView, FlatList  } from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';

// MenuScreen Component
const MenuScreen = () => {
  return (
    // <ScrollView contentContainerStyle={styles.container}>
    //   {products.map((product, index) => (
    //     <ProductListItem key={index} product={product} />
    //   ))}
    // </ScrollView>

    <FlatList
    data={products} 
    renderItem={({ item }) => ( 
      <ProductListItem key={item.id} product={item} /> 
    )}
    // keyExtractor={(item) => item.id}
    numColumns={2}
    contentContainerStyle={{gap: 10}}
    columnWrapperStyle={{gap: 10}}
  />
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
  }
});

export default MenuScreen;