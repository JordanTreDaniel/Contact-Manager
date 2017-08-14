import { ContactMasterPage } from './app.po';

describe('contact-master App', () => {
  let page: ContactMasterPage;

  beforeEach(() => {
    page = new ContactMasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
