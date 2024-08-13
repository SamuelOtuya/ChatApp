import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

// Import your global CSS file
import "../global.css"
import { router, Slot, useSegments } from 'expo-router'
import { AuthContextProvider, useAuth } from '../context/authContext'

const MainLayout =() => {
  const {isAuthenticated} = useAuth();
  const segments = useSegments();

  useEffect(()=>{
    //check if user is authenticated or not
    if(typeof isAuthenticated=='undefined')return;
    const inApp=segments[0]=='(app)';
    if(isAuthenticated && !inApp){
      //redirect to home
      router.replace('home');
    }else if(isAuthenticated==false){
      //redirect to sign in
      router.replace('signIn')
    }
  },[isAuthenticated])

  return <Slot/>
}

export default function RootLayout() {
  return (
   <AuthContextProvider>
    <MainLayout/>
   </AuthContextProvider> 
  )
}