import { ResortFrontendPage } from './app.po';

describe('resort-frontend App', () => {
  let page: ResortFrontendPage;

  beforeEach(() => {
    page = new ResortFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
