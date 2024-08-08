import { Dimensions, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const WIDTH = Dimensions.get('window').width
export const HEIGHT = Dimensions.get('window').height

export const ACTIVE_OPACITY = 0.5
export const BACKDROP_OPACITY = 0.2

export const COLOR = {
    white: '#ffffff',
    dark: '#000000',
    primary: '#3D8C89',
    red: '#F63535',
    black_1: '#0A0A0A',
    darkgreen: '#186562',
    lightGrey: 'rgba(228, 228, 228, 0.83)',
    grey_1: '#7D7B7B',
    gray_06: 'rgba(41, 39, 39, 0.6)',
    white_2: '#EFF2F2',
    lightgreen: '#ECF7FA',
    lightgreen_2: '#61B5B2',
    lightgreen_3: '#61B6B3',
    green_01: '#D1F0EF',
    black_64: 'rgba(0, 0, 0, 0.64)',
    black_50: 'rgba(0, 0, 0, 0.51)',
}

export const FONT = {
    regular: 'Lato-Regular',
    bold: 'Lato-Bold',
    semiBold: 'Lato-Semibold',
    medium: 'Lato-Medium',
}

export const TEXT_STYLE = StyleSheet.create({
    smallTitleMedium: {
        fontFamily: FONT.medium,
        fontSize: 20,
    },
    smallTitleBold: {
        fontFamily: FONT.bold,
        fontSize: 20,
    },
    smallTitleSemiBold: {
        fontFamily: FONT.semiBold,
        fontSize: 20,
    },
    largeTitleSemiBold: {
        fontFamily: FONT.semiBold,
        fontSize: 28,
    },
    bigText: {
        fontFamily: FONT.regular,
        fontSize: 18,
    },
    bigTextSemiBold: {
        fontFamily: FONT.semiBold,
        fontSize: 18,
    },
    bigTextMedium: {
        fontFamily: FONT.medium,
        fontSize: 18,
    },
    bigTextBold: {
        fontFamily: FONT.bold,
        fontSize: 18,
    },
    bigTextBold_2: {
        fontFamily: FONT.bold,
        fontSize: 15,
    },
    bigTextMedium_2: {
        fontFamily: FONT.medium,
        fontSize: 15,
    },
    bigText_2: {
        fontFamily: FONT.regular,
        fontSize: 15,
    },
    text: {
        fontFamily: FONT.regular,
        fontSize: 13,
    },
    textSemiBold: {
        fontFamily: FONT.semiBold,
        fontSize: 13,
    },
    textMedium: {
        fontFamily: FONT.medium,
        fontSize: 13,
    },
    textBold: {
        fontFamily: FONT.bold,
        fontSize: 13,
    },
    smallText: {
        fontFamily: FONT.regular,
        fontSize: 12,
    },
    smallTextSemiBold: {
        fontFamily: FONT.semiBold,
        fontSize: 12,
    },
    smallTextMedium: {
        fontFamily: FONT.medium,
        fontSize: 12,
    },
    smallTextBold: {
        fontFamily: FONT.bold,
        fontSize: 12,
    },
})

export const commonStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    horizontalView: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    horizontalView_m05: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: '1%',
    },
    horizontalView_m1: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: '1.5%',
    },
    justifyView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    justifyView_m05: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: '.5%',
    },
    justifyView_m1: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: '1%',
    },
    justifyView_m2: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: '2.5%',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow_1: {
        shadowColor: COLOR.dark,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    shadow_2: {
        shadowColor: COLOR.dark,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    shadow_8: {
        shadowColor: COLOR.dark,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export { wp, hp }