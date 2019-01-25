// Access supertest module functionality under the variable name "request"
const request = require('supertest');

describe('Database Connection Test', () => {
  it('Returns a 200 with a call to the DB', async () => {
    const res = await request('http://localhost:3000')
      .get('/userlist')
      .expect(200)
  });
});

describe('Restful-Booker Connection Test', () => {
  it('Returns a 201 with a health check', async () => {
    const res = await request('https://restful-booker.herokuapp.com')
      .get('/ping')
      .expect(201)
  });
});