
// http://www.protractortest.org/#/api

import {Angular2JavaEE7ClientWebPage} from './app.po';

describe('Angular2-JavaEE7-Quickstart-Client-Web-Angular App', function () {
    let page: Angular2JavaEE7ClientWebPage;

    beforeEach(() => {
        page = new Angular2JavaEE7ClientWebPage();
        page.navigateTo();
    });

    it('should display message saying app works', () => {
        expect(page.getParagraphText()).toEqual('app works!');
    });

    it('should contain a rest service url', () => {
        expect(page.getRestServiceUrlFieldValue()).toContain('http');
        expect(page.getRestServiceUrlFieldValue()).toContain('books/list');
    });


    it('should submit button clickable', () => {
        page.checkRestServiceButtonClickable();
    });
});
