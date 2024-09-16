import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const steps = [
    'Order Received',
    'Consultation',
    'Confirmed',
    'Completed',
    'Cancelled',
];

const getStatusIndex = (status: string) => {
    return steps.indexOf(status);
};

const OrderProgress = ({ status }: { status: string }) => {
    const statusIndex = getStatusIndex(status);

    return (
        <View style={styles.progressWrapper}>
            <View style={styles.progressContainer}>
                {steps.map((step, index) => {
                    // Skip the "Cancelled" step if the status is not "Cancelled"
                    if (step === 'Cancelled' && status !== 'Cancelled') {
                        return null;
                    }

                    // Skip the "Completed" step if the status is "Cancelled"
                    if (step === 'Completed' && status === 'Cancelled') {
                        return null;
                    }

                    return (
                        <View key={index} style={styles.stepContainer}>
                            <View style={styles.circleAndLineContainer}>
                                <View
                                    style={[
                                        styles.circle,
                                        index <= statusIndex
                                            ? (status === 'Cancelled' ? styles.cancelledCircle : styles.activeCircle)
                                            : (status === 'Cancelled' ? styles.cancelledInactiveCircle : styles.inactiveCircle),
                                    ]}
                                >
                                    <View
                                        style={[
                                            styles.innerCircle,
                                            index <= statusIndex
                                                ? styles.activeInnerCircle
                                                : styles.inactiveInnerCircle,
                                        ]}
                                    />
                                </View>

                                {/* Line rendering logic */}
                                {index <= steps.length - 1 && (
                                    <View
                                        style={[
                                            styles.line,
                                            (index < steps.length - 2 && index < statusIndex) 
                                                ? (status === 'Cancelled' ? styles.cancelledLine : styles.activeLine) 
                                                : styles.inactiveLine,
                                            (index === steps.length - 2 && status !== 'Cancelled') 
                                                && (index < statusIndex ? styles.activeLine2 : styles.inactiveLine2),
                                            (index === steps.length - 2 && step === 'Completed' && status === 'Cancelled') 
                                                && (index < statusIndex ? styles.cancelledLine : styles.cancelledInactiveLine),
                                            (index === steps.length - 1 && status === 'Cancelled') 
                                                && (index < statusIndex ? styles.cancelledLine : styles.cancelledInactiveLine),
                                        ]}
                                    />
                                )}
                            </View>
                            <Text style={styles.stepText}>{step}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    progressWrapper: {
        alignItems: 'center', // Center the progress bar 
        width: '100%',
    },
    progressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        marginBottom: 16,
    },
    stepContainer: {
        
    },
    circleAndLineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeCircle: {
        backgroundColor: '#06ad1f', // Active green color
    },
    inactiveCircle: {
        backgroundColor: '#CFFFE1', // Inactive light green color
    },
    cancelledCircle: {
        backgroundColor: '#FF0000', // Red for "Cancelled" status
    },
    cancelledInactiveCircle: {
        backgroundColor: '#FFCCCC', // Lighter red for inactive "Cancelled" status
    },
    innerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    activeInnerCircle: {
        backgroundColor: '#fff', // White for inner circle when active
    },
    inactiveInnerCircle: {
        backgroundColor: '#fff', // White for inner circle when inactive
    },
    line: {
        width: 60, // Line width
        height: 2, // Line height
    },
    activeLine: {
        backgroundColor: '#06ad1f', // Active line color (green)
    },
    inactiveLine: {
        backgroundColor: '#CFFFE1', // Inactive line color (light green)
    },
    activeLine2: {
        backgroundColor: '#ffff', // Active second type line color
    },
    inactiveLine2: {
        backgroundColor: '#ffff', // Inactive second type line color
    },
    cancelledLine: {
        backgroundColor: '#FF0000', // Active line for "Cancelled" status
    },
    cancelledInactiveLine: {
        backgroundColor: '#ffff', // Inactive line for "Cancelled" status
    },
    stepText: {
        marginTop: 8,
        fontSize: 9,
        textAlign: 'left',
        flexWrap: 'wrap',
    },
});

export default OrderProgress;
