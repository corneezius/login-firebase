import { NgloginAppPage } from './app.po';

describe('nglogin-app App', () => {
  let page: NgloginAppPage;

  beforeEach(() => {
    page = new NgloginAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
