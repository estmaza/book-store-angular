import { BookStoreAngularPage } from './app.po';

describe('book-store-angular App', () => {
  let page: BookStoreAngularPage;

  beforeEach(() => {
    page = new BookStoreAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
