import {FormContentInput} from "./FormContentInput";

export class FormContent {
    example: string = "";
    exampleRequired: string = "";

    setFormContentInput(input: FormContentInput) {
        this.example = input.example;
        this.exampleRequired = input.exampleRequired;
    }
}