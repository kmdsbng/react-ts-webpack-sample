import React from 'react';
import ReactDOM from 'react-dom';
import {appState, formContent} from "./form1/store/store";
import App from "./form1/component/App";
import {FormApiData} from "./form1/domain/FormApiData";

const loadFormData = () => {
    const e: HTMLInputElement | null = document.getElementById('formData') as HTMLInputElement;
    if (e != null) {
        const value = e.value;
        console.log(value);
        const parsed = JSON.parse(value) as FormApiData;
        formContent.example = parsed.example;
        formContent.exampleRequired = parsed.exampleRequired;
    }

};

const loadNextPageUrl = () => {
    const e: HTMLInputElement | null = document.getElementById('nextPageUrl') as HTMLInputElement;
    if (e != null) {
        const value = e.value;
        appState.setNextPageUrl(value);
    }
};

const main = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );

    loadNextPageUrl();
    loadFormData();
    appState.startDisplayForm();
};

main();




