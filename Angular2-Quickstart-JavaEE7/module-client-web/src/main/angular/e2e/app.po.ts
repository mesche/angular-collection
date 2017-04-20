
import {browser, element, by, protractor} from 'protractor';

export class Angular2JavaEE7ClientWebPage {

    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('app-root h1')).getText();
    }

    getRestServiceUrlFieldValue() {
        return element(by.css('input[formControlName=restURL]')).getAttribute('value');
    }

    getRestServiceButton() {
        return element(by.css('button[type=submit]'));
    }

    checkRestServiceButtonClickable() {
        const EC = protractor.ExpectedConditions;
        // Waits for the element to be clickable
        browser.wait(EC.elementToBeClickable(this.getRestServiceButton()), 5000);
    }
}
