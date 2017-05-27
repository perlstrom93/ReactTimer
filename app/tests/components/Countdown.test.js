var React = require('react');
var ReactDOM =require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Countdown = require('Countdown');

describe('Countdown', ()=>{
    it('should exist', ()=>{
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', ()=>{
        it('should set state to started and countdown', (done)=>{
            var countdown = TestUtils.renderIntoDocument(<Countdown />);

            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(()=>{
                expect(countdown.state.count).toBe(9);
                done();
            }, 1000);
        });

        it('should not set state of count to negative', (done)=>{
            var countdown = TestUtils.renderIntoDocument(<Countdown />);

            countdown.handleSetCountdown(1);

            setTimeout(()=>{
                expect(countdown.state.count).toBe(0);
                done();
            }, 3000);
        });

        it('should pause countdown on paused status', ()=>{
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('paused');

            setTimeout(()=>{
                expect(countdown.state.count).tobe(3);
                expect.handleStatusChange('paused');
                done();
            }, 1000);
        });

        it('when stopping countdown should set count to zero', ()=>{
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('stopped');

            setTimeout(()=>{
                expect(countdown.state.count).tobe(0);
                expect.handleStatusChange('stopped');
                done();
            }, 1000);
        });
    });
});
