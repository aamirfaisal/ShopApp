import { StyleSheet } from "react-native";
import { COLOR, FONT } from "../../../enums/StyleGuide";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    PawImage: {
        position: 'absolute',
        height: 260,
        width: 280,
        alignSelf: 'flex-end'
    },
    BoneImage: {
        position: 'absolute',
        height: 180,
        width: 180,
        bottom: 0,
    },
    LogoStyle: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: '5%'
    },
    WelcomeLabel: {
        fontSize: 24,
        fontFamily: FONT.regular,
        color: COLOR.primary,
        textAlign: 'center',
        marginTop: '10%'
    },
    LoginLabel: {
        fontSize: 20,
        fontFamily: FONT.semiBold,
        color: COLOR.dark,
        textAlign: 'center'
    },
    EmailLabel: {
        fontSize: 14,
        color: COLOR.dark,
        fontFamily: FONT.semiBold,
        paddingLeft: '7%',
        marginTop: '3%',
    },
    InputStyle: {
        width: '86%',
        height: 42,
        marginTop: '1%'
    },
    InputIconStyle: {
        height: 18,
        width: 18,
    },
    ForgetLabel: {
        fontSize: 14,
        color: COLOR.red,
        fontFamily: FONT.regular,
        textAlign: 'center',
        marginTop: '15%'
    },
    ButtonStyle: {
        width: '55%',
        borderRadius: 100,
        marginTop: '8%'
    },
    ButtonLabelStyle: {
        fontSize: 14,
        color: COLOR.white,
        fontFamily: FONT.semiBold,
    },
    FooterSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginTop: '43%',
        marginBottom: '10%'
    },
    AccountLabel: {
        fontSize: 12,
        color: COLOR.dark,
    },
    SignupLabel: {
        fontSize: 12,
        color: COLOR.dark,
        fontFamily: FONT.bold
    },

});