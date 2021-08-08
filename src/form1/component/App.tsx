import React from 'react';
import './App.css';
import Form1Component from "./Form1Component";
import {useSnapshot} from "valtio";
import {appState} from "../store/store";

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
                <Form1Component/>
            }
        </>
    );
}

export default App;



