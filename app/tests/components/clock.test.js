var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', ()=>{
    it('should exist', ()=>{
        expect(Clock).toExist();
    });
});

describe('formatSeconds', ()=>{
    it('should format seconds', ()=>{
        var clock = TestUtils.renderIntoDocument(<Clock/>),
            seconds = 615,
            expected = '10:15',
            actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
    });
    it('should format seconds/when mins and secs are less than 10', ()=>{
        var clock = TestUtils.renderIntoDocument(<Clock/>),
            seconds = 61,
            expected = '01:01',
            actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
    });
});
