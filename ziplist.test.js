/* eslint-env mocha, chai */
/* global zipList, zipListTheSimpleWay, chai */


describe('ZipList', function () {
  const letters = ['a', 'b', 'c'];
  const numbers = [1, 2, 3];
  const zipped = ['a', 1, 'b', 2, 'c', 3];
  describe('zipList(letters,numbers)', function () {
    it('should return  1 zipped list', function () {
      chai.expect(zipList(letters, numbers)).to.have.ordered.members(zipped);
    });
    it('should deep equal the zipped list', function () {
      chai.expect(zipList(letters, numbers)).to.deep.equal(zipped);
    });
  });
  describe('zipListTheSimpleWay(letters,numbers)', function () {
    it('should return  1 zipped list', function () {
      chai.expect(zipListTheSimpleWay(letters, numbers)).to.have.ordered.members(zipped);
    });
    it('should deep equal the zipped list', function () {
      chai.expect(zipListTheSimpleWay(letters, numbers)).to.deep.equal(zipped);
    });
  });
});
