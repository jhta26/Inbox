import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageComponent from './MessageComponent';
import './MessageComponent.story.css';

storiesOf('MessageComponent', module)
  .add('Happy path', () =>
    <MessageComponent
      message={{
        id: 1,
        subject:
          "You can't input the protocol without calculating the mobile RSS protocol!",
        read: true,
        starred: true,
        labels: ['dev', 'personal']
      }}
      selected={true}
      onMarkAsReadMessage={itemId => console.log(itemId)}
      onSelectMessage={itemId => console.log(itemId)}
      onDeselectMessage={itemId => console.log(itemId)}
      onStarMessage={itemId => console.log(itemId)}
      onUnstarMessage={itemId => console.log(itemId)}
    />
  )
  .add('no star', () =>
    <MessageComponent
      message={{
        id: 1,
        subject:
          "You can't input the protocol without calculating the mobile RSS protocol!",
        read: false,
        starred: false,
        selected: true,
        labels: ['dev', 'personal']
      }}
      onMarkAsReadMessage={itemId => console.log(itemId)}
      onSelectMessage={itemId => console.log(itemId)}
      onDeselectMessage={itemId => console.log(itemId)}
      onStarMessage={itemId => console.log(itemId)}
      onUnstarMessage={itemId => console.log(itemId)}
    />
  )
  .add('read', () =>
    <MessageComponent
      message={{
        id: 1,
        subject:
          "You can't input the protocol without calculating the mobile RSS protocol!",
        read: true,
        starred: false,
        selected: true,
        labels: ['dev', 'personal']
      }}
      onMarkAsReadMessage={itemId => console.log(itemId)}
      onSelectMessage={itemId => console.log(itemId)}
      onDeselectMessage={itemId => console.log(itemId)}
      onStarMessage={itemId => console.log(itemId)}
      onUnstarMessage={itemId => console.log(itemId)}
    />
  )
  .add('unread', () =>
    <MessageComponent
      message={{
        id: 1,
        subject:
          "You can't input the protocol without calculating the mobile RSS protocol!",
        read: false,
        starred: false,
        selected: true,
        labels: ['dev', 'personal']
      }}
      onMarkAsReadMessage={itemId => console.log(itemId)}
      onSelectMessage={itemId => console.log(itemId)}
      onDeselectMessage={itemId => console.log(itemId)}
      onStarMessage={itemId => console.log(itemId)}
      onUnstarMessage={itemId => console.log(itemId)}
    />
  )
  .add('with labels', () =>
    <MessageComponent
      message={{
        id: 1,
        subject:
          "You can't input the protocol without calculating the mobile RSS protocol!",
        read: false,
        starred: false,
        selected: true,
        labels: ['dev', 'personal']
      }}
      onMarkAsReadMessage={itemId => console.log(itemId)}
      onSelectMessage={itemId => console.log(itemId)}
      onDeselectMessage={itemId => console.log(itemId)}
      onStarMessage={itemId => console.log(itemId)}
      onUnstarMessage={itemId => console.log(itemId)}
    />
  )
  .add('without labels', () =>
    <MessageComponent
      message={{
        id: 1,
        subject:
          "You can't input the protocol without calculating the mobile RSS protocol!",
        read: false,
        starred: false,
        selected: true,
        labels: []
      }}
      onMarkAsReadMessage={itemId => console.log(itemId)}
      onSelectMessage={itemId => console.log(itemId)}
      onDeselectMessage={itemId => console.log(itemId)}
      onStarMessage={itemId => console.log(itemId)}
      onUnstarMessage={itemId => console.log(itemId)}
    />
  );
