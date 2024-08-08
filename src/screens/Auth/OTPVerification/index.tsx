import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Label, Scrollable } from '../../../components'
import { IMAGES } from '../../../assests/images'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
import { SCREEN } from '../../../enums/AppEnums'

const OTPVerification = () => {
  const navigation = useNavigation()
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpInputs = [];

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < 3 && value !== '') {
      otpInputs[index + 1].focus();
    }
  };

  const handleKeyPress = (index, key) => {
    if (key === 'Backspace' && index > 0 && otp[index] === '') {
      otpInputs[index - 1].focus();
    }
  };

  for (let i = 0; i < 4; i++) {
    otpInputs.push(
      <TextInput
        key={i}
        style={styles.OTPInputTextStyling}
        maxLength={1}
        keyboardType="numeric"
        onChangeText={(value) => handleChange(i, value)}
        onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(i, key)}
        value={otp[i]}
        ref={(input) => otpInputs[i] = input}
      />
    );
  }

  return (
    <View style={styles.container}>

      <ImageBackground source={IMAGES.Paw} style={styles.PawImage} />
      <ImageBackground source={IMAGES.Bone} style={styles.BoneImage} />

      <Label style={styles.OTPLabel}>OTP</Label>
      <Label style={styles.PLeasePinLabel}>Please enter your pin</Label>



      <View style={styles.OTPSectionStyling}>
        {otpInputs.map((input, index) => (
          <View key={index}>{input}</View>
        ))}
      </View>

      <Button
        title='Continue'
        style={styles.ButtonStyle}
        textStyle={styles.ButtonLabelStyle}
        onPress={() => navigation.navigate(SCREEN.PASSWORDCHANGE)}
      />

    </View>
  )
}

export default OTPVerification
