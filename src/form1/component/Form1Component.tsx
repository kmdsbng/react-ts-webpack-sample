import React from "react";
import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form"
import {useSnapshot} from "valtio";
import {formContent} from "../store/store";
import {saveFormContentUseCase} from "../usecase/saveFormContent";

type Inputs = {
  example: string,
  exampleRequired: string,
};

const saveForm = (data: Inputs) => {
    formContent.example = data.example;
    formContent.exampleRequired = data.exampleRequired;

    saveFormContentUseCase();
};

const Form1Component = () => {
    const snapshot  = useSnapshot(formContent);
    const defaultValues: Record<string, any> = {
        example: snapshot.example,
        exampleRequired: snapshot.exampleRequired
    };
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<Inputs>({mode: "onBlur", defaultValues: defaultValues});
    const onSubmit: SubmitHandler<Inputs> = data => saveForm(data);
    const onError: SubmitErrorHandler<Inputs> = errors => { console.log('error:', errors); alert("error exists");};

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <input placeholder={"Input your name"} defaultValue="" {...register("example")} />
            {!errors.example && <span>OK</span>}

            <br />

            <input {...register("exampleRequired", { required: true, minLength: 5 })} />
            {errors.exampleRequired && <span>This field is required</span>}
            {!errors.exampleRequired && <span>OK</span>}

            <br />

            <button
                type="button"
                onClick={() => {
                    setValue("example", "luo");
                }}
            >update example</button>

            <br />

            <input type="submit" />
        </form>
    );
}

export default Form1Component;
