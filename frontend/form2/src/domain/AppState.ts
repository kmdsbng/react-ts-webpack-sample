export class AppState {
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