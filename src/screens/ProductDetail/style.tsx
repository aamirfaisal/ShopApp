import { StyleSheet } from "react-native";
import { COLOR, commonStyles, FONT, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide'

export const styles = StyleSheet.create({
    Container: {
        ...commonStyles.mainContainer
    },
    Header: {
        position: 'absolute',
        left: wp(5)
    },
    IconStyle: {
        width: 33,
        height: 31,
        marginLeft: hp(2.5),
        marginTop: hp(2.8)
    },
    ProductContainer: {
        alignItems: 'center',
        marginTop: hp(5)
    },
    TitleLabel: {
        ...TEXT_STYLE.smallTitleBold,
        color: COLOR.dark,
        width: wp(60),
        textAlign: 'center',
        position: 'absolute',
        zIndex: 2
    },
    RingContainer: {
        width: hp(53.5),
        height: hp(53.5),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(4.4)
    },
    ProductImage: {
        width: hp(32.6),
        height: hp(32.6),
        resizeMode: 'contain',
    },
    SizeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(6)
    },
    SizeLabel: {
        fontFamily: FONT.bold,
        fontSize: 21,
        color: COLOR.dark
    },
    AddFav: {
        width: hp(5.5),
        height: hp(5.5),
        borderRadius: hp(5.5) / 2,
        ...commonStyles.center,
        ...commonStyles.shadow_2,
        backgroundColor: COLOR.green_01,
    },
    heartStyle: {
        width: hp(3),
        height: hp(3),
        resizeMode: 'contain',
        top: 1
    },
    CounterContainer: {
        ...commonStyles.justifyView,
        marginTop: hp(3.5),
        paddingHorizontal: wp(6),
    },
    PriceLabel: {
        fontFamily: FONT.bold,
        fontSize: 25,
        color: COLOR.dark
    },
    DescLabel: {
        fontFamily: FONT.bold,
        fontSize: 23,
        color: COLOR.dark,
        marginTop: hp(3),
        marginLeft: wp(6)
    },
    Description: {
        ...TEXT_STYLE.bigText_2,
        color: COLOR.dark,
        textAlign: 'justify',
        width: wp(87),
        alignSelf: 'center'
    },
    BottomBar: {
        height: hp(9.5),
        width: wp(100),
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        ...commonStyles.shadow_1,
        ...commonStyles.justifyView,
        paddingHorizontal: wp(8)

    },
    CartStyle: {
        width: wp(27),
        height: hp(7),
        borderRadius: hp(10),
        ...commonStyles.justifyView,
        borderWidth: 1,
        backgroundColor: COLOR.white,
        borderColor: COLOR.primary,
        paddingHorizontal: wp(3.8)
    },
    BuyButton: {
        width: wp(48),
        borderRadius: 30,
    }
})