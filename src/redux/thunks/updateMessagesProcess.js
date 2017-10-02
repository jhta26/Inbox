import updateMessage from '../../requests/updateMessage';

export default function updateMessagesProcess(messageId, fieldChange) {
  return (dispatch, getState) => {
    return updateMessage(messageId, fieldChange).then(updatedMessage => {
      dispatch({ type: 'UPDATED_MESSAGE', messages: updatedMessage });
    });
  };
}
