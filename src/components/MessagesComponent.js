import React from 'react';
import MessageComponent from './MessageComponent';

function MessagesComponent({
  messages,
  selectedMessageIds,
  onMarkAsReadMessage,
  onSelectMessage,
  onDeselectMessage,
  onStarMessage,
  onUnstarMessage
}) {
  return (
    <div className="MessagesComponent">
      {messages.map((message, index) =>
        <MessageComponent
          key={index}
          selected={selectedMessageIds.includes(message.id)}
          message={message}
          selectedMessageIds={selectedMessageIds}
          onMarkAsReadMessage={onMarkAsReadMessage}
          onSelectMessage={onSelectMessage}
          onDeselectMessage={onDeselectMessage}
          onStarMessage={onStarMessage}
          onUnstarMessage={onUnstarMessage}
        />
      )}
    </div>
  );
}

export default MessagesComponent;
