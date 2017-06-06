import { AmericangodsPage } from './app.po';

describe('americangods App', () => {
  let page: AmericangodsPage;

  beforeEach(() => {
    page = new AmericangodsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
