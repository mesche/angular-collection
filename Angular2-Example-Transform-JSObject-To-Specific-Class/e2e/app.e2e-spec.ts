import {AppPage} from './app.po';

describe('The app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Compare - JS Object');
  });
});
