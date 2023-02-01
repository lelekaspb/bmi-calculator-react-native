import { Pressable, View, Text, StyleSheet } from "react-native";

interface Props {
  text: string;
  calculateBmi: (value: any) => any;
}

const CalculateButton: React.FC<Props> = (props) => {
  return (
    <View style={styles.formField}>
      <Pressable style={styles.button} onPress={props.calculateBmi}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  formField: {
    marginTop: 15,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#2b60b5",
    marginTop: 6,
  },
  buttonText: {
    color: "white",
  },
});

export default CalculateButton;
