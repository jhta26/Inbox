import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InboxPage from './components/InboxPage';

var messages = [
  {
    id: 1,
    subject:
      "You can't input the protocol without calculating the mobile RSS protocol!",
    read: false,
    starred: true,
    body:
      "You can't input the protocol without calculating the mobile RSS protocol!  You can't input the protocol without calculating the mobile RSS protocol!  You can't input the protocol without calculating the mobile RSS protocol!",
    labels: ['dev', 'personal']
  },
  {
    id: 2,
    subject:
      "connecting the system won't do anything, we need to input the mobile AI panel!",
    read: false,
    starred: false,
    body:
      "connecting the system won't do anything, we need to input the mobile AI panel!",
    labels: []
  },
  {
    id: 3,
    subject:
      'Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!',
    read: false,
    starred: true,
    body:
      'Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!',
    labels: ['dev']
  },
  {
    id: 4,
    subject: 'We need to program the primary TCP hard drive!',
    read: true,
    starred: false,
    body: 'We need to program the primary TCP hard drive!',
    labels: []
  },
  {
    id: 5,
    subject:
      'If we override the interface, we can get to the HTTP feed through the virtual EXE interface!',
    read: false,
    starred: false,
    body:
      'If we override the interface, we can get to the HTTP feed through the virtual EXE interface!',
    labels: ['personal']
  },
  {
    id: 6,
    subject: 'We need to back up the wireless GB driver!',
    read: true,
    starred: true,
    body: 'We need to back up the wireless GB driver!',
    labels: []
  },
  {
    id: 7,
    subject: 'We need to index the mobile PCI bus!',
    read: true,
    starred: false,
    body: 'We need to index the mobile PCI bus!',
    labels: ['dev', 'personal']
  },
  {
    id: 8,
    subject:
      'If we connect the sensor, we can get to the HDD port through the redundant IB firewall!',
    read: true,
    starred: true,
    body:
      'If we connect the sensor, we can get to the HDD port through the redundant IB firewall!',
    labels: []
  }
];

var selectedMessageIds = [];
var selectedMessageCount = selectedMessageIds.length;
var showComposeForm = false;

function onMarkAsReadMessage(messageId) {
  let theTarget = messages.find(a => a.id === messageId);
  theTarget.read = true;
  render();
}

function onSelectMessage(messageId) {
  let theTarget = messages.find(a => a.id === messageId);
  selectedMessageIds.push(theTarget.id);
  selectedMessageCount++;
  render();
}

function onDeselectMessage(messageId) {
  let theTarget = messages.find(a => a.id === messageId);
  selectedMessageIds = selectedMessageIds.filter(a => a !== theTarget.id);
  selectedMessageCount--;
  console.log(selectedMessageIds);
  render();
}

function onStarMessage(messageId) {
  let theTarget = messages.find(message => message.id === messageId);
  theTarget.starred = true;
  render();
}

function onUnstarMessage(messageId) {
  let theTarget = messages.find(message => message.id === messageId);
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
  showComposeForm = false;
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
  let targets = messages.filter(a => selectedMessageIds.includes(a.id));
  targets.map(a => (a.read = true));
  render();
}

function onMarkAsUnreadSelectedMessages() {
  let targets = messages.filter(a => selectedMessageIds.includes(a.id));
  targets.map(a => (a.read = false));
  render();
}

function onApplyLabelSelectedMessages(label) {
  let targets = messages.filter(
    a => selectedMessageIds.includes(a.id) === true
  );
  targets.map(
    a =>
      a.labels.includes(label) === false
        ? (a.labels = a.labels.concat(label))
        : (a.labels = a.labels)
  );
  render();
}

function onRemoveLabelSelectedMessages(label) {
  let targets = messages.filter(
    a => selectedMessageIds.includes(a.id) === true
  );
  targets.forEach(
    a =>
      a.labels.includes(label)
        ? a.labels.splice(a.labels.indexOf(label), 1)
        : (a.labels = a.labels)
  );
  render();
}

function onDeleteSelectedMessages() {
  let targets = messages.filter(a => selectedMessageIds.includes(a.id));
  let targLength = targets.length
  while(targLength>0){
  messages.map(
    a => (targets.includes(a) ? messages.splice(messages.indexOf(a), 1) : a)
  );
  targLength--
  render();
}
}

function render() {
  ReactDOM.render(
    <InboxPage
      messages={messages}
      selectedMessageIds={selectedMessageIds}
      selectedMessageCount={selectedMessageCount}
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
