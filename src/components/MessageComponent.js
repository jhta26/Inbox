import React from 'react';
export default class MessageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageVisible: false,
      loaded: false
    };
  }

  _handleSelectChange = event => {
    this.props.selectedMessageIds.includes(this.props.message.id)
      ? this.props.onDeselectMessage(this.props.message.id)
      : this.props.onSelectMessage(this.props.message.id);
  };

  _handleStarClick = event => {
    event.preventDefault();
    this.props.message.starred
      ? this.props.onUnstarMessage(this.props.message.id)
      : this.props.onStarMessage(this.props.message.id);
    this.setState({
      loaded: true
    });
  };

  _handleReadClick = event => {
    event.preventDefault();
    this.state.messageVisible
      ? this.setState({ messageVisible: false })
      : this.setState({ messageVisible: true });
    if (this.props.message.read === false)
      this.props.onMarkAsReadMessage(this.props.message.id);
    console.log(this.state);
  };

  render() {
    var starred = this.props.message.starred
      ? 'star fa fa-star'
      : 'star fa fa-star-o';
    var read = this.props.message.read ? 'read' : 'unread';

    var rightNow = new Date();
    var monthNow = rightNow.getMonth();
    var dayNow = rightNow.getDay();
    var minutesNow = rightNow.getMinutes();
    var hoursNow = rightNow.getHours();
    var theCurrentTime = `${monthNow}/${dayNow} ${hoursNow}:${minutesNow}`;
    var date = this.props.message.date;

    return (
      <div
        className={`row message ${read} ${this.props.selected
          ? 'selected'
          : ''}`}>
        <div className="col-xs-2 contain">
          <div className="row">
            <div className="col-xs-2">
              <input
                className='checkbox'
                type="checkbox"
                checked={this.props.selected === true}
                onChange={this._handleSelectChange}
              />
            </div>
            <div className="col-xs-2">
              <i className={`${starred}`} onClick={this._handleStarClick} />
            </div>
            <div className="col-xs-8">
              <p className="dateText">
                {this.props.message.date}
              </p>
            </div>
          </div>
        </div>
        <div className="col-xs-10">
          {this.props.message.labels && this.props.message.labels.length > 0
            ? this.props.message.labels.map(label =>
                <span className="label label-warning" key={label}>
                  {label}
                </span>
              )
            : null}
          <a href="#" className='link' onClick={this._handleReadClick}>
            {this.props.message.subject}
          </a>
        </div>
        <div className="messageBody">
          {this.state.messageVisible
            ? <div>
                {this.props.message.body}
              </div>
            : null}
        </div>
      </div>
    );
  }
}
