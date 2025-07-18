// import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Image, Alert, ActivityIndicator } from 'react-native'
// import React, { useState } from 'react'
// import { useRouter } from 'expo-router';
// import {auth}  from '../config/Firebase';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isFocused, setIsFocused] = useState(false);
//   const router = useRouter()
 

//   const handleSignIn = async () =>{

//     SetLoading(true);
//     try {
//       response = await signInWithEmailAndPassword(auth,email,password);
//       router.push("../(drawer)/(tabs)")

//       console.log(response);
//     } catch (error) {
//       alert('Sign In Failed ' + error.message);
//     }finally{
//       SetLoading(false);
//     }

//   }
//   const handleSignUp = async () =>{
//     SetLoading(true);
//     try {
//      const response = await createUserWithEmailAndPassword(auth,email,password);
//        console.log("✅ Login successful:", response.user.uid);
//       router.replace("/(drawer)"); // go to main app

//     } catch (error) {
//       alert('Sign In Failed' + error.Message());
//     }finally{
//       SetLoading(false);
//     }

//   };//end of handleSignIn

//   return (
//     <KeyboardAvoidingView behavior="padding" style={styles.container}>
      
//       {/* HEADER */}
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Quora</Text>
//       </View>

//       {/* INPUT SECTION */}
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Email..."
//           value={email}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           onChangeText={setEmail}
//           style={styles.inputText}
//           keyboardType="email-address"

//         />
//         <TextInput
//         // style={[styles.input, isFocused && styles.inputFocused]}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           style={[styles.inputText, isFocused && styles.inputFocused ]}
//         />

//         {/* BUTTONS */}
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button}
//           onPress={handleSignIn}
//           >
//             <Text style={styles.buttonTextLight}>Login</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={[styles.button, styles.buttonOutline]}
//             onPress={handleSignUp}>
//             <Text style={styles.buttonTextOutline}>Register</Text>
//           </TouchableOpacity>

//           <View style = {styles.buttonContainerLogo}>
//             <TouchableOpacity style={styles.buttonLogo}>
//               <Image source={require('../../assets/_Google.jpeg')} style={styles.icon}/>
//               <Text style={styles.buttonTextLight}>Login with Google</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={[styles.buttonLogo, styles.buttonOutline]}>
//               <Image source={require('../../assets/facebook.jpeg')} style={styles.icon}/>
//               <Text style={styles.buttonTextOutline}>Login with facebook</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#dcdde1',
//     paddingHorizontal: 20,
//   },
//   header: {
//     backgroundColor: '#ff4757',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     height: 200,
//     marginBottom: 30,
//     borderRadius: 20,
//   },
//   headerText: {
//     fontSize: 48,
//     fontWeight: 'bold',
//     color: '#f5f6fa',
//   },
//   inputContainer: {
//     width: '100%',
//     alignItems: 'center',
//   },
//   inputText: {
//     width: '90%',
//     marginVertical: 8,
//     paddingHorizontal: 15,
//     paddingVertical: 12,
//     backgroundColor: '#f5f6fa',
//     borderRadius: 10,
//     fontSize: 16,
//   },
//   buttonContainer: {
//     width: '90%',
//     marginTop: 30,
//     justifyContent:'center',
    
//   },
//   buttonContainerLogo: {
//     width: '100%',
//     marginTop: 30,
//     justifyContent:'center',
//     alignItems: "center",
    
//   },
//   button: {
//     backgroundColor: '#ff4757',
//     paddingVertical: 14,
//     paddingHorizontal:13,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginVertical: 5,
//   },
//   buttonLogo: {
//     flexDirection:'row',
//     backgroundColor: '#ff4757',
//     paddingVertical: 10,
//     paddingHorizontal:13,
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent:'center',
//     marginVertical: 5,
//     width: "100%"
//   },
//   buttonOutline: {
//     backgroundColor: '#f1f2f6',
//     borderColor: '#ff4757',
//     borderWidth: 2,
//   },
//   buttonTextLight: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   buttonTextOutline: {
//     color: '#ff4757',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   inputFocused: {
//     borderColor: '#3498db', // blue highlight
//     shadowColor: '#3498db',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 4, // for Android shadow
//   },
//   icon:{
//     width:35,
//     height: 35,
//     borderRadius: 10,
//     marginRight: 6,
//   }
// });

// app/AuthScreens/Login.tsx
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { auth } from "../config/Firebase"; // Ensure this is correct
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ Login successful:", response.user.uid);
      router.replace("../(drawer)"); // go to main app
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("✅ User created:", response.user.uid);
      router.replace("../(drawer)/(tabs)/Home/Home.tsx");
    } catch (error) {
      Alert.alert("Registration Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Quora</Text>
      </View>

      {/* INPUT SECTION */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email..."
          value={email}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={setEmail}
          style={styles.inputText}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={[styles.inputText, isFocused && styles.inputFocused]}
        />

        {/* BUTTONS */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSignIn}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonTextLight}>Login</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonOutline]}
            onPress={handleSignUp}
            disabled={loading}
          >
            <Text style={styles.buttonTextOutline}>Register</Text>
          </TouchableOpacity>

          <View style={styles.buttonContainerLogo}>
            <TouchableOpacity style={styles.buttonLogo} disabled>
              <Image
                source={require("../../assets/_Google.jpeg")}
                style={styles.icon}
              />
              <Text style={styles.buttonTextLight}>Login with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonLogo, styles.buttonOutline]}
              disabled
            >
              <Image
                source={require("../../assets/facebook.jpeg")}
                style={styles.icon}
              />
              <Text style={styles.buttonTextOutline}>Login with Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dcdde1',
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#ff4757',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
    marginBottom: 30,
    borderRadius: 20,
  },
  headerText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#f5f6fa',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  inputText: {
    width: '90%',
    marginVertical: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: '#f5f6fa',
    borderRadius: 10,
    fontSize: 16,
  },
  buttonContainer: {
    width: '90%',
    marginTop: 30,
    justifyContent:'center',
    
  },
  buttonContainerLogo: {
    width: '100%',
    marginTop: 30,
    justifyContent:'center',
    alignItems: "center",
    
  },
  button: {
    backgroundColor: '#ff4757',
    paddingVertical: 14,
    paddingHorizontal:13,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonLogo: {
    flexDirection:'row',
    backgroundColor: '#ff4757',
    paddingVertical: 10,
    paddingHorizontal:13,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center',
    marginVertical: 5,
    width: "100%"
  },
  buttonOutline: {
    backgroundColor: '#f1f2f6',
    borderColor: '#ff4757',
    borderWidth: 2,
  },
  buttonTextLight: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextOutline: {
    color: '#ff4757',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputFocused: {
    borderColor: '#3498db', // blue highlight
    shadowColor: '#3498db',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4, // for Android shadow
  },
  icon:{
    width:35,
    height: 35,
    borderRadius: 10,
    marginRight: 6,
  }
});
