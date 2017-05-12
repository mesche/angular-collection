import { Angular4Bootstrap4Page } from './app.po';

describe('angular4-example-bootstrap4 App', () => {
  let page: Angular4Bootstrap4Page;

  beforeEach(() => {
    page = new Angular4Bootstrap4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
