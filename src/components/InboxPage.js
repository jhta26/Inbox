import React from 'react';
import InboxPageLayout from './InboxPageLayout';
import ToolbarComponent from './ToolbarComponent';
import MessagesComponent from './MessagesComponent';
import ComposeFormComponent from './ComposeFormComponent';

export default function InboxPage({
  messages,
  loaded,
  selectedMessageIds,
  selectedMessageCount,
  showComposeForm,
  onOpenComposeForm,
  onSelectAllMessages,
  onDeselectAllMessages,
  onMarkAsReadSelectedMessages,
  onMarkAsUnreadSelectedMessages,
  onApplyLabelSelectedMessages,
  onRemoveLabelSelectedMessages,
  onDeleteSelectedMessages,
  onMarkAsReadMessage,
  onSelectMessage,
  onDeselectMessage,
  onStarMessage,
  onUnstarMessage,
  onComposeFormSubmit,
  onComposeFormCancel
}) {
  return (
    <div className="InboxPage">
      <InboxPageLayout>
        {showComposeForm
          ? <ComposeFormComponent
              onSubmit={onComposeFormSubmit}
              onCancel={onComposeFormCancel}
            />
          : null}
        <ToolbarComponent
          messages={messages}
          selectedMessageIds={selectedMessageIds}
          selectedMessageCount={selectedMessageCount}
          onOpenComposeForm={onOpenComposeForm}
          onSelectAllMessages={onSelectAllMessages}
          onDeselectAllMessages={onDeselectAllMessages}
          onDeleteSelectedMessages={onDeleteSelectedMessages}
          onMarkAsReadSelectedMessages={onMarkAsReadSelectedMessages}
          onMarkAsUnreadSelectedMessages={onMarkAsUnreadSelectedMessages}
          onApplyLabelSelectedMessages={onApplyLabelSelectedMessages}
          onRemoveLabelSelectedMessages={onRemoveLabelSelectedMessages}
        />
        <MessagesComponent
          messages={messages}
          selectedMessageIds={selectedMessageIds}
          onMarkAsReadMessage={onMarkAsReadMessage}
          onSelectMessage={onSelectMessage}
          onDeselectMessage={onDeselectMessage}
          onStarMessage={onStarMessage}
          onUnstarMessage={onUnstarMessage}
        />
      </InboxPageLayout>
    </div>
  );
}
