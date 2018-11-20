const request = require('supertest');
var app = require('./server.js').app;

describe('Server', () => {
  describe('GET', () => {
    it('Should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Hello World!')
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('Should return user objects in response', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        // .expect((res) => {
        //   console.log(res.body);
        //   // expect(res.body).toInclude([ { name: 'Nen Xi', age: 25 }, { name: 'Effy', age: 25 } ]);
        //   // expect(res.body).toInclude({
        //   //     name: 'Effy',
        //   //     age: 25
        //   //   });
        // })
        .end(done);
    });    
  });
})
