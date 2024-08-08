import { Image, ImageBackground, View } from 'react-native'
import React from 'react'
import { Button, Input, Label, Scrollable } from '../../../components'
import { IMAGES } from '../../../assests/images'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
import { SCREEN } from '../../../enums/AppEnums'

const ForgetPassword = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>

      <ImageBackground source={IMAGES.Paw} style={styles.PawImage} />
      <ImageBackground source={IMAGES.Bone} style={styles.BoneImage} />

      <Label style={styles.ForgetPasswordLabel}>Forgot your password</Label>

      <Label style={styles.EmailLabel}>E-mail</Label>
      <Input
        placeholder={''}
        keyboardType='email-address'
        style={styles.InputStyle}
        addLeft={
          <Image source={IMAGES.Email} style={styles.InputIconStyle} />
        }
      />

      <Button
        title='Continue'
        style={styles.ButtonStyle}
        textStyle={styles.ButtonLabelStyle}
        onPress={() => navigation.navigate(SCREEN.OTPVERIFICATION)}
      />

    </View>
  )
}

export default ForgetPassword
