import { Image, ImageBackground, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Label } from '../../../components'
import { IMAGES } from '../../../assests/images'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'

const PasswordChange = () => {
    const navigation = useNavigation()
    const [securePassword1, setSecurePassword1] = useState(true)
    const [password1, setPassword1] = useState("")
    const [securePassword2, setSecurePassword2] = useState(true)
    const [password2, setPassword2] = useState("")

    return (
        <View style={styles.container}>

            <ImageBackground source={IMAGES.Paw} style={styles.PawImage} />
            <ImageBackground source={IMAGES.Bone} style={styles.BoneImage} />

            <Label style={styles.PasswordTitle}>Password</Label>

            <View>
                <Label style={styles.PasswordLabel}>Password:</Label>
                <Input
                    style={styles.InputStyle}
                    placeholder={''}
                    secureText={securePassword1}
                    value={password1}
                    onChange={(e: string) => setPassword1(e)}
                    onRightPress={() => setSecurePassword1(!securePassword1)}
                    addRight={
                        <Image source={securePassword1 ? IMAGES.EyeOff : IMAGES.EyeShow}
                            resizeMode='contain'
                            style={securePassword1 ? styles.InputIconStyle : styles.InputIconStyle}
                        />
                    }
                    addLeft={
                        <Image source={IMAGES.Lock} style={styles.InputIconStyle} />
                    }
                />
                <Label style={styles.PasswordLabel}>Change Password:</Label>
                <Input
                    style={styles.InputStyle}
                    placeholder={''}
                    secureText={securePassword2}
                    value={password2}
                    onChange={(e: string) => setPassword2(e)}
                    onRightPress={() => setSecurePassword2(!securePassword2)}
                    addRight={
                        <Image source={securePassword2 ? IMAGES.EyeOff : IMAGES.EyeShow}
                            resizeMode='contain'
                            style={securePassword2 ? styles.InputIconStyle : styles.InputIconStyle}
                        />
                    }
                    addLeft={
                        <Image source={IMAGES.Lock} style={styles.InputIconStyle} />
                    }
                />
            </View>

            <Button
                title='Continue'
                style={styles.ButtonStyle}
                textStyle={styles.ButtonLabelStyle}
            />


        </View>
    )
}

export default PasswordChange
