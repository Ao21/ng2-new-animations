import { TestAnimationsPage } from './app.po';

describe('test-animations App', () => {
  let page: TestAnimationsPage;

  beforeEach(() => {
    page = new TestAnimationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
