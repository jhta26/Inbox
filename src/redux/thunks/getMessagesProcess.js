import getMessages from '../../requests/getMessages';

export default function getMessagesProcess() {
    return (dispatch, getState) => {
        return getMessages()
            .then(messages => {

                dispatch({ type: 'SET_MESSAGES', messages: messages });
                return messages;
            })
            .catch(error => {
                dispatch({ type: 'GET_MESSAGES_FAILED' });
            });
    };
}