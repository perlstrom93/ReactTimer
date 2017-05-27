var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },

    // triggered when props are updated, and will recieve the new props
    // componentWillReceiveProps: function(newProps){
    //     console.log('will receive props', newProps.countdownStatus);
    // },

    onStatusChange: function(newStatus){
        return ()=>{
            this.props.onStatusChange(newStatus);
        }
    },

    render: function(){
        var {countdownStatus} = this.props;

        var renderStartStopButton = ()=>{
            if(countdownStatus === 'started'){
                return <button className="button secondary expanded" onClick={this.onStatusChange('paused')}>Pause</button>
            } else if (countdownStatus === 'paused') {
                return <button className="button primary expanded" onClick={this.onStatusChange('started')}>Start</button>
            }
        };

        return(
            <div className="controls">
                <div className="column medium-6">
                    {renderStartStopButton()}
                </div>
                <div className="column medium-6">
                    <button className="button alert hollow expanded" onClick={this.onStatusChange('stopped')}>Clear</button>
                </div>
            </div>
        );
    }
});

module.exports = Controls;
