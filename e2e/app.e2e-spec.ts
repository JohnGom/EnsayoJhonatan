import { EnsayoPage } from './app.po';

describe('ensayo App', () => {
  let page: EnsayoPage;

  beforeEach(() => {
    page = new EnsayoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
