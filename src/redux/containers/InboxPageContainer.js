import InboxPage from '../../components/InboxPage';
import { connect } from 'react-redux';
import createMessagesProcess from '../thunks/createMessagesProcess';
import updateMessagesProcess from '../thunks/updateMessagesProcess';
import getMessagesProcess from '../thunks/getMessagesProcess';
import deleteMessagesProcess from '../thunks/deleteMessagesProcess';
import { compose, lifecycle } from 'recompose';

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => dispatch(getMessagesProcess()),
    onMarkAsReadMessage: messageId =>
      dispatch(updateMessagesProcess(messageId, { read: true })),
    onSelectMessage: messageId =>
      dispatch({ type: 'SELECT_MESSAGE', selectedMessageIds: messageId }),
    onDeselectMessage: messageId =>
      dispatch({ type: 'DESELECT_MESSAGE', selectedMessageIds: messageId }),
    onStarMessage: messageId =>
      dispatch(updateMessagesProcess(messageId, { starred: true })),
    onUnstarMessage: messageId =>
      dispatch(updateMessagesProcess(messageId, { starred: false })),
    onOpenComposeForm: () =>
      dispatch({ type: 'COMPOSE_FORM', showComposeForm: true }),
    onComposeFormSubmit: ({ subject, body, date }) => {
      var newMessage = {
        id: '',
        body: body,
        subject: subject,
        read: false,
        starred: false,
        labels: [],
        date: date
      };
      dispatch(createMessagesProcess(newMessage));
    },

    onComposeFormCancel: () =>
      dispatch({ type: 'FORM_CANCEL', showComposeForm: false }),
    onSelectAllMessages: () => dispatch({ type: 'SELECT_ALLMESSAGES' }),
    onDeselectAllMessages: () =>
      dispatch({
        type: 'DESELECT_ALLMESSAGES'
      }),

    onMarkAsReadSelectedMessages: selectedMessageIds => {
      selectedMessageIds.forEach(message => {
        dispatch(updateMessagesProcess(message, { read: true }));
      });
    },

    onMarkAsUnreadSelectedMessages: selectedMessageIds => {
      selectedMessageIds.forEach(message => {
        dispatch(updateMessagesProcess(message, { read: false }));
      });
    },

    onApplyLabelSelectedMessages: (label, selectedMessageIds, messages) => {
      selectedMessageIds.forEach(message => {
        var labels = messages.find(a => a.id === message).labels;
        labels = labels.filter(a => a !== '');
        dispatch(
          updateMessagesProcess(message, { labels: labels + ',' + label })
        );
      });
    },

    onRemoveLabelSelectedMessages: (label, selectedMessageIds, messages) => {
      selectedMessageIds.forEach(message => {
        var labels = messages.find(a => a.id === message).labels;
        labels.filter(a => a !== '');
        dispatch(
          updateMessagesProcess(message, {
            labels: labels.filter(a => a !== label).join(',')
          })
        );
      });
    },

    onDeleteSelectedMessages: selectedMessageIds => {
      selectedMessageIds.forEach(messageId => {
        dispatch(deleteMessagesProcess(messageId));
      });
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(InboxPage);
