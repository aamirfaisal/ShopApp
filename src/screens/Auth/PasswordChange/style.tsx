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
    PasswordTitle: {
        fontSize: 24,
        fontFamily: FONT.semiBold,
        color: COLOR.black_1,
        textAlign: 'center',
        marginTop: '42%'
    },
    PasswordLabel: {
        fontSize: 14,
        color: COLOR.dark,
        fontFamily: FONT.semiBold,
        paddingLeft: '7%',
        marginTop: '5%',
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
    ButtonStyle: {
        width: '55%',
        borderRadius: 100,
        marginTop: '24%',
        backgroundColor: COLOR.darkgreen
    },
    ButtonLabelStyle: {
        fontSize: 14,
        color: COLOR.white,
        fontFamily: FONT.semiBold,
    },
});