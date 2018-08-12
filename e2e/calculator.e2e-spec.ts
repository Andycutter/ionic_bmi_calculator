import { by, element , browser} from 'protractor';

describe('Calculator', () => {
    it('fill in form', () => {
        element(by.css('[aria-labelledby="lbl-0"]')).sendKeys(100);
        element(by.css('[aria-labelledby="lbl-1"]')).sendKeys(200);
        element(by.buttonText('Calculate')).click();
        browser.sleep(1000);

        expect(element(by.css('.card-content'))
            .getText())
            .toContain('Person: Weight 100 kg, Height 200 cm')

        expect(element(by.css('.card-content'))
            .getText())
            .toContain('You are overweight')
    });
});