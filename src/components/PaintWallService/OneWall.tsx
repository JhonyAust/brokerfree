import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../features/cartSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

type OneWallNavigationProp = StackNavigationProp<RootStackParamList, 'ShippingDetails'>;

interface Product {
  title: string;
  originalCost: number;
  newCost: number;
}
interface Product2 {
    title: string;
    newCost: number;
    actualcost:number;
  }

const OneWall = ({ closeModal }: { closeModal: () => void }) => {
  const [quantities, setQuantities] = useState(Array(4).fill(0));
  const [cartData, setCartData] = useState<Product2[]>([]);
  const { totalAmount } = useSelector((state: RootState) => state.cart);
  const [totalAmountlocal, setTotalAmountlocal] = useState(0);
  const dispatch = useDispatch();

  const products: Product[] = [
    { title: 'One Wall Tractor Emulsion Double Coat Without Primer', originalCost: 3883, newCost: 2632 },
    { title: 'One Wall Tractor Emulsion Double Coat With Primer', originalCost: 4118, newCost: 2791 },
    { title: 'One Wall Premium Emulsion Double Coat Without Primer', originalCost: 4177, newCost: 2832 },
    { title: 'One Wall Premium Emulsion Double Coat With Primer', originalCost: 4411, newCost: 2990 },
  ];

  const handleAdd = (index: number) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index]++;
    setQuantities(updatedQuantities);
    setCartData(prevCart => [...prevCart, { title: products[index].title, newCost: products[index].newCost,actualcost:products[index].newCost }]);
    setTotalAmountlocal(prevTotal => prevTotal + products[index].newCost);
  };

  const handleRemove = (index: number) => {
    const updatedQuantities = [...quantities];
  
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index]--;
      setQuantities(updatedQuantities);
  
      const selectedProduct = products[index];
  
      setCartData(prevCart => {
        // Find the first matching item and remove only that one
        const itemIndex = prevCart.findIndex(
          item => item.title === selectedProduct.title && item.newCost === selectedProduct.newCost
        );
        
        if (itemIndex !== -1) {
          // Create a shallow copy of the cart
          const updatedCart = [...prevCart];
          updatedCart.splice(itemIndex, 1); // Remove only one occurrence of the item
          return updatedCart;
        }
        return prevCart;
      });
      setTotalAmountlocal(prevTotal => prevTotal - products[index].newCost);
    }
  };
  

  const handleProceed = () => {
    cartData.forEach(item => {
      dispatch(addItemToCart(item));
    });
    console.log(cartData);
    closeModal();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>1 Wall Paint</Text>
      
      {products.map((product, index) => (
        <View key={index} style={styles.productRow}>
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>{product.title}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.originalCost}>{`৳${product.originalCost}`}</Text>
              <Text style={styles.newCost}>{`৳${product.newCost}`}</Text>
            </View>
          </View>

          {quantities[index] === 0 ? (
            <TouchableOpacity
              onPress={() => handleAdd(index)}
              style={styles.addButton}
            >
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.quantityControls}>
              <TouchableOpacity onPress={() => handleRemove(index)} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text>{quantities[index]}</Text>
              <TouchableOpacity onPress={() => handleAdd(index)} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ))}

      <View style={styles.totalamount}>
        <Text style={styles.totalamounttext}>Total Amount:</Text>
        <Text style={styles.totalamountnumber}>৳ {totalAmountlocal}</Text>
        <Text style={styles.totalamountnumber}>Main: ৳ {totalAmount}</Text>
      </View>

      <TouchableOpacity onPress={handleProceed} style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 20,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 12,
    paddingRight: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalCost: {
    textDecorationLine: 'line-through',
    color: '#888',
    marginRight: 8,
  },
  newCost: {
    fontSize: 16,
    color: '#000',
  },
  addButton: {
    backgroundColor: '#E6F5F3',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    borderColor: '#009587',
    borderWidth: 1,
  },
  addButtonText: {
    color: '#009587',
    fontSize: 14,
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
  totalamount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 20,
  },
  totalamountnumber: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalamounttext: {
    fontSize: 18,
  },
  actionButton: {
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#009587',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default OneWall;
