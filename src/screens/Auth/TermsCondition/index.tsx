import { Image, ImageBackground, View } from 'react-native'
import React, { useState } from 'react'
import { IMAGES } from '../../../assests/images'
import { useNavigation } from '@react-navigation/native'
import { styles } from './style'
import { Button, Label, Pressable } from '../../../components'
import { COLOR } from '../../../enums/StyleGuide'
import { Checkbox } from 'react-native-paper'

const TermsCondition = () => {
    const navigation = useNavigation()
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    return (
        <View style={styles.container}>
            <ImageBackground source={IMAGES.Paw} style={styles.PawImage} />
            <ImageBackground source={IMAGES.Bone} style={styles.BoneImage} />

            <Image source={IMAGES.DoubleTick} style={styles.DoubleTickIcon} />
            <Label style={styles.TermsConditionLabel}>Term & conditions</Label>
            <Label style={styles.TermsConditionDescription}>
                The Customer agrees that Foree may use,
                process and/or host customer confidential
                information/data such as CNIC, Bank
                Account Number & other bank account
                credentials and Contact Number etc..{'\n'}{'\n'}

                The Customer also agrees that Foree has
                the debit authority; Foree may debit money
                from customer account/wallet/card etc.
                for the processing of transactions.{'\n'}{'\n'}
                <Pressable>
                    <Label style={styles.TermsConditionDescription2}>
                        Read full Terms & Conditions
                    </Label>
                </Pressable>
            </Label>

            <View style={styles.CheckBoxSection}>
                <Checkbox status={checked1 ? 'checked' : 'unchecked'} onPress={() => setChecked1(!checked1)} color={COLOR.primary} uncheckedColor={COLOR.dark} />
                <Label style={styles.CheckBoxLabel}>I agree with the Terms and Conditions</Label>
            </View>
            <View style={styles.CheckBoxSection}>
                <Checkbox status={checked2 ? 'checked' : 'unchecked'} onPress={() => setChecked2(!checked2)} color={COLOR.primary} uncheckedColor={COLOR.dark} />
                <Label>I agree with Foree <Label style={styles.PrivacyLabel}>Privacy Policy</Label></Label>
            </View>

            <Button
                title='Continue'
                style={styles.ButtonStyle}
                textStyle={styles.ButtonLabelStyle}
                onPress={() => navigation.navigate('BottomBarNavigation')}
            />

        </View>
    )
}

export default TermsCondition
