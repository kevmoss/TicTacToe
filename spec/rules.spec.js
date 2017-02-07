var expect = require('chai').expect;
var rules = require('../src/helpers/rules');

describe('rules', function () {
    it('is an object', function () {
        expect(rules).to.be.an('object')
    });
  describe('getRow', function () {
    it('is a function', function () {
      expect(rules.getRow).to.be.a('function')
    });
    it('does stuff', function () {
      var tiles = ['x', 'o', 'x', '', '', '', '', 'o', ''];
      expect(rules.getRow(0, tiles)).to.eql(['x', 'o', 'x']);
      expect(rules.getRow(1, tiles)).to.eql(['', '', '']);
      expect(rules.getRow(2, tiles)).to.eql(['', 'o', '']);
    })
  });
  describe('getCol', function () {
    it('is a function', function () {
      expect(rules.getCol).to.be.a('function')
    });
    it('does stuff', function () {
      var tiles = ['x', 'o', 'x', 'o', '', '', 'x', '', 'o'];
      expect(rules.getCol(0, tiles)).to.eql(['x', 'o', 'x']);
      expect(rules.getCol(1, tiles)).to.eql(['o', '', '']);
      expect(rules.getCol(2, tiles)).to.eql(['x', '', 'o']);
    });
  });
  describe('getDiagTB', function () {
    it('is a function', function () {
      expect(rules.getDiagTB).to.be.a('function')
    });
    it('does stuff', function () {
      var tiles = ['x', 'o', 'x', '', 'o', '', 'o', '', 'x'];
      expect(rules.getDiagTB(0, tiles)).to.eql(['x', 'o', 'x']);
    });
  });
  describe('getDiagBT', function () {
    it('is a function', function () {
      expect(rules.getDiagBT).to.be.a('function')
    });
    it('does stuff', function () {
      var tiles = ['x', 'o', 'x', '', 'x', '', 'o', '', 'x'];
      expect(rules.getDiagBT(0, tiles)).to.eql(['x', 'x', 'o']);
    });
  });
  describe('getLineWinner', function () {
    it('returns "x" for [x, x, x]', function() {
      expect(rules.getLineWinner(["x", "x", "x"])).to.equal("x");
    });
    it('returns "o" for [o, o, o]', function() {
      expect(rules.getLineWinner(["o", "o", "o"])).to.equal("o");
    });
  });
  describe('getHorizontalWinner', function () {
    it("returns 'x' for ['x', 'x', 'x', 'o', '', '', 'x', '', 'o']", function() {
      expect(rules.getHorizontalWinner(['x', 'x', 'x', 'o', '', '', 'x', '', 'o'])).to.equal("x");
    });
    it("returns 'x' for ['x', 'o', 'x', 'x', 'x', 'x', 'x', '', 'o']", function() {
      expect(rules.getHorizontalWinner(['x', 'o', 'x', 'x', 'x', 'x', 'x', '', 'o'])).to.equal("x");
    });
    it("returns 'x' for ['x', 'o', 'x', 'x', 'x', 'x', 'x', 'x', 'x']", function() {
      expect(rules.getHorizontalWinner(['x', 'o', 'x', 'x', 'x', 'x', 'x', 'x', 'x'])).to.equal("x");
    });
    it("returns 'o' for ['o', 'o', 'o', 'o', '', '', 'x', '', 'o']", function() {
      expect(rules.getHorizontalWinner(['o', 'o', 'o', 'o', '', '', 'x', '', 'o'])).to.equal("o");
    });
    it("returns 'o' for ['x', 'o', 'x', 'o', 'o', 'o', 'x', '', 'o']", function() {
      expect(rules.getHorizontalWinner(['x', 'o', 'x', 'o', 'o', 'o', 'x', '', 'o'])).to.equal("o");
    });
    it("returns 'o' for ['o', 'o', 'x', 'x', 'o', 'x', 'o', 'o', 'o']", function() {
      expect(rules.getHorizontalWinner(['o', 'o', 'x', 'x', 'o', 'x', 'o', 'o', 'o'])).to.equal("o");
    });
  });
  describe('getVerticalWinner', function () {
    it("returns 'x' for ['x', 'o', '', 'x', '', 'o', 'x', '', 'o']", function () {
      expect(rules.getVerticalWinner(['x', 'o', '', 'x', '', 'o', 'x', '', 'o'])).to.equal("x");
    });
    it("returns 'x' for ['x', 'x', 'o', 'o', 'x', 'x', 'o', 'x', 'o']", function () {
      expect(rules.getVerticalWinner(['x', 'x', 'o', 'o', 'x', 'x', 'o', 'x', 'o'])).to.equal("x");
    });
    it("returns 'x' for ['x', 'o', 'x', '', 'x', 'x', '', 'x', 'x']", function () {
      expect(rules.getVerticalWinner(['x', 'o', 'x', '', 'x', 'x', '', 'x', 'x'])).to.equal("x");
    });
    it("returns 'o' for ['o', 'o', 'x', 'o', '', 'x', 'o', '', 'o']", function () {
      expect(rules.getVerticalWinner(['o', 'o', 'x', 'o', '', 'x', 'o', '', 'o'])).to.equal("o");
    });
    it("returns 'o' for ['x', 'o', 'o', 'x', 'o', 'x', '', 'o', 'x']", function () {
      expect(rules.getVerticalWinner(['x', 'o', 'o', 'x', 'o', 'x', '', 'o', 'x'])).to.equal("o");
    });
    it("returns 'o' for ['x', 'o', 'o', 'x', 'x', 'o', '', '', 'o']", function () {
      expect(rules.getVerticalWinner(['x', 'o', 'o', 'x', 'x', 'o', '', '', 'o'])).to.equal("o");
    });
  });
  describe('getDiagonalTBWinner ', function () {
    it("returns 'x' for ['x', 'o', '', '', 'x', 'o', 'o', '', 'x']", function () {
      expect(rules.getDiagonalTBWinner(['x', 'o', '', '', 'x', 'o', 'o', '', 'x'])).to.equal("x");
    });
    it("returns 'o' for ['o', '', 'x', '', 'o', 'x', 'x', '', 'o']", function () {
      expect(rules.getDiagonalTBWinner(['o', '', 'x', '', 'o', 'x', 'x', '', 'o'])).to.equal("o");
    });
  });
  describe('getDiagonalBTWinner ', function () {
    it("returns 'x' for ['', 'o', 'x', '', 'x', 'o', 'x', '', 'o']", function () {
      expect(rules.getDiagonalBTWinner(['', 'o', 'x', '', 'x', 'o', 'x', '', 'o'])).to.equal("x");
    });
    it("returns 'o' for ['x', '', 'o', '', 'o', 'x', 'o', '', 'x']", function () {
      expect(rules.getDiagonalBTWinner(['x', '', 'o', '', 'o', 'x', 'o', '', 'x'])).to.equal("o");
    });
  });
});
