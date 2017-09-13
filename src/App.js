import React, { Component } from 'react';
import './App.css';
import getMessages from './requests/getMessages';
import InboxPage from './components/InboxPage';
import updateMessage from './requests/updateMessage';
import createMessage from './requests/createMessage';
import deleteMessage from './requests/deleteMessage';

var Loader= require('react-loader')

export default class App extends Component {
  state = {
    messages: [],
    selectedMessageIds: [],
    selectedMessageCount: 0,
    showComposeForm: false,
    loaded:false
  };



  componentDidMount() {
    getMessages()
      .then(messages =>{console.log(messages)
        this.setState({
          messages:messages,
          loaded:true
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Loader loaded={this.state.loaded}>
      <InboxPage
        messages={this.state.messages}
        selectedMessageIds={this.state.selectedMessageIds}
        selectedMessageCount={this.state.selectedMessageCount}
        showComposeForm={this.state.showComposeForm}
        onOpenComposeForm={this._onOpenComposeForm}
        onSelectAllMessages={this._onSelectAllMessages}
        onDeselectAllMessages={this._onDeselectAllMessages}
        onMarkAsReadSelectedMessages={this._onMarkAsReadSelectedMessages}
        onMarkAsUnreadSelectedMessages={this._onMarkAsUnreadSelectedMessages}
        onApplyLabelSelectedMessages={this._onApplyLabelSelectedMessages}
        onRemoveLabelSelectedMessages={this._onRemoveLabelSelectedMessages}
        onDeleteSelectedMessages={this._onDeleteSelectedMessages}
        onMarkAsReadMessage={this._onMarkAsReadMessage}
        onSelectMessage={this._onSelectMessage}
        onDeselectMessage={this._onDeselectMessage}
        onStarMessage={this._onStarMessage}
        onUnstarMessage={this._onUnstarMessage}
        onComposeFormSubmit={this._onComposeFormSubmit}
        onComposeFormCancel={this._onComposeFormCancel}
      />
      </Loader>
    );
  }

  _onMarkAsReadMessage = messageId => {
    updateMessage(messageId,{read:true})
      .then(updatedMessage => {
        this.setState(prevState => {
          return {
            messages: prevState.messages.map(
              message => (message.id === messageId ? updatedMessage : message)
            ),
            loaded:true
          };
        });
      })
      .catch(error => {});
  };

  _onSelectMessage = messageId => {
    this.setState(prevState => {
      var newSel = prevState.selectedMessageIds.slice()
      newSel.push(messageId)
      return {
        selectedMessageIds: newSel,
        selectedMessageCount: newSel.length,
        loaded:true
      };
    });
  };

  _onDeselectMessage = messageId => {
    this.setState(prevState => {
      return {
        selectedMessageIds: prevState.selectedMessageIds.filter(
          a => a !== messageId
        ),
        selectedMessageCount: prevState.selectedMessageCount--,
        loaded:true
      };
    });
  };

  _onStarMessage= (messageId) => {
    updateMessage(messageId,{starred:true})
      .then(updatedMessage => {
        this.setState(prevState => {
          return {
            messages: prevState.messages.map(
              message => (message.id === messageId ? updatedMessage : message)
            ),
            loaded:true
          };
        });
      })
      .catch(error => {});
  };

  _onUnstarMessage = (messageId) => {
    updateMessage(messageId,{starred:false})
      .then(updatedMessage => {
        this.setState(prevState => {
          return {
            messages: prevState.messages.map(
              message => (message.id === messageId ? updatedMessage : message)
            ),
            loaded:true
          };
        });
      })
      .catch(error => {});
  };

  _onOpenComposeForm = () => {
    this.setState({ showComposeForm: true });
  };

  _onComposeFormSubmit = ({subject,body,date}) => {
    var newMessage = {
      'id': '',
    'body': body,
   'subject': subject,
    'read': false,
    'starred': false,
    'labels': [],
    'date':date,
    }
  
    createMessage(newMessage).then(a=>newMessage.id=a)
    this.setState(prevState=>{ 
      var newMes = prevState.messages.slice()
      newMes.unshift(newMessage)
      return{
      messages:newMes,
      showComposeForm: false,
      loaded:true
       }});
  };

  _onComposeFormCancel = () => {
    this.setState({ showComposeForm: false, 
    loaded:true });
  };

  _onSelectAllMessages = () => {
    this.setState(prevState => {
      return {
        selectedMessageIds: prevState.messages.map(a => a.id),
        selectedMessageCount: prevState.messages.length,
        loaded:true
      };
    });
  };

  _onDeselectAllMessages = () => {
    this.setState({
      selectedMessageIds: [],
      selectedMessageCount: 0,
      loaded:true
    });
  };

  _onMarkAsReadSelectedMessages = () => {
    this.state.selectedMessageIds.forEach(message=>{
      updateMessage(message,{read:true}).then(updatedMessage=>{
        this.setState(prevState=>{
            return{
              messages:prevState.messages.map(a=>a.id===updatedMessage.id?a=updatedMessage:a),
              loaded:true
            }
          
          })
        })
    })
  };

  _onMarkAsUnreadSelectedMessages = () => {
    this.state.selectedMessageIds.forEach(message=>{
      updateMessage(message,{read:false}).then(updatedMessage=>{
        this.setState(prevState=>{
            return{
              messages:prevState.messages.map(a=>a.id===updatedMessage.id&&a.read===true?a=updatedMessage:a),
              loaded:true
            }
          
          })
        })
    })
  };

  _onApplyLabelSelectedMessages = label => {console.log(label, typeof label)
    
    this.state.selectedMessageIds.forEach(message=>{
      var labels = this.state.messages.find(a=>a.id===message).labels
      labels=labels.filter(a=>a!=='')
      updateMessage(message,{labels:labels+','+label}).then(updatedMessage=>{
        this.setState(prevState=>{
            return{
              messages:prevState.messages.map(a=>a.id===updatedMessage.id?a=updatedMessage:a),
              loaded:true
            }
          
          })
        })
    })
  };

  _onRemoveLabelSelectedMessages = label => {
    this.state.selectedMessageIds.forEach(message=>{
      var labels = this.state.messages.find(a=>a.id===message).labels
      labels.filter(a=>a!=='')
      updateMessage(message,{labels:labels.filter(a=>a!==label).join(',')}).then(updatedMessage=>{
        this.setState(prevState=>{
            return{
              messages:prevState.messages.map(a=>a.id===updatedMessage.id?a=updatedMessage:a),
              loaded:true
            }
          
          })
        })
    })
  };

  _onDeleteSelectedMessages = () => {

    this.state.selectedMessageIds.forEach(messageId=>{
      deleteMessage(messageId).then(()=>{
        this.setState(prevState=>{
          return{
            messages:prevState.messages.filter(a=>!prevState.selectedMessageIds.includes(a.id)),
            loaded:true
          }

        })
      })
    })
  };
}
