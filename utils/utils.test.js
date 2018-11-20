const expect = require('expect');
const utils = require('./utils');
describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers',() => {
      var res  = utils.add(33, 11);
      expect(res).toBe(44, 'Should be equal to 44').toBeA('number');
    });

    it('should add two numbers ayncly', (done) => {
      utils.asyncAdd(4,3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });



  it('should square up a number', () => {
    var res = utils.square(3);
    //Assertion Library
    expect(res).toBe(9).toBeA('number');
  });

  // it('should expect some values', () => {
  //   expect({name : 'Nen'}).toEqual({name : 'Nen'});
  //   expect([2,3,4]).toNotInclude(1);
  //   expect({
  //     name: 'Nen',
  //     age: 31,
  //     location: 'Moraga'
  //   }).toInclude({
  //     age: 31
  //   })
  // });

  it('should verify user firstname and lastName', () => {
    // var user = {};
    // user.age = 31;
    // user.location = 'Moraga';
    var res = utils.setName({
      age: 31,
      location: 'Moraga'
    }, 'Nen Xi');
    expect(res).toInclude({
      firstName: 'Nen',
      lastName: 'Xi'}).toBeA('object');
  });



  it('should square numbers ayncly', (done) => {
    utils.asyncSquare(3, (square) => {
      expect(square).toBe(9).toBeA('number');
      done();
    });
  });
});
