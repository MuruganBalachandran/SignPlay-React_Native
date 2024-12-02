// utils/customStyles.js

import { StyleSheet } from 'react-native';
import Colors from './colors';
import Fonts from './Fonts';

const CustomStyles = StyleSheet.create({
  // Common background style
  background: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    padding: 16,
  },

  // Label style
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.black,
    marginBottom: 8,
  },

  // Input/Field style for forms
  formField: {
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.black,
  },

  // Button style
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },

  // Button Text style
  buttonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: Colors.white,
  },

  // Error Text style
  errorText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.error,
    marginTop: 4,
  },

  // Success Text style
  successText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.success,
    marginTop: 4,
  },

  // Common container style
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 16,
  },
});

export default CustomStyles;
