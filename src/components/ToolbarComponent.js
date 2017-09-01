import React from 'react';

export default function ToolbarComponent({
  messages,
  selectedMessageCount,
  onOpenComposeForm,
  onSelectAllMessages,
  onDeselectAllMessages,
  onMarkAsReadSelectedMessages,
  onMarkAsUnreadSelectedMessages,
  onApplyLabelSelectedMessages,
  onRemoveLabelSelectedMessages,
  onDeleteSelectedMessages
}) {


// { messages.filter(a => a.read === false).length > 0
//       ? messages.filter(a => a.read ===false).length === messages.length
//         ? 'fa fa-check-square-o'
//         : 'fa fa-minus-square-o'
//       : 'fa fa-square-o'}



  var _handleRead = () => {
    
    onMarkAsReadSelectedMessages();
  };

 var _handleUnread = () => {
   
    onMarkAsUnreadSelectedMessages();
  };

  var _handleCompose = () => {
    
    onOpenComposeForm();
  };

  var _handleToggle=(event)=> {
    event.preventDefault()
      if(selectedMessageCount===messages.length){
        onDeselectAllMessages()
      }else{
        onSelectAllMessages()
      }
      
};



  const _handleApplyLabel = (event) => {
    event.preventDefault();
    onApplyLabelSelectedMessages(event.target.value);
  };

  const _handleRemoveLabel = (event) => {
    event.preventDefault();
    onRemoveLabelSelectedMessages(event.target.value);
  };
  const _handleDelete = ()=>{
    onDeleteSelectedMessages()
  }
var unread = messages.filter(a => a.read === false).length
var toggleButton= (messages.length===selectedMessageCount)?'fa fa-minus-square-o':((selectedMessageCount===0)?'fa fa-check-square-o':'fa fa-square-o')
  // if(messages.length===selectedMessageCount){
  //   return 'fa fa-minus-square-o'
  // }
  // if(messages.length>selectedMessageCount&&selectedMessageCount>0){
  //   return 'fa fa-square-o'
  // }
  // if(selectedMessageCount===0){
  //   return 'fa fa-check-square-o'
  // }

  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">
            {unread}
          </span>
          unread messages
        </p>

        <a className="btn btn-danger">
          <i className="fa fa-plus" onClick={_handleCompose} />
        </a>

        <button className="btn btn-default" >
        <i className={toggleButton} onClick={_handleToggle} />
        </button>

        <button className="btn btn-default" onClick={_handleRead}>
          Mark As Read
        </button>

        <button className="btn btn-default" onClick={_handleUnread}>
          Mark As Unread
        </button>

        <select
          className="form-control label-select"
          onChange={_handleApplyLabel}>
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select
          className="form-control label-select"
          onChange={_handleRemoveLabel}>
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default">
          <i className="fa fa-trash-o" onClick={_handleDelete}/>
        </button>
      </div>
    </div>
  );
}

