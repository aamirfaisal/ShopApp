import { Image, ImageBackground, View } from 'react-native'
import React, { useState } from 'react'
import { IMAGES } from '../../../assests/images'
import { AnyIcon, Button, Input, Label, Pressable, Scrollable } from '../../../components'
import { SCREEN } from '../../../enums/AppEnums'
import { errorToast, successToast } from '../../../utils/Toast'
import { api } from '../../../api'
import { url } from '../../../api/urls'
import { isEmailValid, isStrongPassword } from '../../../utils/Helper'
import { ICONS } from '../../../assests/icons'
import { COLOR } from '../../../enums/StyleGuide'
import { styles } from './style'

const Signup = (props: any) => {
  const { navigation } = props
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [securePassword, setSecurePassword] = useState(true)
  const [loading, setLoading] = useState(false)

  const validateFields = () => {
    if (!userName || !email || !password || !phone) {
      errorToast('Please fill all fields!')
      return false
    }
    if (userName.length > 20) {
      errorToast('Username must be less than 20 characters!')
      return false
    }
    if (!isEmailValid(email)) {
      errorToast('Invalid email address!')
      return false
    }
    if (!isStrongPassword(password)) {
      errorToast('Password must be at least 6 characters long and include one uppercase letter, one special character, and one number!')
      return false
    }
    return true
  }

  const signupUser = async () => {
    if (!validateFields()) {
      return
    }
    setLoading(true)
    try {
      const response = await api.post(url.UserSignup, {
        name: userName,
        email: email,
        password: password,
        phone: phone
      })
      if (response.data.status == true) {
        successToast(response.data.message)
        navigation.navigate(SCREEN.LOGIN)
      } else {
        successToast(response.data.message)
      }
      console.log('signup response :: ', response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Scrollable>

        <ImageBackground source={IMAGES.Paw} style={styles.PawImage} />
        <ImageBackground source={IMAGES.Bone} style={styles.BoneImage} />

        <Label style={styles.WelcomeLabel}>WELCOME</Label>
        <Label style={styles.LoginLabel}>Create your account</Label>

        <View style={{ marginTop: '12%' }}>
          <Label style={styles.EmailLabel}>Username:</Label>
          <Input
            placeholder={''}
            keyboardType='default'
            style={styles.InputStyle}
            value={userName}
            onChange={(x: string) => setUserName(x)}
            addLeft={
              <Image source={IMAGES.USer} style={styles.InputIconStyle} />
            }
          />

          <Label style={styles.EmailLabel}>E-mail:</Label>
          <Input
            placeholder={''}
            keyboardType='email-address'
            style={styles.InputStyle}
            value={email}
            onChange={(x: string) => setEmail(x)}
            addLeft={
              <Image source={IMAGES.Email} style={styles.InputIconStyle} />
            }
          />

          <Label style={styles.EmailLabel}>Phone:</Label>
          <Input
            placeholder={''}
            keyboardType='number-pad'
            style={styles.InputStyle}
            value={phone}
            onChange={(x: string) => setPhone(x)}
            addLeft={
              <AnyIcon name={'phone'} color={COLOR.dark} size={20} type={ICONS.FontAwesome}/>
            }
          />

          <Label style={styles.EmailLabel}>Password:</Label>
          <Input
            style={styles.InputStyle}
            placeholder={''}
            secureText={securePassword}
            value={password}
            onChange={(e: string) => setPassword(e)}
            onRightPress={() => setSecurePassword(!securePassword)}
            addRight={
              <Image source={securePassword ? IMAGES.EyeOff : IMAGES.EyeShow}
                resizeMode='contain'
                style={securePassword ? styles.InputIconStyle : styles.InputIconStyle}
              />
            }
            addLeft={
              <Image source={IMAGES.Lock} style={styles.InputIconStyle} />
            }
          />
        </View>


        <Button title='SIGNUP'
          style={styles.ButtonStyle}
          textStyle={styles.ButtonLabelStyle}
          isLoading={loading}
          onPress={() => signupUser()} />

        <View style={styles.FooterSection}>
          <Label style={styles.AccountLabel}>Already have an account?</Label>
          <Pressable onPress={() => navigation.navigate(SCREEN.LOGIN)}>
            <Label style={styles.SignupLabel}>Login in</Label>
          </Pressable>
        </View>

      </Scrollable>
    </View>
  )
}

export default Signup