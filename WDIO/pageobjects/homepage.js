class HomePage {
    get studentinfobutton() {
        return $('#button1');
    }

    get studentinforesult() {
        return $('#result');
    }

    async clickStudentInfo() {
       await this.studentinfobutton.click();
    }

    async studentInfoResultIsDisplayed() {
       await expect(this.studentinforesult).toBeExisting();
    }
} 

module.exports = new HomePage();