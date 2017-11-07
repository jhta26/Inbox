import createMessage from '../../requests/createMessage';

export default function createMessagesProcess(messageId) {
    return (dispatch, getState) => {
        return createMessage(messageId)
            .then(createdID => (messageId.id = createdID))
            .then(() => dispatch({ type: 'CREATE_MESSAGE', messages: messageId }));
    };
}