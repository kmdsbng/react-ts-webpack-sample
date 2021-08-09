import {useSnapshot} from "valtio";
import {formContent} from "../store/store";
import {FormContentInput} from "../domain/FormContentInput";
import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import React from "react";
import {saveFormContentUseCase} from "../usecase/saveFormContent";

const saveForm = (data: FormContentInput) => {
    saveFormContentUseCase(data);
};

export const Form1Component = () => {
    const snapshot = useSnapshot(formContent);
    const defaultValues: FormContentInput = {
        example: snapshot.example,
        exampleRequired: snapshot.exampleRequired
    };
    const {register, setValue, handleSubmit, formState: {errors}} = useForm<FormContentInput>({
        mode: "onBlur",
        defaultValues: defaultValues
    });
    const onSubmit: SubmitHandler<FormContentInput> = data => saveForm(data);
    const onError: SubmitErrorHandler<FormContentInput> = errors => {
        console.log('error:', errors);
        alert("error exists");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <input placeholder={"Input your name"} defaultValue="" {...register("example")} />
            {!errors.example && <span>OK</span>}

            <br/>

            <input {...register("exampleRequired", {required: true, minLength: 5})} />
            {errors.exampleRequired && <span>This field is required</span>}
            {!errors.exampleRequired && <span>OK</span>}

            <br/>

            <button
                type="button"
                onClick={() => {
                    setValue("example", "luo");
                }}
            >update example
            </button>

            <br/>

            <input type="submit"/>
        </form>
    );
};