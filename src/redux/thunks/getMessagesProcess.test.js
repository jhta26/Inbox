import getMessagesProcess from './getMessagesProcess'
import getMessages from '../../requests/getMessages'
jest.mock('../../requests/getMessages')

const thunk = getMessagesProcess()
const dispatch = jest.fn()
const getState = () => ({})

var dataMessages = [{
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
]




describe('getMessagesProcess Test', () => {
    it('call getMessages, get array, and dispatch', () => {

        getMessages.mockReturnValueOnce(Promise.resolve(dataMessages))
        return thunk(dispatch, getState).then(messages => {
            expect(getMessages).toBeCalled()
            expect(messages).toEqual(dataMessages)
            expect(dispatch).toBeCalledWith({
                type: 'SET_MESSAGES',
                messages: dataMessages
            })
        })
    })

})