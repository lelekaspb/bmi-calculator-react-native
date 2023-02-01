import { View, Text, TextInput, StyleSheet } from "react-native";
import { FormField } from "../entities/FormField";

interface Props {
  formField: FormField;
  onChangeInput: (value: any) => any;
}

const InputField: React.FC<Props> = (props) => {
  return (
    <View style={styles.formField}>
      <Text>{props.formField.label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeInput}
        value={props.formField.value}
        placeholder={props.formField.placeholder}
        keyboardType="numeric"
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 6,
    marginTop: 6,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
  formField: {
    marginTop: 15,
  },
});

export default InputField;
