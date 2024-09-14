import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'; // For 'Bi' icons
import FontAwesome from 'react-native-vector-icons/FontAwesome5'; // For 'Fa' icons

const Menu = [
  {
    id: 1,
    menu: "MAcash Wallet",
    submenu: [
      { name: "Wallet Summary", icon: <Ionicons name="book-outline" size={20} color="#000" />, route: "WalletSummary" },
      { name: "RewardsNew", icon: <FontAwesome name="hand-holding-usd" size={20} color="#000" />, route: "RewardsNew" }
    ]
  },
  {
    id: 2,
    menu: "Residential Plans",
    submenu: [
      { name: "For Owner", icon: <FontAwesome name="user-tie" size={20} color="#000" />, route: "OwnerPlans" },
      { name: "For Sellers", icon: <Ionicons name="person-add-outline" size={20} color="#000" />, route: "SellerPlans" },
      { name: "For Tenants", icon: <FontAwesome name="user" size={20} color="#000" />, route: "TenantPlans" }, // Route for Tenant
      { name: "For Buyers", icon: <FontAwesome name="shopping-cart" size={20} color="#000" />, route: "BuyerPlans" }
    ]
  },
  {
    id: 3,
    menu: "Commercial Plans",
    submenu: [
      { name: "For Owner", icon: <FontAwesome name="user-tie" size={20} color="#000" />, route: "CommercialOwnerPlans" },
      { name: "For Sellers", icon: <Ionicons name="person-add-outline" size={20} color="#000" />, route: "CommercialSellerPlans" },
      { name: "For Tenants", icon: <FontAwesome name="user" size={20} color="#000" />, route: "CommercialTenantPlans" },
      { name: "For Buyers", icon: <FontAwesome name="shopping-cart" size={20} color="#000" />, route: "CommercialBuyerPlans" }
    ]
  },
  {
    id: 4,
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
    id: 5,
    menu: "BROKERFREE Pay",
    submenu: [
      { name: "Pay Your Rent", icon: <FontAwesome name="file-signature" size={20} color="#000" />, route: "PayRent" },
      { name: "Deposit Payment", icon: <FontAwesome name="file-contract" size={20} color="#000" />, route: "DepositPayment" },
      { name: "Maintenance Payments", icon: <Ionicons name="construct-outline" size={20} color="#000" />, route: "MaintenancePayments" },
      { name: "Bill Payments", icon: <FontAwesome name="file-alt" size={20} color="#000" />, route: "BillPayments" }
    ]
  },
  {
    id: 6,
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
    id: 7,
    menu: "Utilities",
    submenu: [
      { name: "Know Your Rent", icon: <FontAwesome name="receipt" size={20} color="#000" />, route: "KnowRent" },
      { name: "Create Rent Receipts", icon: <FontAwesome name="receipt" size={20} color="#000" />, route: "CreateRentReceipts" },
      { name: "Click & Earn", icon: <FontAwesome name="hand-holding-usd" size={20} color="#000" />, route: "ClickAndEarn" }
    ]
  },
  {
    id: 8,
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
