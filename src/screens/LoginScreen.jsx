import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from '../Firebase/Firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

// const validationSchema = Yup.object().shape({

//   email: Yup.string()

//     .label('Email')

//     .email('Enter a valid email')

//     .required('Please enter a registered email')

// });
const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const navigation = useNavigation()
    
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          navigation.navigate("HomeScreen")
        }
      })
  
      return unsubscribe
    }, [])
    goToRegister = () => {
      navigation.navigate("Register")
    }
    goToForgotPassword = () => {
      navigation.navigate('ForgotPassword');
    }
  
   
    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('Logged in with:', user.email);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
  >
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
      />
      <View style={{left: 5, display: 'flex', flexDirection: 'row'}}> 
      <Text>
        Dont have an account?
      </Text>
      <TouchableOpacity style={{left: 10}} onPress={goToRegister}> 
        <Text style={{color: 'blue'}}>
          Register
        </Text>
      </TouchableOpacity>

    </View>
    <TouchableOpacity style={{left: 80}} onPress={goToForgotPassword}> 
        <Text style={{color: 'blue'}}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

    </View>
    
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

    </View>
  </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
  })