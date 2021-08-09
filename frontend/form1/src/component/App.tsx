import React from 'react';
import './App.css';
import {useSnapshot} from "valtio";
import {appState} from "../store/store";
import {StoredValueConfirmComponent} from "./StoredValueConfirmComponent";
import {Form1Component} from "./FormComponent";

function App() {
    const appStateSnapshot = useSnapshot(appState);

    return (
        <>
            {
                !appStateSnapshot.isDisplayForm &&
                <span>Loading data...</span>
            }
            {
                appStateSnapshot.isDisplayForm &&
                <Form1Component />
            }

            <StoredValueConfirmComponent />
        </>
    );
}

export default App;



