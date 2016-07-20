var expect = require('chai').expect;

var rules = require('../src/helpers/rules')

describe('rules', function () {
    it('is an object', function () {
        expect(rules).to.be.an('object')
    })
    describe('getRow', function () {
        it('is a function', function () {
            expect(rules.getRow).to.be.a('function')
        })
        it('does stuff', function () {
            var tiles = ['x', 'o', 'x', '', '', '', '', '', ''];
            expect(rules.getRow(0, tiles)).to.eql(['x', 'o', 'x']);
            expect(rules.getRow(1, tiles)).to.eql(['x', 'o', 'x']);
            expect(rules.getRow(2, tiles)).to.eql(['x', 'o', 'x']);
        })
    })
})