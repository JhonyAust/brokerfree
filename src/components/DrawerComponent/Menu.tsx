import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'; // For 'Bi' icons
import FontAwesome from 'react-native-vector-icons/FontAwesome5'; // For 'Fa' icons

const Menu = [
  {
    id: 1,
    menu: "MAcash Wallet",
    submenu: [
      { name: "Wallet Summary", icon: <Ionicons name="book-outline" size={20} color="#000" /> },
      { name: "RewardsNew", icon: <FontAwesome name="hand-holding-usd" size={20} color="#000" /> }
    ]
  },
  {
    id: 2,
    menu: "Residential Plans",
    submenu: [
        { name: "For Owner", icon: <FontAwesome name="user-tie" size={20} color="#000" /> }, // Icon for Owner
        { name: "For Sellers", icon: <Ionicons name="person-add-outline" size={20} color="#000" /> },  // Icon for Seller
        { name: "For Tenants", icon: <FontAwesome name="user" size={20} color="#000" /> },    // Icon for Tenant
        { name: "For Buyers", icon: <FontAwesome name="shopping-cart" size={20} color="#000" /> } // Icon for Buyer
      ]
  },
  {
    id: 3,
    menu: "Commercial Plans",
    submenu: [
        { name: "For Owner", icon: <FontAwesome name="user-tie" size={20} color="#000" /> }, // Icon for Owner
        { name: "For Sellers", icon: <Ionicons name="person-add-outline" size={20} color="#000" /> },  // Icon for Seller
        { name: "For Tenants", icon: <FontAwesome name="user" size={20} color="#000" /> },    // Icon for Tenant
        { name: "For Buyers", icon: <FontAwesome name="shopping-cart" size={20} color="#000" /> } // Icon for Buyer
      ]
  },
  {
    id: 4,
    menu: "Home Services",
    submenu: [
      { name: "Packers and Movers", icon: <FontAwesome name="truck" size={20} color="#000" /> },
      { name: "Painting", icon: <FontAwesome name="paint-roller" size={20} color="#000" /> },
      { name: "Cleaning", icon: <FontAwesome name="tools" size={20} color="#000" /> },
      { name: "Interiors", icon: <Ionicons name="home-outline" size={20} color="#000" /> },
      { name: "Furniture", icon: <Ionicons name="construct-outline" size={20} color="#000" /> }
    ]
  },
  {
    id: 5,
    menu: "NoBroker Pay",
    submenu: [
      { name: "Pay Your Rent", icon: <FontAwesome name="file-signature" size={20} color="#000" /> },
      { name: "Deposit Payment", icon: <FontAwesome name="file-contract" size={20} color="#000" /> },
      { name: "Maintenance Payments", icon: <Ionicons name="construct-outline" size={20} color="#000" /> },
      { name: "Bill Payments", icon: <FontAwesome name="file-alt" size={20} color="#000" /> }
    ]
  },
  {
    id: 6,
    menu: "Legal Assistance & Loan",
    submenu: [
      { name: "Rental Agreement", icon: <FontAwesome name="file-contract" size={20} color="#000" /> },
      { name: "Police Intimation", icon: <Ionicons name="chatbox-outline" size={20} color="#000" /> },
      { name: "Tenant Verification", icon: <Ionicons name="book-outline" size={20} color="#000" /> },
      { name: "Property Legal Assistance", icon: <FontAwesome name="handshake" size={20} color="#000" /> },
      { name: "Home Loan", icon: <FontAwesome name="file-alt" size={20} color="#000" /> },
      { name: "Home Deposit Loan", icon: <FontAwesome name="file-invoice-dollar" size={20} color="#000" /> }
    ]
  },
  {
    id: 7,
    menu: "Utilities",
    submenu: [
      { name: "Know Your Rent", icon: <FontAwesome name="receipt" size={20} color="#000" /> },
      { name: "Create Rent Receipts", icon: <FontAwesome name="receipt" size={20} color="#000" /> },
      { name: "Click & Earn", icon: <FontAwesome name="hand-holding-usd" size={20} color="#000" /> }
    ]
  },
  {
    id: 8,
    menu: "Help & Support",
    submenu: [
      { name: "Support Topics", icon: <Ionicons name="chatbox-outline" size={20} color="#000" /> },
      { name: "Blog", icon: <Ionicons name="book-outline" size={20} color="#000" /> },
      { name: "Feedback", icon: <Ionicons name="chatbubble-ellipses-outline" size={20} color="#000" /> },
      { name: "About Us", icon: <Ionicons name="chatbubble-ellipses-outline" size={20} color="#000" /> },
      { name: "Chat With Us", icon: <Ionicons name="chatbox-outline" size={20} color="#000" /> }
    ]
  }
];

export default Menu;
