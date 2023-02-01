import { View, Text, TextInput, StyleSheet } from "react-native";
import { FormField } from "../entities/FormField";

interface Props {
  formField: FormField;
}

const BmiField: React.FC<Props> = (props) => {
  return (
    <View style={(styles.formField, styles.flexRow)}>
      <Text style={styles.bmi_text}>{props.formField.label} </Text>
      <TextInput
        style={styles.bmi_number}
        value={props.formField.value}
        placeholder={props.formField.placeholder}
        editable={false}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  formField: {
    marginTop: 15,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  bmi_text: {
    fontSize: 20,
    fontWeight: "600",
  },
  bmi_number: {
    color: "#2b60b5",
    fontSize: 20,
    fontWeight: "600",
  },
});

export default BmiField;
