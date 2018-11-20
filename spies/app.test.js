const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');
// app.__set__
// app.__get__

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Nen', 25);
    expect(spy).toHaveBeenCalledWith('Nen', 25);
  });

  it('should call saveuser with user object', () => {
    var email = 'xinen8721@gamil.com';
    var password = '123abc';

    app.handleSignup(email, password);

    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  })
});
