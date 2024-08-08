import { StyleSheet } from "react-native";
import { COLOR, FONT, wp } from "../../enums/StyleGuide";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white
  },
  Header: {
    width: '100%',
    backgroundColor: COLOR.lightgreen_3,
    paddingTop: '5%',
    paddingBottom: '7%'
  },
  IconSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '7%',
  },
  FindFoodLabel: {
    fontSize: 30,
    fontFamily: FONT.bold,
    color: COLOR.white,
    paddingLeft: '8%',
    marginTop: '3%',
  },
  SpecialLabel: {
    fontSize: 20,
    fontFamily: FONT.medium,
    color: COLOR.dark,
    paddingLeft: '5%',
    marginTop: '3%'
  },
  SpecialSection: {
    marginTop: '6%'
  },
  CategoriesNameList: {
    height: 27,
    backgroundColor: COLOR.white,
    alignItems: 'center',
    justifyContent: 'center',
    // width: 60,
    paddingHorizontal: wp(4),
    borderRadius: 10,
    marginBottom: '10%',
    marginRight: 10,
    elevation: 5,
  },
  CategoriesName: {
    fontSize: 14,
    fontFamily: FONT.regular
  },

  CategoriesList: {
    backgroundColor: COLOR.white,
    alignItems: 'center',
    justifyContent: 'center',
    width: 117,
    borderRadius: 10,
    marginBottom: '10%',
    marginRight: 25,
    elevation: 5,
    paddingTop: 5,
    paddingBottom: 10
  },
  Loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});