"use client"
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AppContextType {

  isMobile:boolean,
  setIsMobile:React.Dispatch<React.SetStateAction<boolean>>
  textYPosition:number
  setTextYPosition:React.Dispatch<React.SetStateAction<number>>
  applicationFormState: Record<string, string>;
  setApplicationFormState: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

// Create the context
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state for login and user status
  

  const [isMobile, setIsMobile] = useState(false)
  const [applicationFormState, setApplicationFormState] = useState<Record<string, string>>({});


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


  const [textYPosition, setTextYPosition] = useState(0)

   const contextValue = {
    isMobile,
    setIsMobile,
    textYPosition,
    setTextYPosition,
    applicationFormState,
    setApplicationFormState
   }

    
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