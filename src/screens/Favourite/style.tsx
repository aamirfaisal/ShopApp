import { StyleSheet } from "react-native";
import { COLOR, FONT } from "../../enums/StyleGuide";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white
  },
  HeaderText: {
    paddingRight: '8%'
  },

  TotalLabel: {
    fontSize: 18,
    fontFamily: FONT.bold,
    color: COLOR.dark,
    paddingLeft: '10%',
    marginTop: '15%'
  },
  ListStyle: {
    marginTop: '3%'
  },
});