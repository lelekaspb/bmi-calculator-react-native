import { useState } from "react";
import { Keyboard, View } from "react-native";
import BmiField from "./BmiField";
import CalculateButton from "./CalculateButton";
import InputField from "./InputField";

const BmiForm = () => {
  const [height, onChangeHeight] = useState("");
  const [weight, onChangeWeight] = useState("");
  const [bmi, setBmi] = useState("");

  const heightInput = {
    label: "Your height",
    placeholder: "Enter your height",
    value: height,
  };

  const weightInput = {
    label: "Your weight",
    placeholder: "Enter your weight",
    value: weight,
  };

  const bmiInput = {
    label: "Your BMI is: ",
    placeholder: "?",
    value: bmi,
  };

  const calculateBmi = () => {
    if (height.length > 0 && weight.length > 0) {
      const newBmi = (
        (Number(weight) / Number(height) / Number(height)) *
        10000
      ).toFixed(1);
      setBmi(newBmi);
      Keyboard.dismiss();
    } else {
      alert("Cannot calculate BMI if height or weight is empty!");
    }
  };

  return (
    <View>
      <BmiField formField={bmiInput} />
      <InputField formField={heightInput} onChangeInput={onChangeHeight} />
      <InputField formField={weightInput} onChangeInput={onChangeWeight} />
      <CalculateButton text="Calculate" calculateBmi={calculateBmi} />
    </View>
  );
};

export default BmiForm;
