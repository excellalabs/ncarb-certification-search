'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('search app', function() {

  beforeEach(function() {
    browser.get('index.html');
  });

  it('should automatically redirect to / when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/");
    expect(element.all(by.css('[ui-view] h1')).first().getText()).
        toMatch(/Certification Search/);
  });

  it('should return results for people in Washington, DC', function() {
    element(by.id('city')).sendKeys('Washington');
    element(by.id('state')).sendKeys('DC');
    element(by.id('submit')).click();

    expect(element.all(by.css('tr')).count()).toBeGreaterThan(0);
  });
});
