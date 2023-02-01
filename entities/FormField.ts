export class FormField {
  label: string;
  placeholder: string;
  value: string;

  constructor(label: string, placeholder: string, value: string) {
    this.label = label;
    this.placeholder = placeholder;
    this.value = value;
  }
}
