import { StyleSheet } from "react-native";
import { COLOR, FONT } from "../../enums/StyleGuide";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white
  },
  NotificationContainer: {
    width: '90%',
    backgroundColor: COLOR.primary,
    borderRadius: 11,
    paddingTop: '2%',
    paddingBottom: '4%',
    paddingHorizontal: '5%',
    alignSelf: 'center',
    marginTop: '12%'
  },
  OrderLabel: {
    fontSize: 24,
    fontFamily: FONT.bold,
    color: COLOR.white
  },
  OrderDescription: {
    fontSize: 15,
    fontFamily: FONT.regular,
    color: COLOR.white
  }
});