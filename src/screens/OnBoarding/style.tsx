import { StyleSheet } from "react-native";
import { COLOR, commonStyles, FONT, HEIGHT, hp, TEXT_STYLE, wp } from "../../enums/StyleGuide";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: hp(3.5)
    },
    TitleText: {
        fontFamily: FONT.bold,
        fontSize: 23,
        color: COLOR.white,
        textAlign: 'center',
        marginTop: hp(6),
    },
    Description: {
        ...TEXT_STYLE.bigText_2,
        color: COLOR.white,
        textAlign: 'center',
        marginTop: hp(1),
        width: wp(85),
        alignSelf: 'center'
    },
    PaginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: hp(5),
        width: wp(100),
        paddingHorizontal: wp(7),
    },
    bottomContainer2: {
        marginTop: hp(2.5),
    },
    PaginationDot: {
        width: hp(1.2),
        height: hp(1.2),
        borderRadius: hp(1.2) / 2,
        backgroundColor: COLOR.grey_1,
        marginHorizontal: 2,
    },
    ActivePaginationDot: {
        backgroundColor: COLOR.primary,
        width: hp(1.2),
        height: hp(1.2),
        borderRadius: hp(1.2) / 2,
    },
    ButtonContainer: {
        height: hp(5),
        width: wp(20),
        backgroundColor: COLOR.primary,
        ...commonStyles.center,
        borderRadius: 15,
    },
    ButtonText: {
        ...TEXT_STYLE.bigTextBold_2,
        color: COLOR.white,
    },
    GetStartedButton: {
        width: wp(43),
        marginTop: hp(2),
        alignSelf: 'center',
        borderRadius: 30
    }
})