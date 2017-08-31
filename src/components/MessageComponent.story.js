import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageComponent from './MessageComponent';
import './MessageComponent.story.css';

storiesOf('MessageComponent', module).add('Happy path', () =>
  <MessageComponent
    message={{
      id: 1,
      subject:
        "You can't input the protocol without calculating the mobile RSS protocol!",
      read: false,
      starred: true,
      selected: true,
      labels: ['dev', 'personal']
    }}
    onMarkAsReadMessage={itemId => console.log(itemId)}
    onSelectMessage={itemId => console.log(itemId)}
    onDeselectMessage={itemId => console.log(itemId)}
    onStarMessage={itemId => console.log(itemId)}
    onUnstarMessage={itemId => console.log(itemId)}
  />
);
