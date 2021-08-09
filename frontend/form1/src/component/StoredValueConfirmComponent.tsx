import {useSnapshot} from "valtio";
import {appState, formContent} from "../store/store";
import React from "react";


export const StoredValueConfirmComponent = () => {
    const snapshot  = useSnapshot(formContent);
    const appStateSnapshot  = useSnapshot(appState);

    return (
        <>
            {snapshot.example}
            <br />
            {snapshot.exampleRequired}
            <br />
            {appStateSnapshot.nextPageUrl}
        </>
    );
};


