import React from 'react';

export default function ToolbarComponent({
  messages,
  selectedMessageIds,
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
  var _handleRead = () => {
    onMarkAsReadSelectedMessages(selectedMessageIds);
  };

  var _handleUnread = () => {
    onMarkAsUnreadSelectedMessages(selectedMessageIds);
  };

  var _handleCompose = () => {
    onOpenComposeForm();
  };

  var _handleToggle = event => {
    event.preventDefault();
    if (selectedMessageCount === messages.length) {
      onDeselectAllMessages();
    } else {
      onSelectAllMessages();
    }
  };

  const _handleApplyLabel = event => {
    event.preventDefault();
    onApplyLabelSelectedMessages(
      event.target.value,
      selectedMessageIds,
      messages
    );
  };

  const _handleRemoveLabel = event => {
    event.preventDefault();
    onRemoveLabelSelectedMessages(
      event.target.value,
      selectedMessageIds,
      messages
    );
  };
  const _handleDelete = () => {
    onDeleteSelectedMessages(selectedMessageIds);
  };
  var unread = messages ? messages.filter(a => !a.read).length : 0;
  var toggleButton =
    messages && messages.length === selectedMessageCount
      ? 'fa fa-minus-square-o'
      : selectedMessageCount === 0 ? 'fa fa-check-square-o' : 'fa fa-square-o';

  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">{unread}</span>
          unread messages
        </p>

        <a className="btn btn-danger">
          <i className="fa fa-plus" onClick={_handleCompose} />
        </a>

        <button className="btn btn-default">
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
          <i className="fa fa-trash-o" onClick={_handleDelete} />
        </button>
      </div>
    </div>
  );
}
