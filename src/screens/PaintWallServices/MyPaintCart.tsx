import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { addItemToCart, removeItemFromCart, clearCart } from '../../features/cartSlice';
import { useNavigation } from '@react-navigation/native'; // For navigation
import { RootStackParamList } from '../../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
type MyPaintCartNavigationProp = StackNavigationProp<RootStackParamList, 'ShippingDetails'>;

const MyPaintCart = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<MyPaintCartNavigationProp>();
  const { items, totalAmount } = useSelector((state: RootState) => state.cart);

  const handleAdd = (item: { title: string; newCost: number; actualcost: number }) => {
    const updatedItem = { ...item, newCost: item.actualcost };
    dispatch(addItemToCart(updatedItem));
  };

  const handleRemove = (item: { title: string; newCost: number; actualcost: number }) => {
    const updatedItem = { ...item, newCost: item.actualcost };
    dispatch(removeItemFromCart(updatedItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleContinue = () => {
    navigation.navigate('ShippingDetails', { items, totalAmount }); // Navigate to ShippingDetails
  };

  const renderCartItem = ({ item }: { item: { title: string; newCost: number; actualcost: number } }) => (
    <View style={styles.productRow}>
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.newCost}>{`৳${item.newCost}`}</Text>
      </View>
      <View style={styles.quantityControls}>
        <TouchableOpacity onPress={() => handleRemove(item)} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAdd(item)} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={renderCartItem}
        ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty</Text>}
      />
      <View style={styles.totalAmountContainer}>
        <Text style={styles.totalAmountText}>Total Amount: ৳{totalAmount}</Text>
      </View>
      <TouchableOpacity onPress={handleClearCart} style={styles.clearCartButton}>
        <Text style={styles.clearCartText}>Clear Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleContinue} style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 12,
    paddingRight: 20,
  },
  newCost: {
    fontSize: 16,
    color: '#000',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 2,
    backgroundColor: '#E6F5F3',
    borderColor: '#009587',
    marginHorizontal: 8,
    borderRadius: 4,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    color: '#009587',
  },
  totalAmountContainer: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginBottom: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  totalAmountText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  clearCartButton: {
    backgroundColor: '#FF5C5C',
    paddingVertical: 12,
    borderRadius: 4,
    marginBottom: 16,
  },
  clearCartText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#009587',
    paddingVertical: 12,
    borderRadius: 4,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
});

export default MyPaintCart;
