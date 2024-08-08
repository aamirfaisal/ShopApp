import { StyleSheet } from "react-native";
import { COLOR, FONT } from "../../enums/StyleGuide";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    PlacePic: {
        height: 170,
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: '50%'
    },
    OrderPlaceLabel: {
        fontSize: 24,
        fontFamily: FONT.regular,
        color: COLOR.dark,
        textAlign: 'center',
        marginTop: '3%'
    },
    OrderSuccessfullyLabel: {
        fontSize: 14,
        fontFamily: FONT.regular,
        color: COLOR.black_50,
        textAlign: 'center',
        marginTop: '4%'
    },
    ButtonStyle: {
        width: '50%',
        borderRadius: 100,
        marginTop: '16%',
        backgroundColor: COLOR.lightgreen_2
    },
    ButtonLabelStyle: {
        fontSize: 14,
        color: COLOR.white,
        fontFamily: FONT.semiBold,
    },
});