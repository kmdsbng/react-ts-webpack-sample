import React from 'react';
import ReactDOM from 'react-dom';
import {appState, formContent} from "./form1/store/store";
import App from "./form1/component/App";
import {Form1ApiData} from "./form1/domain/Form1ApiData";

const loadFormData = () => {
    const e: HTMLInputElement | null = document.getElementById('formData') as HTMLInputElement;
    if (e != null) {
        const value = e.value;
        console.log(value);
        const parsed = JSON.parse(value) as Form1ApiData;
        formContent.example = parsed.example;
        formContent.exampleRequired = parsed.exampleRequired;
    }

};

const main = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );

    loadFormData();
    appState.startDisplayForm();
};

main();




