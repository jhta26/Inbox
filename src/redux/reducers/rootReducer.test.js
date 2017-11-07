import rootReducer from './rootReducer';
import deepFreeze from 'deep-freeze';

const messages = [{
        id: 1,
        body: '',
        subject: '',
        read: undefined,
        starred: undefined,
        labels: []
    },
    {
        id: 2,
        body: '',
        subject: '',
        read: undefined,
        starred: undefined,
        labels: []
    }
];
const state = {
    messages: messages,
    selectedMessageIds: [],
    selectedMessageCount: null,
    showComposeForm: false,
    loaded: false
};

describe('rootReducer tests', () => {
    it('set message works', () => {
        const action = { type: 'SET_MESSAGES', messages: messages };

        const currentState = {
            messages: [],
            selectedMessageIds: [],
            selectedMessageCount: 0,
            showComposeForm: false,
            loaded: false
        };

        deepFreeze(currentState);

        const nextState = {
            messages: messages,
            selectedMessageIds: [],
            selectedMessageCount: 0,
            showComposeForm: false,
            loaded: true
        };

        expect(rootReducer(currentState, action)).toEqual(nextState);
    });
    it('update messages works', () => {
        const updatedMessage = {
            id: 1,
            body: '',
            subject: '',
            read: true,
            starred: undefined,
            labels: []
        };

        const action = { type: 'UPDATED_MESSAGE', messages: updatedMessage };
        const currentState = {
            messages: messages,
            selectedMessageIds: [],
            selectedMessageCount: 0,
            writable: true,
            showComposeForm: false,
            loaded: false
        };
        deepFreeze(currentState);
        const nextState = {
            ...currentState,
            messages: [{
                    id: 1,
                    body: '',
                    subject: '',
                    read: true,
                    starred: undefined,
                    labels: []
                },
                {
                    id: 2,
                    body: '',
                    subject: '',
                    read: undefined,
                    starred: undefined,
                    labels: []
                }
            ]
        };
        expect(rootReducer(currentState, action)).toEqual(nextState);
    });

    it('select message works', () => {
        const messageId = 1;
        const action = { type: 'SELECT_MESSAGE', selectedMessageIds: messageId };
        const currentState = {
            messages: messages,
            selectedMessageIds: [],
            selectedMessageCount: 0,
            showComposeForm: false,
            loaded: false
        };
        var newSel = currentState.selectedMessageIds.slice();
        newSel.push(action.selectedMessageIds);
        deepFreeze(currentState);
        const nextState = {
            ...currentState,
            selectedMessageIds: newSel,
            selectedMessageCount: 1
        };
        expect(rootReducer(currentState, action)).toEqual(nextState);
    });
    it('select all messages works', () => {
        const action = { type: 'SELECT_ALLMESSAGES' };
        const currentState = {
            ...state
        };
        deepFreeze(currentState);
        const nextState = {
            ...currentState,
            selectedMessageIds: [1, 2],
            selectedMessageCount: 2
        };
        expect(rootReducer(currentState, action)).toEqual(nextState);
    });
    it('deselect message works', () => {
        const messageId = 1;
        const action = { type: 'DESELECT_MESSAGE', selectedMessageIds: messageId };
        const currentState = {
            ...state,
            messages: messages,
            selectedMessageIds: [1],
            selectedMessageCount: 1
        };
        deepFreeze(currentState);
        const nextState = {
            ...currentState,
            selectedMessageIds: [],
            selectedMessageCount: currentState.selectedMessageCount
        };
        expect(rootReducer(currentState, action)).toEqual(nextState);
    });
    it('deselect all messages works', () => {
        const action = { type: 'DESELECT_ALLMESSAGES' };
        const currentState = {
            ...state,
            selectedMessageIds: [1],
            selectedMessageCount: 1
        };
        deepFreeze(currentState);
        const nextState = {
            ...currentState,
            selectedMessageIds: [],
            selectedMessageCount: 0
        };
        expect(rootReducer(currentState, action)).toEqual(nextState);
    });
    it('form cancel works', () => {
        const action = { type: 'FORM_CANCEL' };
        const currentState = {
            ...state,
            showComposeForm: true
        };
        deepFreeze(currentState);
        const nextState = {
            ...currentState,
            showComposeForm: false
        };
        expect(rootReducer(currentState, action)).toEqual(nextState);
    });
    it('show compose form works', () => {
        const action = { type: 'COMPOSE_FORM' };
        const currentState = {
            ...state,
            showComposeForm: false
        };
        deepFreeze(currentState);
        const nextState = {
            ...currentState,
            showComposeForm: true
        };
        expect(rootReducer(currentState, action)).toEqual(nextState);
    });
    it('delete selected works', () => {
        const action = { type: 'DELETE_SELECTED', messages: deleteThese };
        const currentState = {
            ...state,
            messages: messages
        };
        var deleteThese = currentState.messages.filter(
            a => !currentState.selectedMessageIds.includes(a.id)
        );
        deepFreeze(currentState);
        const nextState = {
            ...currentState,
            messages: deleteThese
        };
        expect(rootReducer(currentState, action)).toEqual(nextState);
    });
    it('create messages works', () => {
        var messageId = {
            id: 3,
            body: '',
            subject: '',
            read: undefined,
            starred: undefined,
            labels: []
        };
        const action = { type: 'CREATE_MESSAGE', messages: messageId };
        const currentState = {
            ...state,
            messages: messages
        };

        deepFreeze(currentState);
        const nextState = {
            ...currentState,
            messages: [{
                    id: 1,
                    body: '',
                    subject: '',
                    read: undefined,
                    starred: undefined,
                    labels: []
                },
                {
                    id: 2,
                    body: '',
                    subject: '',
                    read: undefined,
                    starred: undefined,
                    labels: []
                },
                {
                    id: 3,
                    body: '',
                    subject: '',
                    read: undefined,
                    starred: undefined,
                    labels: []
                }
            ]
        };
    });
});