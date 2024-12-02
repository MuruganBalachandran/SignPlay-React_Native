import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import Colors from '../../Utils/Colors'
import Fonts from '../../Utils/Fonts' // Import the Fonts file

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const validateLogin = () => {
    if (!email || !password) {
      setError('Please fill in both fields.')
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email.')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.')
      return
    }
    // On successful validation, proceed
    Alert.alert('Login Successful!')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={validateLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.switchScreenText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  title: {
    ...Fonts.title, // Use custom font style
    color: Colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: Colors.lightGray,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    fontSize: 16,
    fontFamily: Fonts.paragraph.fontFamily, // Use custom font
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 30,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    ...Fonts.medium, // Use custom font style
  },
  errorText: {
    color: Colors.error,
    marginBottom: 10,
    textAlign: 'center',
    ...Fonts.paragraph, // Use custom font
  },
  switchScreenText: {
    textAlign: 'center',
    color: Colors.primary,
    marginTop: 10,
    ...Fonts.paragraph, // Use custom font
  },
  forgotPasswordText: {
    textAlign: 'center',
    color: Colors.success,
    marginTop: 10,
    ...Fonts.paragraph, // Use custom font
  },
})
