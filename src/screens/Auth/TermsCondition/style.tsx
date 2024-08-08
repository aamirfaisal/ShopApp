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
  DoubleTickIcon: {
    height: 110,
    width: 135,
    marginLeft: '15%',
    marginTop: '24%'
  },
  TermsConditionLabel: {
    fontSize: 25,
    fontFamily: FONT.bold,
    color: COLOR.dark,
    paddingLeft: '5%',
    marginTop: '3%'
  },
  TermsConditionDescription: {
    fontSize: 16,
    fontFamily: FONT.regular,
    color: COLOR.dark,
    paddingHorizontal: '5%',
    marginTop: '5%',
    marginBottom: '10%'
  },
  TermsConditionDescription2: {
    color: COLOR.primary
  },
  CheckBoxSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: '5%',
    marginTop: '2%'

  },
  CheckBoxLabel: {
    fontSize: 16,
    fontFamily: FONT.regular,
    color: COLOR.dark
  },
  PrivacyLabel: {
    color: COLOR.primary
  },
  ButtonStyle: {
    width: '55%',
    borderRadius: 100,
    marginTop: '15%',
  },
  ButtonLabelStyle: {
    fontSize: 14,
    color: COLOR.white,
    fontFamily: FONT.semiBold,
  },
});