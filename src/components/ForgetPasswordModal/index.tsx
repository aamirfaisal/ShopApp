import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Label } from '../reuseables'
import { COLOR, FONT } from '../../enums/StyleGuide'
import { ForgetPasswordModalProps } from '../../enums/Types'

const ForgetPasswordModal = (props: ForgetPasswordModalProps) => {
    const { visible, onRequestClose, onPressYes, onPressNo } = props
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onRequestClose}
        >
            <View style={{ justifyContent: 'center', flex: 1, backgroundColor: '#000000aa' }}>
                <View style={styles.ModalContainerStyling}>

                    <Label style={styles.ModalLabel}>Are you sure. You want to Forgot your password</Label>
                    <View style={styles.ModalButonSection}>
                        <Button title='YES' style={styles.ModalButtonStyle} textStyle={styles.ModalButtonLabel} onPress={onPressYes} />
                        <Button title='NO' style={styles.ModalButtonStyle} textStyle={styles.ModalButtonLabel} onPress={onPressNo} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ForgetPasswordModal

const styles = StyleSheet.create({
    ModalContainerStyling: {
        backgroundColor: COLOR.white,
        borderRadius: 17,
        paddingHorizontal: '5%',
        paddingVertical: '9%',
        width: '95%',
        alignSelf: 'center'
    },
    ModalLabel: {
        fontSize: 20,
        fontFamily: FONT.regular,
        color: COLOR.dark,
        textAlign: 'center',
    },
    ModalButonSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: '20%'
    },
    ModalButtonStyle: {
        width: '29%',
        height: 42,
        borderRadius: 16
    },
    ModalButtonLabel: {
        fontSize: 20,
        color: COLOR.white,
        fontFamily: FONT.medium,
    }
})