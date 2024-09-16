import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome5'; 

const Menu = [
  {
  id: 1,
  menu: "My Services",
  submenu: [
    {
      name: "My Bookings",
      icon: <FontAwesome name="calendar-check" size={20} color="#676BB3" />, 
      route: "MyOrders"
  },
  {
      name: "My Paint Orders",
      icon: <FontAwesome name="paint-brush" size={20} color="#676BB3" />, 
      route: "MyPaintOrders"
  },
  {
      name: "My Plans Orders",
      icon: <FontAwesome name="clipboard-list" size={20} color="#676BB3" />, 
      route: "MyPlansOrders"
  },
  {
      name: "My Property Listing",
      icon: <FontAwesome name="city" size={20} color="#676BB3" />, 
      route: "MyListings"
  }
  ]
},
  {
    id: 2,
    menu: "BROKERFREE Wallet",
    submenu: [
      { name: "Wallet Summary", icon: <Ionicons name="book-outline" size={20} color="#000" />, route: "WalletSummary" },
      { name: "RewardsNew", icon: <FontAwesome name="hand-holding-usd" size={20} color="#000" />, route: "RewardsNew" }
    ]
  },
  {
    id: 3,
    menu: "Residential Plans",
    submenu: [
      { name: "For Owner", icon: <FontAwesome name="user-tie" size={20} color="#000" />, route: "OwnerPlans" },
      { name: "For Sellers", icon: <Ionicons name="person-add-outline" size={20} color="#000" />, route: "SellerPlans" },
      { name: "For Tenants", icon: <FontAwesome name="user" size={20} color="#000" />, route: "TenantPlans" }, // Route for Tenant
      { name: "For Buyers", icon: <FontAwesome name="shopping-cart" size={20} color="#000" />, route: "BuyerPlans" }
    ]
  },
  {
    id: 4,
    menu: "Commercial Plans",
    submenu: [
      { name: "For Owner", icon: <FontAwesome name="user-tie" size={20} color="#000" />, route: "CommercialOwnerPlans" },
      { name: "For Sellers", icon: <Ionicons name="person-add-outline" size={20} color="#000" />, route: "CommercialSellerPlans" },
      { name: "For Tenants", icon: <FontAwesome name="user" size={20} color="#000" />, route: "CommercialTenantPlans" },
      { name: "For Buyers", icon: <FontAwesome name="shopping-cart" size={20} color="#000" />, route: "CommercialBuyerPlans" }
    ]
  },
  {
    id: 5,
    menu: "Home Services",
    submenu: [
      { name: "Packers and Movers", icon: <FontAwesome name="truck" size={20} color="#000" />, route: "PackersMovers" },
      { name: "Painting", icon: <FontAwesome name="paint-roller" size={20} color="#000" />, route: "PaintingServices" },
      { name: "Cleaning", icon: <FontAwesome name="tools" size={20} color="#000" />, route: "CleaningServices" },
      { name: "Interiors", icon: <Ionicons name="home-outline" size={20} color="#000" />, route: "InteriorServices" },
      { name: "Furniture", icon: <Ionicons name="construct-outline" size={20} color="#000" />, route: "FurnitureServices" }
    ]
  },
  {
    id: 6,
    menu: "BROKERFREE Pay",
    submenu: [
      { name: "Pay Your Rent", icon: <FontAwesome name="file-signature" size={20} color="#000" />, route: "PayRent" },
      { name: "Deposit Payment", icon: <FontAwesome name="file-contract" size={20} color="#000" />, route: "DepositPayment" },
      { name: "Maintenance Payments", icon: <Ionicons name="construct-outline" size={20} color="#000" />, route: "MaintenancePayments" },
      { name: "Bill Payments", icon: <FontAwesome name="file-alt" size={20} color="#000" />, route: "BillPayments" }
    ]
  },
  {
    id: 7,
    menu: "Legal Assistance & Loan",
    submenu: [
      { name: "Rental Agreement", icon: <FontAwesome name="file-contract" size={20} color="#000" />, route: "RentalAgreement" },
      { name: "Police Intimation", icon: <Ionicons name="chatbox-outline" size={20} color="#000" />, route: "PoliceIntimation" },
      { name: "Tenant Verification", icon: <Ionicons name="book-outline" size={20} color="#000" />, route: "TenantVerification" },
      { name: "Property Legal Assistance", icon: <FontAwesome name="handshake" size={20} color="#000" />, route: "PropertyLegalAssistance" },
      { name: "Home Loan", icon: <FontAwesome name="file-alt" size={20} color="#000" />, route: "HomeLoan" },
      { name: "Home Deposit Loan", icon: <FontAwesome name="file-invoice-dollar" size={20} color="#000" />, route: "HomeDepositLoan" }
    ]
  },
  {
    id: 8,
    menu: "Utilities",
    submenu: [
      { name: "Know Your Rent", icon: <FontAwesome name="receipt" size={20} color="#000" />, route: "KnowRent" },
      { name: "Create Rent Receipts", icon: <FontAwesome name="receipt" size={20} color="#000" />, route: "CreateRentReceipts" },
      { name: "Click & Earn", icon: <FontAwesome name="hand-holding-usd" size={20} color="#000" />, route: "ClickAndEarn" }
    ]
  },
  {
    id: 9,
    menu: "Help & Support",
    submenu: [
      { name: "Support Topics", icon: <Ionicons name="chatbox-outline" size={20} color="#000" />, route: "SupportTopics" },
      { name: "Blog", icon: <Ionicons name="book-outline" size={20} color="#000" />, route: "Blog" },
      { name: "Feedback", icon: <Ionicons name="chatbubble-ellipses-outline" size={20} color="#000" />, route: "Feedback" },
      { name: "About Us", icon: <Ionicons name="chatbubble-ellipses-outline" size={20} color="#000" />, route: "AboutUs" },
      { name: "Chat With Us", icon: <Ionicons name="chatbox-outline" size={20} color="#000" />, route: "ChatWithUs" }
    ]
  }
];

export default Menu;
