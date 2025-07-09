
import { Stack } from 'expo-router';

export default function RootLayout() {


  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(AuthScreens)" />  {/* Auth Flow */}
      <Stack.Screen name="(drawer)" />      {/* Main App */}

      <Stack.Screen name="AuthScreens/LoginScreen" />
      <Stack.Screen name="AuthScreens/RegisterScreen" />
      <Stack.Screen name="AuthScreens/PasswordReset" />

      <Stack.Screen
        name="modals/EditProfile"
        options={{
          presentation: 'modal',       // Important: makes it appear as a modal
          headerTitle: 'Edit Profile',  // Optional: show title at the top of the modal
        }}
      />
    </Stack>
  );
}

// import React, { useEffect, useState } from 'react';
// import { Stack, router } from 'expo-router';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './config/Firebase';
// import { ActivityIndicator, View } from 'react-native';

// export default function RootLayout() {
//   const [checkingAuth, setCheckingAuth] = useState(true);
//   const [user, setUser] = useState<any>(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setCheckingAuth(false);

//       if (currentUser) {
//         // ✅ Redirect to main app drawer if logged in
//         router.replace('/(drawer)/Profile');
//       } else {
//         // ✅ Redirect to Login if not logged in
//         router.replace('/AuthScreens/LoginScreen');
//       }
//     });

//     return unsubscribe;
//   }, []);

//   if (checkingAuth) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       {/* Auth Screens */}
//       <Stack.Screen name="AuthScreens/LoginScreen" />
//       <Stack.Screen name="AuthScreens/RegisterScreen" />
//       <Stack.Screen name="AuthScreens/PasswordReset" />

//       {/* Main App Drawer */}
//       <Stack.Screen name="(drawer)" />

//       {/* Modals */}
//       <Stack.Screen
//         name="modals/editProfile"
//         options={{
//           presentation: 'modal',
//           headerTitle: 'Edit Profile',
//         }}
//       />
//     </Stack>
//   );
// }
