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
    <div className="toolbar">
      <div className="tool col-md-12">
        <p>
          <span className="badge badge">{unread}</span>
          unread messages
        </p>


        <button className="compose toolButton btn btn-danger" onClick={_handleCompose}>
          Compose
        </button>
        <button className="toolButton btn btn-default">
          <i className={toggleButton} onClick={_handleToggle} />
        </button>

        <button className="toolButton btn btn-default" onClick={_handleRead}>
          Mark As Read
        </button>

        <button className="toolButton btn btn-default" onClick={_handleUnread}>
          Mark As Unread
        </button>


        <select
          className="applyRemoveLabel form-control label-select"
          onChange={_handleApplyLabel}>
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">school</option>
        </select>

        <select
          className="applyRemoveLabel form-control label-select"
          onChange={_handleRemoveLabel}>
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">school</option>
        </select>

        <button className="btn btn-default">
          <i className="fa fa-trash-o" onClick={_handleDelete} />
        </button>
      </div>
    </div>
  );
}
