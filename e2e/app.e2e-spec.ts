import { CitiesPage } from './app.po';

describe('cities App', function() {
  let page: CitiesPage;

  beforeEach(() => {
    page = new CitiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
