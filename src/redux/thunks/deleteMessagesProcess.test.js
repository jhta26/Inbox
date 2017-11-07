import deleteMessagesProcess from './deleteMessagesProcess'
import deleteMessage from '../../requests/deleteMessage'
jest.mock('../../requests/deleteMessage')

const thunk = deleteMessagesProcess()
const dispatch = jest.fn()
const getState = () => ({})





describe('deleteMessagesProcess Test', () => {
    it('call deleteMessages', () => {

        deleteMessage.mockReturnValueOnce(Promise.resolve())
        return thunk(dispatch, getState).then(messages => {
            expect(deleteMessage).toBeCalled()
            expect(dispatch).toBeCalledWith({
                type: 'DELETE_SELECTED'
            })
        })
    })

})