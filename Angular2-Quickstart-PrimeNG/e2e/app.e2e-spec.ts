import { Angular2PrimeNGQuickstartPage } from './app.po';

describe('angular2-prime-ng-quickstart App', () => {
  let page: Angular2PrimeNGQuickstartPage;

  beforeEach(() => {
    page = new Angular2PrimeNGQuickstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('book list');
  });
});
