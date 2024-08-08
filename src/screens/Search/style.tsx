import { StyleSheet } from "react-native";
import { COLOR, FONT } from "../../enums/StyleGuide";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white
  },
  SearchBoxStyling: {
    width: '88%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 35,
    paddingLeft: '8%',
    height: 43,
    elevation: 5,
    marginTop: '8%',
    justifyContent: 'space-between',
    paddingRight: '7%'
  },
  SerachTextInput: {
    fontSize: 18,
    fontFamily: FONT.medium,
    color: COLOR.dark,
    width: '85%',
  },
  SearchIcon: {
    height: 20,
    width: 20
  },
  SearchListBox: {
    height: 26,
    width: '45%',
    borderRadius: 35,
    elevation: 5,
    backgroundColor: COLOR.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '5%',
    justifyContent: 'space-between',
    paddingRight: '2.5%',
    marginBottom: '5%'
  },
  SearchListLabel: {
    fontSize: 14,
    fontFamily: FONT.regular,
    color: COLOR.dark
  },
  CrossCircle: {
    height: 19,
    width: 19,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#D9D9D9'
  },
  CrossIcon: {
    width: 9,
    resizeMode: 'contain'
  }
});