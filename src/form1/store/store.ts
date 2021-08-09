import {proxy} from 'valtio'
import {FormContent} from "../domain/FormContent";

class AppState {
    isDisplayForm: boolean = false;
    nextPageUrl: string = "";

    startDisplayForm() {
        this.isDisplayForm = true;
    }

    setNextPageUrl(value: string) {
        this.nextPageUrl = value;
    }

    moveToNextPage() {
        location.href = this.nextPageUrl;
    }
}

export const formContent = proxy(new FormContent());

export const appState = proxy(new AppState());




