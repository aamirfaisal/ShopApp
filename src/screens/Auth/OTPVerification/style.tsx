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
  OTPLabel: {
    fontSize: 46,
    fontFamily: FONT.medium,
    color: COLOR.primary,
    textAlign: 'center',
    marginTop: '24%'
  },
  PLeasePinLabel: {
    fontSize: 20,
    color: COLOR.black_1,
    fontFamily: FONT.medium,
    textAlign: 'center'
  },
  ButtonStyle: {
    width: '55%',
    borderRadius: 100,
    marginTop: '30%'
  },
  ButtonLabelStyle: {
    fontSize: 14,
    color: COLOR.white,
    fontFamily: FONT.semiBold,
  },
  OTPSectionStyling: {
    flexDirection: 'row',
    gap: 25,
    justifyContent: 'center',
    marginTop: '40%',
},
OTPInputTextStyling: {
    width: 35,
    borderColor: COLOR.dark,
    borderBottomWidth: 5,
    textAlign: 'center',
    fontSize: 24,
    color: COLOR.black_1,
    fontFamily: FONT.semiBold,
},
});