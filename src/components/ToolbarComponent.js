import React from 'react';

function ToolbarComponent({
  messages,
  selected,
  selectedMessageCount,
  onOpenComposeForm,
  onSelectAllMessages,
  onDeselectAllMessages,
  onDeleteSelectedMessages,
  onMarkAsReadSelectedMessages,
  onMarkAsUnreadSelectedMessages,
  onApplyLabelSelectedMessages,
  onRemoveLabelSelectedMessages
}) {
  let symbol =
    messages.map(a => a.read == false).length > 0
      ? messages.filter(a => a.read == false).length === messages.length
        ? 'fa fa-check-square-o'
        : 'fa fa-minus-square-o'
      : 'fa fa-square-o';

  const _handleRead = () => {
    
    onMarkAsReadSelectedMessages();
  };

  const _handleUnread = () => {
    
    onMarkAsUnreadSelectedMessages();
  };

  const _handleCompose = () => {
    
    onOpenComposeForm();
  };

  const _handleToggle = () => {
    
    onSelectAllMessages();
    onDeselectAllMessages();
  };

  const _handleApplyLabel = event => {
    event.preventDefault();
    onApplyLabelSelectedMessages(event.target.value);
  };

  const _handleRemoveLabel = event => {
    event.preventDefault();
    onRemoveLabelSelectedMessages(event.target.value);
  };

  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">
            {messages.map(a => a.read == false).length}
          </span>
          unread messages
        </p>

        <a className="btn btn-danger">
          <i className="fa fa-plus" onClick={_handleCompose} />
        </a>

        <button className="btn btn-default" onClick={_handleToggle}>
          <i className={symbol} />
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
          <i className="fa fa-trash-o" />
        </button>
      </div>
    </div>
  );
}
export default ToolbarComponent;
