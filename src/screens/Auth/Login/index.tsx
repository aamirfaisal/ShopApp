import { Image, ImageBackground, View } from 'react-native'
import React, { useState } from 'react'
import { IMAGES } from '../../../assests/images'
import { Button, Input, Label, Pressable } from '../../../components'
import { styles } from './style'
import { SCREEN } from '../../../enums/AppEnums'
import ForgetPasswordModal from '../../../components/ForgetPasswordModal'
import { errorToast, successToast } from '../../../utils/Toast'
import { isEmailValid, isStrongPassword } from '../../../utils/Helper'
import { url } from '../../../api/urls'
import { api } from '../../../api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = (props: any) => {
    const { navigation } = props
    const [email, setEmail] = useState("")
    const [securePassword, setSecurePassword] = useState(true)
    const [forgetpasswordmodal, setForgetPasswordModal] = useState(false)
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const validateFields = () => {
        if (!email || !password) {
            errorToast('Please fill all fields!')
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

    const loginUser = async () => {
        if (!validateFields()) {
            return
        }
        setLoading(true)
        try {
            const response = await api.post(url.UserLogin, {
                email: email,
                password: password,
            })
            if (response.data.status == true) {
                successToast(response.data.message)
                AsyncStorage.setItem('UserData', JSON.stringify(response?.data?.AccountInfo));
                AsyncStorage.setItem('UserId', JSON.stringify(response?.data?.AccountInfo?.id));
                AsyncStorage.setItem('Token', JSON.stringify(response?.data?.token))
                navigation.navigate(SCREEN.DrawerNavigation)
            } else {
                successToast(response.data.message)
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={styles.container}>

            <ImageBackground source={IMAGES.Paw} style={styles.PawImage} />
            <ImageBackground source={IMAGES.Bone} style={styles.BoneImage} />


            <Image source={IMAGES.Logo} style={styles.LogoStyle} />

            <Label style={styles.WelcomeLabel}>WELCOME BACK</Label>
            <Label style={styles.LoginLabel}>Login to your account</Label>

            <View style={{ marginTop: '15%' }}>
                <Label style={styles.EmailLabel}>E-mail or phone:</Label>
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

            <Pressable onPress={() => setForgetPasswordModal(true)}>
                <Label style={styles.ForgetLabel}>Forgot Password?</Label>
            </Pressable>
            <Button
                title='LOGIN'
                style={styles.ButtonStyle}
                textStyle={styles.ButtonLabelStyle}
                isLoading={loading}
                onPress={() => loginUser()}
            />

            <View style={styles.FooterSection}>
                <Label style={styles.AccountLabel}>Don’t have an account?</Label>
                <Pressable onPress={() => navigation.navigate(SCREEN.SIGNUP)}>
                    <Label style={styles.SignupLabel}>Sign up</Label>
                </Pressable>
            </View>

            <ForgetPasswordModal
                visible={forgetpasswordmodal}
                onRequestClose={() => setForgetPasswordModal(false)}
                onPressYes={() => [navigation.navigate(SCREEN.FORGETPASSWORD), setForgetPasswordModal(false)]}
                onPressNo={() => setForgetPasswordModal(false)}
            />


        </View>
    )
}

export default Login
