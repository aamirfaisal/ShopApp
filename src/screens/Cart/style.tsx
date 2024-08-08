import { StyleSheet } from "react-native";
import { COLOR, commonStyles, FONT, hp, wp } from "../../enums/StyleGuide";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white
  },
  HeaderText: {
    paddingRight: '8%'
  },
  itemContainer: {
    ...commonStyles.justifyView,
    marginTop: '5%',
    marginHorizontal: wp(6)
  },
  TotalLabel: {
    fontSize: 18,
    fontFamily: FONT.bold,
    color: COLOR.dark,
  },
  AddressLabel: {
    fontSize: 17,
    fontFamily: FONT.bold,
    color: COLOR.dark,
  },
  ListStyle: {
    marginTop: '3%'
  },


  CartBox: {
    width: '100%',
    backgroundColor: COLOR.lightgreen,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: '8%',
    paddingTop: '8%',
    paddingBottom: '4%',
    position: 'absolute',
    bottom: 0
  },
  CartSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  CartTile: {
    fontSize: 18,
    fontFamily: FONT.semiBold,
    color: COLOR.black_64
  },
  CartTotalLabel: {
    fontSize: 24,
    fontFamily: FONT.bold,
    color: COLOR.dark
  },
  ButtonStyle: {
    width: '65%',
    borderRadius: 100,
    marginTop: '10%',
    backgroundColor: COLOR.lightgreen_2,
    elevation: 5
  },
  ButtonLabelStyle: {
    fontSize: 14,
    color: COLOR.white,
    fontFamily: FONT.semiBold,
  },

});