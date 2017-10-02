export default function rootReducer(
  currentState = {
    messages: [],
    selectedMessageIds: [],
    selectedMessageCount: 0,
    showComposeForm: false,
    loaded: false
  },
  action
) {
  var newSel = currentState.selectedMessageIds.slice();
  newSel.push(action.selectedMessageIds);
  switch (action.type) {
    case 'SET_MESSAGES':
      return { ...currentState, messages: action.messages, loaded: true };
    case 'MARK_AS_READ':
      return {
        ...currentState,
        messages: currentState.messages.map(
          message =>
            message.id === action.message.id ? action.message : message
        )
      };
    case 'SELECT_MESSAGE':
      return {
        ...currentState,
        selectedMessageIds: newSel,
        selectedMessageCount: newSel.length
      };
    case 'DESELECT_MESSAGE':
      return {
        ...currentState,
        selectedMessageIds: currentState.selectedMessageIds.filter(
          a => a !== action.selectedMessageIds
        ),
        selectedMessageCount: currentState.selectedMessageIds.length
      };
    case 'COMPOSE_FORM':
      return { ...currentState, showComposeForm: true };
    case 'CREATE_MESSAGE':
      var newMess = currentState;
      newMess.messages.unshift(action.messages);
      var createMess = currentState;
      createMess.messages.slice();

      createMess.messages.unshift(action.messages);
      return {
        ...currentState,
        showComposeForm: false,
        messages: createMess.messages
      };
    case 'FORM_CANCEL':
      return { ...currentState, showComposeForm: false };
    case 'SELECT_ALLMESSAGES':
      return {
        ...currentState,
        selectedMessageIds: currentState.messages.map(a => a.id),
        selectedMessageCount: currentState.messages.length
      };
    case 'DESELECT_ALLMESSAGES':
      return {
        ...currentState,
        selectedMessageIds: [],
        selectedMessageCount: 0
      };
    case 'DELETE_SELECTED':
      let deleteThese = currentState.messages.filter(
        a => !currentState.selectedMessageIds.includes(a.id)
      );
      return { ...currentState, messages: deleteThese };
    case 'UPDATED_MESSAGE':
      return {
        ...currentState,
        messages: currentState.messages.map(
          message =>
            message.id === action.messages.id ? action.messages : message
        )
      };
  }
}
