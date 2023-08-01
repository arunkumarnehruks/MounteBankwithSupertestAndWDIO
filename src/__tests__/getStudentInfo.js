const request = require('supertest');


describe('GET Student data', function () {

    it('should return student information', async function () {
        const response = await request('http://localhost:5001').get('/studentinfo');
        console.log(response.body);
        expect(response.statusCode).toBe(200);
        expect(response.body.grade).toBe('A');
    });

    it('should return information of a specific student', async function () {
        const response = await request('http://localhost:5001').get('/markinfo');
        console.log(response.body);
        expect(response.statusCode).toBe(200);
        expect(response.body.English).toBe('90%');;
    })
})