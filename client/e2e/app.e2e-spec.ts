import { CoralnhWebPage } from './app.po';

describe('coralnh-web App', function() {
  let page: CoralnhWebPage;

  beforeEach(() => {
    page = new CoralnhWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
