import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';
import OrderCard from '../components/OrderCard'
const OrderHistory = ({ navigation }) => {
    const orders = [
      { orderId: '#83728932', time: 'Today at 9:00pm', status: 'Packed', statusColor: 'text-orange-800', bgColor: 'bg-orange-100' },
      { orderId: '#5235434', time: 'Today at 8:00pm', status: 'Arrived', statusColor: 'text-sky-800', bgColor: 'bg-sky-200' },
      { orderId: '#5235434', time: 'Today at 6:00pm', status: 'Arrived', statusColor: 'text-yellow-400', bgColor: 'bg-yellow-100' },
      { orderId: '#28932837', time: 'Today at 8:00pm', status: 'Packed', statusColor: 'text-orange-800', bgColor: 'bg-orange-100' },
      { orderId: '#5235434', time: 'Today at 10:00pm', status: 'Arrived', statusColor: 'text-sky-800', bgColor: 'bg-sky-200' },
    ];
  
    return (
      <SafeAreaView className="h-full bg-white">
        <AppBar
          title={'My Order'}
          centerText={'text-start'}
          backButton={'backButton'}
          onBackPress={() => navigation.navigate('DashBoardScreen')}
          showBackButton={true}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', padding: 20 }}>
          {orders.map((order, index) => (
            <OrderCard key={index} {...order} />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default OrderHistory;
  