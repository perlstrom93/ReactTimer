var React = require('react');
var ReactDOM =require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Controls = require('Controls');

describe('Controls', ()=>{
    it('should exist', ()=>{
        expect(Controls).toExist();
    });

    describe('render', ()=>{
        it('should render pause when started', ()=>{
            var controls = TestUtils.renderIntoDocument(<Controls clockStatus="started"/>);
            var $el =$(ReactDOM.findDOMNode(controls));
            var $button = $el.find('button:contains(Pause)');

            expect($button.length).toBe(1);
        });

        it('should render start when paused', ()=>{
            var controls = TestUtils.renderIntoDocument(<Controls clockStatus="paused"/>);
            var $el =$(ReactDOM.findDOMNode(controls));
            var $button = $el.find('button:contains(Start)');

            expect($button.length).toBe(1);
        });
    });
});
