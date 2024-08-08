import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { AnyIcon, Label } from '../reuseables';
import { COLOR, FONT, hp, wp } from '../../enums/StyleGuide';
import { ICONS } from '../../assests/icons';
import { removeItemFromCart } from '../../redux/reducer/CartSlice';
import { useDispatch } from 'react-redux';
import { ImageUrl } from '../../utils/Helper';

const CartList = ({ item, index }: { item: any; index: number }) => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(removeItemFromCart(item.id));
    }
    return (
        <View style={styles.ListBox}>
            <View style={styles.ImageBox}>
                <Image source={{ uri: `${ImageUrl}${item?.image}` }} style={styles.ProductImage} />
            </View>
            <View style={{ width: '56%', marginLeft: wp(3) }}>
                <Label style={styles.FoodTitle}>{item?.name}</Label>
                <Label style={styles.PriceLabel}>{item?.price}</Label>
            </View>
            <AnyIcon
                name={'delete'}
                color={COLOR.primary}
                size={21}
                type={ICONS.MaterialCommunityIcons}
                style={styles.deleteIcon}
                onPress={() => handleDelete()}
            />
            <Label style={styles.QuntityLabel}>{item?.quantity}x</Label>
        </View>
    )
}

export default CartList

const styles = StyleSheet.create({
    ListBox: {
        paddingVertical: '2%',
        width: wp(88),
        backgroundColor: COLOR.white,
        borderRadius: 20,
        elevation: 5,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '4%',
        // justifyContent: 'space-between',
        marginBottom: '3%',
        marginTop: '2%'
    },
    ImageBox: {
        width: 92,
        height: 88,
        backgroundColor: COLOR.white_2,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ProductImage: {
        height: 77,
        width: 77,
        borderRadius:6,
        resizeMode: 'contain'
    },
    FoodTitle: {
        fontSize: 15,
        fontFamily: FONT.semiBold,
        color: COLOR.dark,
    },
    PriceLabel: {
        fontSize: 16,
        fontFamily: FONT.bold,
        color: COLOR.dark
    },
    QuntityLabel: {
        fontSize: 18,
        fontFamily: FONT.medium,
        color: COLOR.dark,
        position: 'absolute',
        right: wp(4),
        bottom: hp(1.5)
    },
    deleteIcon: {
        position: 'absolute',
        right: wp(4),
        top: hp(1.5)
    }
})