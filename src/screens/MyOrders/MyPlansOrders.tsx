import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import OrderProgress from '../../components/MyOrders/OrderProgress';
const MyPlansOrders = () => {
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('http://10.0.2.2:3000/api/orders/myplans-orders');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Response Data', data);
                setOrders(data);
            } catch (error) {
                setError('Failed to fetch orders');
                console.error('Failed to fetch orders', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#007A6F" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.centered}>
                <Text>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Plans Orders</Text>
            {orders && orders.length === 0 ? (
                <Text>No orders found</Text>
            ) : (
                <FlatList
                    data={orders}
                    keyExtractor={(order) => order._id}
                    renderItem={({ item: order }) => (
                        <View style={styles.orderContainer}>
                            <Text style={styles.orderId}>Order #{order._id}</Text>
                            <View style={styles.orderProgress}>
                                <OrderProgress status={order.status} /> 
                            </View>
                            <View style={styles.orderDetails}>
                                <Text style={styles.subTitle}>Items:</Text>
                                {order.items ? (
                                    <FlatList
                                        data={order.items}
                                        keyExtractor={(item, index) => index.toString()}
                                        renderItem={({ item }) => (
                                            <Text>
                                                {item.title} - {item.newCost} BDT
                                            </Text>
                                        )}
                                    />
                                ) : (
                                    <Text>{order.planName}</Text>
                                )}
                                <Text style={styles.totalAmount}>
                                    Total Amount: ${order.totalAmount}
                                </Text>
                                <Text style={styles.subTitle}>Shipping Details:</Text>
                                <View style={styles.shippingDetails}>
                                    <Text>Name: {order.shippingDetails.name}</Text>
                                    <Text>Email: {order.shippingDetails.email}</Text>
                                    <Text>Phone Number: {order.shippingDetails.phoneNumber}</Text>
                                    <Text>Address: {order.shippingDetails.address}</Text>
                                    {order.shippingDetails.message && (
                                        <Text>Message: {order.shippingDetails.message}</Text>
                                    )}
                                </View>
                            </View>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    orderContainer: {
        padding: 16,
        marginBottom: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    orderProgress: {
        
    },
    orderId: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    orderDetails: {
        marginTop: 12,
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    totalAmount: {
        fontWeight: 'bold',
        marginTop: 8,
    },
    shippingDetails: {
        marginTop: 4,
    },
});

export default MyPlansOrders;
