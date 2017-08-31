import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import InboxPage from './components/InboxPage';

var messages = [
  {
    id: 1,
    subject:
      "You can't input the protocol without calculating the mobile RSS protocol!",
    read: false,
    starred: true,
    selected: true,
    labels: ['dev', 'personal']
  },
  {
    id: 2,
    subject:
      "connecting the system won't do anything, we need to input the mobile AI panel!",
    read: false,
    starred: false,
    selected: true,
    labels: []
  },
  {
    id: 3,
    subject:
      'Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!',
    read: false,
    starred: true,
    selected: false,
    labels: ['dev']
  },
  {
    id: 4,
    subject: 'We need to program the primary TCP hard drive!',
    read: true,
    starred: false,
    selected: true,
    labels: []
  },
  {
    id: 5,
    subject:
      'If we override the interface, we can get to the HTTP feed through the virtual EXE interface!',
    read: false,
    starred: false,
    selected: false,
    labels: ['personal']
  },
  {
    id: 6,
    subject: 'We need to back up the wireless GB driver!',
    read: true,
    starred: true,
    selected: true,
    labels: []
  },
  {
    id: 7,
    subject: 'We need to index the mobile PCI bus!',
    read: true,
    starred: false,
    selected: false,
    labels: ['dev', 'personal']
  },
  {
    id: 8,
    subject:
      'If we connect the sensor, we can get to the HDD port through the redundant IB firewall!',
    read: true,
    starred: true,
    selected: true,
    labels: []
  }
];

var selectedMessageIds = [];
var selectedMessageCount = messages.map(a => a.selected == true).length;
var showComposeForm = false;

function onMarkAsReadMessage(messageId) {
  let theTarget = messages.find(a => a.id === messageId);
  theTarget.read = true;
  render();
}

function onSelectMessage(messageId) {
  let theTarget = messages.find(a => a.id === messageId);
  theTarget.selected = true;
  selectedMessageIds.push(theTarget);
  render();
}

function onDeselectMessage(messageId) {
  let theTarget = messages.find(a => a.id === messageId);
  theTarget.selected = false;

  render();
}

function onStarMessage(messageId) {
  let theTarget = messages.find(a => a.id === messageId);
  theTarget.starred = true;
  render();
}

function onUnstarMessage(messageId) {
  let theTarget = messages.find(a => a.id === messageId);
  theTarget.starred = false;
  render();
}

function onOpenComposeForm() {
  showComposeForm = true;
  render();
}

function onComposeFormSubmit() {
  showComposeForm = false;
  render();
}

function onComposeFormCancel() {
  showComposeForm = 0;
  render();
}
function onSelectAllMessages() {
  selectedMessageIds = messages.map(a => a.id);
  selectedMessageCount = selectedMessageIds.length;
  render();
}

function onDeselectAllMessages() {
  selectedMessageIds = [];
  selectedMessageCount = 0;
  render();
}

function onMarkAsReadSelectedMessages() {
  if (selectedMessageCount > 0 && selectedMessageCount < messages.length) {
    var notSel = messages.filter(a => selectedMessageIds.includes(a.id));
    notSel.forEach(a => (a.selected = true));
  }
  render();
}

function onMarkAsUnreadSelectedMessages() {
  if (selectedMessageCount > 0 && selectedMessageCount < messages.length) {
    var sel = messages.filter(a => !selectedMessageIds.includes(a.id));
    sel.forEach(a => (a.selected = false));
  }
  render();
}

function onApplyLabelSelectedMessages(label) {
  var selectedMessages = messages.filter(a => a.selected == true);
  for (var i = 0; i < selectedMessages.length; i++) {
    if (
      selectedMessages[i].labels.length == 0 ||
      !selectedMessages[i].labels.includes(label)
    ) {
      selectedMessages.labels.push(label);
    }
  }
  render();
}

function onRemoveLabelSelectedMessages(label) {
  var selectedMessages = messages.filter(a => a.selected == true);
  for (var i = 0; i < selectedMessages.length; i++) {
    if (
      selectedMessages[i].labels.length > 0 ||
      selectedMessages[i].labels.includes(label)
    ) {
      selectedMessages.labels.pop();
    }
  }
  render();
}

function onDeleteSelectedMessages(label) {
  var selectedMessages = messages.filter(a => a.selected == true);
  messages.map(a => (a = selectedMessages.includes(a) ? '' : a));
  render();
}

function render() {
  ReactDOM.render(
    <InboxPage
      messages={messages}
      selectedMessageIds={selectedMessageIds}
      showComposeForm={showComposeForm}
      onOpenComposeForm={onOpenComposeForm}
      onSelectAllMessages={onSelectAllMessages}
      onDeselectAllMessages={onDeselectAllMessages}
      onMarkAsReadSelectedMessages={onMarkAsReadSelectedMessages}
      onMarkAsUnreadSelectedMessages={onMarkAsUnreadSelectedMessages}
      onApplyLabelSelectedMessages={onApplyLabelSelectedMessages}
      onRemoveLabelSelectedMessages={onRemoveLabelSelectedMessages}
      onDeleteSelectedMessages={onDeleteSelectedMessages}
      onMarkAsReadMessage={onMarkAsReadMessage}
      onSelectMessage={onSelectMessage}
      onDeselectMessage={onDeselectMessage}
      onStarMessage={onStarMessage}
      onUnstarMessage={onUnstarMessage}
      onComposeFormSubmit={onComposeFormSubmit}
      onComposeFormCancel={onComposeFormCancel}
    />,
    document.getElementById('root')
  );
}
render();
