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
});

describe('rules', function () {
    it('is an object', function () {
        expect(rules).to.be.an('object')
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
});
describe('rules', function () {
    it('is an object', function () {
        expect(rules).to.be.an('object')
    });
    describe('getDiagonalTB', function () {
        it('is a function', function () {
            expect(rules.getDiagonalTB).to.be.a('function')
        });
        it('does stuff', function () {
            var tiles = ['x', '', '', '', 'x', '', '', '', 'x'];
            expect(rules.getDiagonalTB(0, tiles)).to.eql(['x', 'x', 'x']);
        });
    });
});