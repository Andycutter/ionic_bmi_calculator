import { by, element , browser} from 'protractor';

describe('Calculator', () => {
    it('fill in form', () => {
        element(by.css('[aria-labelledby="lbl-0"]')).sendKeys(110);
        element(by.css('[aria-labelledby="lbl-1"]')).sendKeys(200);
        element(by.buttonText('Calculate')).click();
        browser.sleep(1000);

        expect(element(by.css('.card-content'))
            .getText())
            .toContain('Person weight: 110 kg')

        expect(element(by.css('.card-content'))
            .getText())
            .toContain('You are overweight')

        expect(element(by.css('.card-content'))
            .getText())
            .toContain('Person height: 200 cm')

        expect(element(by.css('.card-content'))
            .getText())
            .toContain('BMI: 27.5')           
    });
});