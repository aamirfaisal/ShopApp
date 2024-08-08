import { StyleSheet } from "react-native";
import { COLOR, commonStyles, FONT, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide'

export const styles = StyleSheet.create({
  Container: {
    ...commonStyles.mainContainer
  },
  HeaderText: {
    paddingRight: '8%'
  },
  Loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TopCard: {
    height: hp(27),
    borderRadius: 15,
    ...commonStyles.shadow_8,
    backgroundColor: COLOR.white,
    marginTop: hp(1),
    alignItems: 'center'
  },
  ImageContainer: {
    width: hp(15.2),
    height: hp(13),
    resizeMode: 'contain',
    ...commonStyles.center,
    marginTop: hp(2.5)
  },
  ProfileImage: {
    width: hp(11),
    height: hp(11),
    borderRadius: hp(11) / 2,
    marginTop: hp(2),
    borderWidth: 5,
    borderColor: COLOR.primary
  },
  UserName: {
    fontFamily: FONT.semiBold,
    fontSize: 22,
    color: COLOR.dark,
    marginTop: hp(1)
  },
  Address: {
    ...TEXT_STYLE.bigTextBold_2,
    color: COLOR.gray_06,
  },
  ContentStyle: {
    marginTop: hp(3)
  },
  ButtonCard: {
    width: wp(92),
    alignSelf: 'center',
    ...commonStyles.shadow_2,
    ...commonStyles.justifyView,
    backgroundColor: COLOR.white,
    height: hp(7),
    borderRadius: hp(1.2),
    paddingHorizontal: wp(5),
    marginTop: hp(1.4)
  },
  ArrowIcon: {
    width: 10.92,
    height: 18.84,
    resizeMode: 'contain'
  },
  ButtonLabel: {
    ...TEXT_STYLE.bigTextMedium_2,
    color: COLOR.dark,
  }

})