import { Modal, StyleSheet, View } from 'react-native'
import React from 'react'
import { AnyIcon, Button, Input, Label } from '../reuseables'
import { COLOR, FONT, hp, wp } from '../../enums/StyleGuide'
import { ICONS } from '../../assests/icons'
import { cartModal } from '../../enums/Types'

const CartModal = (props: cartModal) => {
    const { visible, onClose, addressValue, onAddressChange } = props
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={{ flex: 1, backgroundColor: '#000000aa', justifyContent: 'center', }}>
                <View style={styles.ModalContainerStyling}>
                    <Label style={styles.address}>Address</Label>
                    <AnyIcon
                        name={'circle-with-cross'}
                        color={COLOR.dark}
                        size={21}
                        type={ICONS.Entypo}
                        style={styles.crossIcon}
                        onPress={onClose}
                    />
                    <Input placeholder={'Enter Address'}
                        style={styles.inputStyle}
                        value={addressValue}
                        onChange={onAddressChange} />

                    <Button title='Save'
                        onPress={onClose} />

                </View>
            </View>
        </Modal>
    )
}

export default CartModal

const styles = StyleSheet.create({
    ModalContainerStyling: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: COLOR.white,
        borderRadius: 8,
        paddingVertical: hp(2)
    },
    inputStyle: {
        marginVertical: hp(2.5)
    },
    address: {
        fontSize: 20,
        fontFamily: FONT.bold,
        color: COLOR.dark,
        textAlign: 'center'
    },
    crossIcon: {
        position: 'absolute',
        right: wp(4),
        top: hp(2.1)
    }
})