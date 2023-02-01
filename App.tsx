import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BmiForm from "./components/BmiForm";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>BMI Calculator</Text>
      <StatusBar style="auto" />
      <BmiForm></BmiForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
});
