import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import Colors from '../../Utils/Colors'
import Fonts from '../../Utils/Fonts' // Import the Fonts file

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const validateSignUp = () => {
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.')
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
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    // On successful validation, proceed
    Alert.alert('Sign Up Successful!')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={validateSignUp} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.switchScreenText}>Already have an account? Login</Text>
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
})
