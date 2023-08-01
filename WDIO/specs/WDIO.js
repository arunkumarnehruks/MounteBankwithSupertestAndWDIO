const HomePage = require ('../pageobjects/homepage')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        browser.url('http://localhost:5002/');
        HomePage.clickStudentInfo()
        await browser.pause(4000)
        HomePage.studentInfoResultIsDisplayed();
    })
})