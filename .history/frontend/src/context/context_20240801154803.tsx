"use client"
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';


// Define the type for the context value
export interface CartItemType {
  name: string;
  price: number;
  quantity: number;
}

interface AppContextType {

  isMobile:boolean,
  setIsMobile:React.Dispatch<React.SetStateAction<boolean>>
}


// Create the context
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state for login and user status
  

  const [isMobile, setIsMobile] = useState(false)


 



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