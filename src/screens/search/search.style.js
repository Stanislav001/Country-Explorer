import { StyleSheet } from "react-native";

import { SIZES, COLORS } from "../../constants/theme";
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: SIZES.small,
    borderColor: COLORS.blue,
    borderWidth: 1,
    marginVertical: SIZES.medium,
    height: 50,
    borderRadius: SIZES.medium,
  },
  input: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    marginHorizontal: 50,
  },
  searchWrapper: {
    flex: 1,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchImage: {
    width: "100%",
    height: SIZES.height / 2.2,
    resizeMode: "contain",
    paddingHorizontal: 20,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.small,
    backgroundColor: COLORS.lightBlue,
  },
  tile: {
    marginBottom: 10,
    marginHorizontal: 12,
  },
});

export default styles;
