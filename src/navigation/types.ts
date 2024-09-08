// src/navigation/types.ts
export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
  Profile: undefined;
  PaintServices:undefined;
  Search: undefined;
  Listings: { searchQuery: string }; 
  MainTabs: { screen?: string };
  Filter: undefined;
  Plus:undefined;
  ListingConfirmation:undefined;
  Services:undefined;
  AddressSchedule: undefined; // No params passed
  ShareDetails: { address: string; dateTime:string }; 
  Address: undefined; // No params passed
  Details: { address: string; saleOrRent: 'sale' | 'rent' }; // Params passed from Address screen
  Types: { 
    address: string; 
    saleOrRent: 'sale' | 'rent'; 
    name: string; 
    description: string; 
    price: number; 
    offerPrice?: number; 
    discountPrice?: number; 
  }; // Params passed from Details screen
  UploadImages: {
    address: string; 
    saleOrRent: 'sale' | 'rent'; 
    name: string; 
    description: string; 
    price: number; 
    offerPrice?: number; 
    discountPrice?: number; 
    furnished: boolean; 
    parking: boolean; 
    bathrooms: number; 
    bedrooms: number;
  }; // Params passed from Types screen
};
