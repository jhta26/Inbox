import React from 'react'

export default class MessageComponent extends React.Component{
constructor(props){
  super(props)
  this.state={
    messageVisible:false
  }
}



_handleSelectChange=(event)=>{
  
  this.props.selectedMessageIds.includes(this.props.message.id)?this.props.onDeselectMessage(this.props.message.id):this.props.onSelectMessage(this.props.message.id)
}

_handleStarClick=(event)=>{
  event.preventDefault()
  this.props.message.starred?this.props.onUnstarMessage(this.props.message.id):this.props.onStarMessage(this.props.message.id)
}

_handleReadClick=(event)=>{
event.preventDefault()
this.state.messageVisible?this.setState({messageVisible:false}):this.setState({messageVisible:true})
if(this.props.message.read===false) this.props.onMarkAsReadMessage(this.props.message.id)
 console.log(this.state)

}


render(){


var starred = this.props.message.starred? "star fa fa-star":"star fa fa-star-o"
var read = this.props.message.read? "read":"unread"


  return(
<div className={`row message ${read} ${this.props.selected?'selected':''}`}>
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        {this.props.selected?<input type="checkbox" checked="checked" onChange={this._handleSelectChange}/>:<input type="checkbox" onChange={this._handleSelectChange}/>}
      </div>
      <div className="col-xs-2">
        <i className={`${starred}`} onClick={this._handleStarClick}></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
  {this.props.message.labels.length>0?this.props.message.labels.map(label=><span className="label label-warning" key={label}>{label}</span>):null}
    <a href="#" onClick={this._handleReadClick}>
      {this.props.message.subject}
    </a>
  </div>
  <div className = 'messageBody'>
  {this.state.messageVisible?<div>{this.props.message.body}</div>:null}
  </div>
</div>

)
}
}



// import React from 'react';

// export default class MessageComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       messageVisible: false,
//       readOrNot: this.props.message.read ? 'read' : 'unread',
//       checkOrNot: this.props.message.selected ? 'checked' : '',
//       starOrNot: this.props.message.starred ? 'fa fa-star' : 'fa fa-star-o'
//     };
//   }

//   _handleSelectChange = event => {
//     if (this.state.checkOrNot == 'checked') {
//       this.setState({ checkOrNot: '' });
//       this.props.message.selected = false;
//     }
//     if (this.state.checkOrNot == '') {
//       this.setState({ checkOrNot: 'checked' });
//       this.props.message.selected = true;
//     }

//     this.props.selected
//       ? this.props.onSelectMessage(this.props.message)
//       : this.props.onDeselectMessage(this.props.message);
//   };
//   _handleReadClick = event => {
//     event.preventDefault();

//     if (this.state.readOrNot == 'read') {
//       this.setState({ readOrNot: 'unread' });
//       this.props.message.read = false;
//     } else if (this.state.readOrNot == 'unread') {
//       this.setState({ readOrNot: 'read' });
//       this.props.message.read = true;
//     }

//     this.props.onMarkAsReadMessage(this.props.message);
//   };
//   _handleStarClick = event => {
//     event.preventDefault();

//     if (this.state.starOrNot == 'fa fa-star') {
//       this.setState({ starOrNot: 'fa fa-star-o' });
//       this.props.message.starred = false;
//     } else if (this.state.starOrNot == 'fa fa-star-o') {
//       this.setState({ starOrNot: 'fa fa-star' });
//       this.props.message.starred = true;
//     }
//     this.props.message.starred
//       ? this.props.onStarMessage(this.props.message)
//       : this.props.onUnstarMessage(this.props.message);
//   };

//   render() {
//     const read = this.state.readOrNot == 'read' ? 'read' : 'unread';
//     const check = this.state.checkOrNot ? 'checked' : '';
//     const star = this.state.starOrNot ? 'fa fa-star' : 'fa fa-star-o';

//     return (
//       <div className="MessageComponent">
//         <div
//           className={`row message ${this.state.readOrNot == 'read'
//             ? 'read'
//             : 'unread'} ${this.props.selected ? 'selected' : 'unselected'}`}>
//           <div className="col-xs-1">
//             <div className="row">
//               <div className="col-xs-2">
//                 {this.state.checkOrNot == 'checked'
//                   ? <input
//                       type="checkbox"
//                       checked="checked"
//                       onClick={this._handleSelectChange}
//                     />
//                   : <input
//                       type="checkbox"
//                       onClick={this._handleSelectChange}
//                     />}
//               </div>
//               <div className="col-xs-2">
//                 <i
//                   className={`star ${this.state.starOrNot == 'fa fa-star'
//                     ? 'fa fa-star'
//                     : 'fa fa-star-o'}`}
//                   onClick={this._handleStarClick}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-xs-11">
//             {this.props.message.labels.map((item, index) =>
//               <span className="label label-warning">
//                 {' '}{item}{' '}
//               </span>
//             )}
//             <a href="#" onClick={this._handleReadClick}>
//               {this.props.message.subject}
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
