import {proxy} from 'valtio'
import {FormContent} from "../domain/FormContent";

class AppState {
    isDisplayForm: boolean = false;

    startDisplayForm() {
        this.isDisplayForm = true;
    }
}

export const formContent = proxy(new FormContent());

export const appState = proxy(new AppState());




