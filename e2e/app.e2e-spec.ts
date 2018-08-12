import { by, browser, element } from 'protractor'

describe('App', () => {

  describe('default screen', () => {
    beforeEach(() => {
      browser.get('/');
    });

    it('App should have a title', () => {
      expect(browser.getTitle()).toContain('Ionic App')
    });

    it('the calculator tab is displayed by default', () => {
      expect(element(by.css('[aria-selected=true]'))
        .getAttribute('innerHTML'))
        .toContain('Calculator');
    });

    it('should have title "Calculator"', () => {
      expect(element(by.css('ion-navbar:first-child'))
        .getAttribute('innerHTML'))
        .toContain('Calculator');
    });

    it('should have a Calculator Tab', () => {
      expect(element(by.css('#tab-t0-0'))
        .getAttribute('innerHTML'))
        .toContain('Calculator');
    })
    it('should have an about Tab', () => {
      expect(element(by.css('#tab-t0-1'))
        .getAttribute('innerHTML'))
        .toContain('About');
    })
  });
});