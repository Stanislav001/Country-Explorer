import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.lightWhite,
  },
  wrapper: {
    marginBottom: 20,
  },
  inputWrapper: (borderColor) => ({
    borderColor: borderColor,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
  }),
  label: {
    fontFamily: "regular",
    fontSize: SIZES.medium,
    marginBottom: 5,
    marginEnd: 5,
  },
  errorMessage: {
    color: COLORS.red,
    fontSize: SIZES.medium,
    fontFamily: "regular",
    marginTop: 5,
    marginLeft: 5,
  },
  underline: {
    width: 50,
    height: 3,
    backgroundColor: "orange",
    marginTop: 2,
  },
});

export default styles;
