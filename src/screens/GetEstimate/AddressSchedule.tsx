import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import DateTimePicker from '@react-native-community/datetimepicker';

type AddressScheduleScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddressSchedule'>;
type AddressScheduleScreenRouteProp = RouteProp<RootStackParamList, 'AddressSchedule'>;

interface Props {
  navigation: AddressScheduleScreenNavigationProp;
  route: AddressScheduleScreenRouteProp;
}

const AddressSchedule: React.FC<Props> = ({ navigation }) => {
  const [address, setAddress] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleNext = () => {
    const datetime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      time.getHours(),
      time.getMinutes(),
    );
    const dateTime = datetime.toISOString();
    navigation.navigate('ShareDetails', { address, dateTime });
  };

  // Show Date Picker
  const showDateSelector = () => setShowDatePicker(true);

  // Show Time Picker
  const showTimeSelector = () => setShowTimePicker(true);

  const onDateChange = (event: any, selectedDate?: Date) => {
    if (event.type === 'set' && selectedDate) {
      setDate(selectedDate);
    }
    setShowDatePicker(false); // Close the picker after selection
  };

  const onTimeChange = (event: any, selectedTime?: Date) => {
    if (event.type === 'set' && selectedTime) {
      setTime(selectedTime);
    }
    setShowTimePicker(false); // Close the picker after selection
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Select Schedule & Service Location</Text>
      <View style={styles.scheduleContainer}>
        <Text style={styles.scheduleTitle}>Schedule Your Service</Text>

        <TouchableOpacity onPress={showDateSelector} style={styles.input}>
          <Text style={styles.dateTimeText}>
            {date ? date.toLocaleDateString() : 'Select Date'}
          </Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onDateChange}
          />
        )}

        <TouchableOpacity onPress={showTimeSelector} style={styles.input}>
          <Text style={styles.dateTimeText}>
            {time ? time.toLocaleTimeString() : 'Select Time'}
          </Text>
        </TouchableOpacity>

        {showTimePicker && (
          <DateTimePicker
            value={time}
            mode="time"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onTimeChange}
          />
        )}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter Address"
        value={address}
        onChangeText={setAddress}
      />

      <View style={styles.contactSection}>
        <Icon name="user" size={30} color="#007A6F" />
        <Text style={styles.contactText}>Need Help? Get help with your property assistant</Text>
        <View style={styles.phoneContainer}>
          <Icon name="phone" size={20} color="#007A6F" />
          <Text style={styles.phoneNumber}>+1234567890</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.nextButton, !address && styles.disabledButton]}
        onPress={handleNext}
        disabled={!address}
      >
        <Text style={styles.nextButtonText}>SAVE & CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2,
    padding: 20,
    backgroundColor: '#fff',
  },
  mainTitle: {
    paddingVertical: 40,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  scheduleContainer: {
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    marginBottom: 16,
  },
  scheduleTitle: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    borderBottomColor: '#007A6F',
    borderBottomWidth: 2,
    padding: 10,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    marginTop: 20,
    borderRadius: 8,
    justifyContent: 'center',
  },
  dateTimeText: {
    fontSize: 16,
    color: 'gray',
  },
  nextButton: {
    backgroundColor: '#007A6F',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  disabledButton: {
    backgroundColor: '#67bcb4',
  },
  contactSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: '#DBF2FF',
    borderRadius: 8,
    marginTop: 30,
  },
  contactText: {
    fontSize: 16,
    flex: 1,  // Takes 50% of the space
    marginLeft: 20,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,  // Takes 50% of the space
    justifyContent: 'flex-end',
  },
  phoneNumber: {
    fontSize: 16,
    color: '#007A6F',
    marginLeft: 8,
  },
});

export default AddressSchedule;
