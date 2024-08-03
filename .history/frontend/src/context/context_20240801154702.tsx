"use client"
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { getSessionId } from '@/utils/session';
import { subtle } from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import { isStoreOpen } from '@/utils/storeHours';

// Define the type for the context value
export interface CartItemType {
  name: string;
  price: number;
  quantity: number;
}

interface AppContextType {
  loginClicked: boolean;
  setLoginClicked: React.Dispatch<React.SetStateAction<boolean>>;
  userLoggedIn: boolean;
  setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userEmail: string;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  userFirstName: string;
  setUserFirstName: React.Dispatch<React.SetStateAction<string>>;
  userLastName: string;
  setUserLastName: React.Dispatch<React.SetStateAction<string>>;
  userPhoneNumber: string;
  setUserPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  cartItems: CartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
  subTotal: number;
  setSubTotal: React.Dispatch<React.SetStateAction<number>>;
  guestFirstName: string;
  setGuestFirstName: React.Dispatch<React.SetStateAction<string>>;
  guestLastName: string;
  setGuestLastName: React.Dispatch<React.SetStateAction<string>>;
  guestEmail: string;
  setGuestEmail: React.Dispatch<React.SetStateAction<string>>;
  guestPhoneNumber: string;
  setGuestPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  payOnline: boolean,
  setPayOnline:React.Dispatch<React.SetStateAction<boolean>>;
  setTipPercent:React.Dispatch<React.SetStateAction<number>>;
  tipPercent:number,
  sessionId:string,
  setSessionId:React.Dispatch<React.SetStateAction<string>>;
  orderInProgress:boolean;
  setOrderInProgress:React.Dispatch<React.SetStateAction<boolean>>;
  orderStatus:string;
  setOrderStatus:React.Dispatch<React.SetStateAction<string>>;
  isMobile:boolean,
  setIsMobile:React.Dispatch<React.SetStateAction<boolean>>
  storeOpen:boolean,
  setStoreOpen:React.Dispatch<React.SetStateAction<boolean>>


}


// Create the context
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state for login and user status
  const [loginClicked, setLoginClicked] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]); 
  const [subTotal, setSubTotal] = useState(0);
  const [guestFirstName, setGuestFirstName] = useState('');
  const [guestLastName, setGuestLastName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhoneNumber, setGuestPhoneNumber] = useState('');
  const [tipPercent, setTipPercent] = useState(0);
  const [payOnline, setPayOnline] = useState(false)
  const [sessionId, setSessionId] = useState('')
  const [orderInProgress, setOrderInProgress] = useState(false)
  const [orderStatus,setOrderStatus] = useState('Pending')

  const [isMobile, setIsMobile] = useState(false)
  const [storeOpen, setStoreOpen] = useState(true)

 

  useEffect(() => {
    // Define a function to calculate the store's open status
    const checkStoreStatus = () => {
      const storeOpenCalculation = isStoreOpen();
      setStoreOpen(storeOpenCalculation);
      console.log('Store open:', storeOpenCalculation); // Log the latest calculation
    };
  
    // Initial check
    checkStoreStatus();
  
    // Set up an interval to recalculate the store status every minute
    const intervalId = setInterval(checkStoreStatus, 60000); // Check every minute
  
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(()=>{
    const handleScroll = () => {
      setIsMobile(window.innerWidth <= 655)
    }
    window.addEventListener('scroll',handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

    useEffect(() => {
      // Check if a sessionId already exists in localStorage
      let existingSessionId = localStorage.getItem('sessionId');
      if (!existingSessionId) {
        // Create a new session ID if one doesn't exist
        const newSessionId = uuidv4();
        setSessionId(newSessionId);
        localStorage.setItem('sessionId', newSessionId);
        console.log('New session started:', newSessionId);
      } else {
        // Set the existing session ID
        setSessionId(existingSessionId);
        console.log('Existing session resumed:', existingSessionId);
      }
    }, []);
    

  // const saveCartToLocalStorage = (items:CartItemType[], price:number) => {
  //   localStorage.setItem('cartItems', JSON.stringify(items));
  //   localStorage.setItem('totalPrice', JSON.stringify(price));

    


  //   const loadCartFromLocalStorage = () => {

      
  //     const savedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]') as CartItemType[];
  //     const savedTotalPrice = JSON.parse(localStorage.getItem('totalPrice') || '0');
  //     setCartItems(savedCartItems);
  //     setTotalPrice(savedTotalPrice);
  //   };
  
  // //   // Load cart data from local storage when the component mounts
  //   useEffect(() => {
  //     loadCartFromLocalStorage();
  //   }, []);
  
  //   // Save cart data to local storage whenever cartItems or totalPrice change
  //   useEffect(() => {
  //     saveCartToLocalStorage(cartItems, totalPrice);
  //   }, [cartItems, totalPrice]);
  // };



  useEffect(() => {
    if (orderStatus === 'Completed') {
      // Reset the states
      setTotalPrice(0);
      setSubTotal(0);
      setCartItems([]);
      setOrderInProgress(false);
  
      // Clear relevant data from localStorage
      localStorage.removeItem('cartItems');
      localStorage.removeItem('totalPrice');
      localStorage.removeItem('subTotal');
      localStorage.removeItem('orderId');
      localStorage.removeItem('orderInProgress');
      localStorage.removeItem('sessionId'); // Clear old session ID
  
      // Create a new session ID
      const newSessionId = uuidv4();
      setSessionId(newSessionId);
      localStorage.setItem('sessionId', newSessionId);
      sessionStorage.clear();
  
      console.log('Order completed, data reset, and new session started.');
    }
  }, [orderStatus]);

  
  // useEffect(() => {
  //   const combinedCartItems = cartItems.reduce((acc: CartItemType[], item) => {
  //     const existingItem = acc.find(accItem => accItem.name === item.name);
  
  //     if (existingItem) {
  //       existingItem.quantity += item.quantity;
  //     } else {
  //       acc.push({ ...item });
  //     }
  
  //     return acc;
  //   }, []);
  
  //   // Calculate the new subtotal and total price
  //   const newSubTotal = combinedCartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  //   const newTotalPrice = newSubTotal * 1.15; // Adjust for tax or other fees if needed
  
  //   setCartItems(combinedCartItems);
  //   setSubTotal(newSubTotal);
  //   setTotalPrice(newTotalPrice);
  
  //   // Update local storage
  //   localStorage.setItem('cartItems', JSON.stringify(combinedCartItems));
  //   localStorage.setItem('subTotal', JSON.stringify(newSubTotal));
  //   localStorage.setItem('totalPrice', JSON.stringify(newTotalPrice));
  
  // }, [cartItems]);
  

  


  useEffect(()=>{
    setTotalPrice(subTotal * 1.15)
    console.log('total price was updated',totalPrice)
  },[subTotal])





  const contextValue = {
    loginClicked,
    setLoginClicked,
    userLoggedIn,
    setUserLoggedIn,
    userEmail,
    setUserEmail,
    userFirstName,
    setUserFirstName,
    userLastName,
    setUserLastName,
    userPhoneNumber,
    setUserPhoneNumber,
    totalPrice,
    setTotalPrice,
    cartItems,
    setCartItems,
    subTotal,
    setSubTotal,
    guestFirstName,
    setGuestFirstName,
    guestLastName,
    setGuestLastName,
    guestEmail,
    setGuestEmail,
    guestPhoneNumber,
    setGuestPhoneNumber,
    tipPercent,
    setTipPercent,
    payOnline,
    setPayOnline,
    sessionId,
    setSessionId,
    orderInProgress,
    setOrderInProgress,
    orderStatus,
    setOrderStatus,
    isMobile,
    setIsMobile,
    storeOpen,
    setStoreOpen
    
  };
  

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

// Custom hook to use context
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};