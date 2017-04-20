import { Angular4QuickstartCLIPage } from './app.po';

describe('angular4-quickstart-cli App', () => {
  let page: Angular4QuickstartCLIPage;

  beforeEach(() => {
    page = new Angular4QuickstartCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
