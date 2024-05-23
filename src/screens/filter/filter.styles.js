import { StyleSheet } from "react-native";

import { SIZES, COLORS } from "../../constants/theme";
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  tile: {
    marginBottom: 10,
    marginHorizontal: 12,
  },
  rectangle: (isSelected) => ({
    width: 50,
    height: 35,
    backgroundColor: isSelected ? COLORS.green : COLORS.lightGrey,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    borderRadius: 5,
  }),
  icon: {
    marginTop: 5,
  },
  circle: (isSelected) => ({
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: isSelected ? COLORS.green : COLORS.lightGrey,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  }),
  // circle: (isSelected) => ({
  //   width: 50,
  //   height: 50,
  //   borderRadius: 30,
  //   backgroundColor: COLORS.green,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   margin: 10,
  //   borderRadius: 5,
  // }),
  number: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    marginTop: 5,
    maxWidth: 80,
    marginHorizontal: 10,
    textAlign: "center",
    flexWrap: "wrap",
  },
});

export default styles;
