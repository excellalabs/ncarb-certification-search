'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('search app', function() {


  it('should automatically redirect to / when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });


  describe('search', function() {

    beforeEach(function() {
      browser.get('/');
    });


    it('should render search when user navigates to /', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/Certification Search/);
    });

  });
});
