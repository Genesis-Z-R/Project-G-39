import React, { useEffect, useState } from 'react';
import { Stack, useRouter} from 'expo-router';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from "./config/Firebase"
import {User} from 'firebase/auth'
import { View, ActivityIndicator} from 'react-native' 

export default function RootLayout() {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  
  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
