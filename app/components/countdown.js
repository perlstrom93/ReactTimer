var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState: function(){
        return{
            count: 0,
            countdownStatus: 'stopped'
        }
    },

    // triggers when component is updated, either the props or the state with the previous state of the props and state passed in as the arguments
    componentDidUpdate: function(prevProps, prevState){
        if(this.state.countdownStatus !== prevState.countdownStatus){
            switch(this.state.countdownStatus){
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({
                        count: 0
                    });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },

    // triggers when component is about to be updated, either the props or the state with the new state of the props and state passed in as the arguments
    // componentWillUpdate: function(nextProps, nextState){
    //     console.log('will update');
    // },
    //
    // // triggered right before a component is rendered
    // componentWillMount: function(){
    //     console.log('will mount');
    // },
    //
    // // triggered right after a component has been rendered
    // componentDidMount: function(){
    //     console.log('did mount');
    // },

    // triggered right before a component is un-rendered
    componentWillUnmount: function(){
        console.log('unmounted');
        clearInterval(this.timer);
        this.timer = undefined;
    },

    startTimer: function(){
        this.timer = setInterval(()=>{
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });

            if (newCount === 0){
                this.setState({
                    countdownStatus: 'stopped'
                });
            }
        }, 1000)
    },

    handleSetCountdown: function(seconds){
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },

    handleStatusChange: function(newStatus){
        this.setState({
            countdownStatus: newStatus
        })
    },

    render: function(){
        var {count, countdownStatus} = this.state;

        var renderControlArea = ()=>{
            if(countdownStatus !== 'stopped'){
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
            }
        }

        return(
            <div>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        );
    }
});

module.exports = Countdown;
