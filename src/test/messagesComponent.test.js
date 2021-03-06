import React from 'react'
import { shallow, mount } from 'enzyme'
import MessageComponent from '../components/MessageComponent'
import MessagesComponent from '../components/MessagesComponent'

let messages = [{
        body: 'one',
        date: '8/11 23:39',
        id: 'recAsyFVioyCnnn34',
        labels: [],
        read: false,
        starred: false,
        subject: 'one'

    },
    {
        body: 'three',
        date: '8/11 23:40',
        id: 'recI9XEmwy0qMBXXQ',
        labels: [],
        read: true,
        starred: true,
        subject: 'three'
    },
    {
        body: 'two',
        date: '8/11 23:39',
        id: 'recTU4BS8KgCrRBzp',
        labels: [],
        read: true,
        starred: true,
        subject: 'two'
    }

]


const onMarkAsReadMessage = jest.fn()
const onSelectMessage = jest.fn()
const onDeselectMessage = jest.fn()
const onStarMessage = jest.fn()
const onUnstarMessage = jest.fn()


describe('tests the MessagesComponent', () => {
    it('should render three messages', () => {

        const shallowWrapper = shallow( <
            MessagesComponent messages = { messages } selectedMessageIds = {
                [1] } onMarkAsReadMessage = { onMarkAsReadMessage } onSelectMessage = { onSelectMessage } onDeselectMessage = { onDeselectMessage } onStarMessage = { onStarMessage } onUnstarMessage = { onUnstarMessage }
            />
        )
        expect(shallowWrapper.find('MessageComponent')).toHaveLength(3)


    })

    it('should trigger onMarkAsReadMessage', () => {

        mount( <
            MessagesComponent messages = { messages } selectedMessageIds = {
                [1] } onMarkAsReadMessage = { onMarkAsReadMessage } onSelectMessage = { onSelectMessage } onDeselectMessage = { onDeselectMessage } onStarMessage = { onStarMessage } onUnstarMessage = { onUnstarMessage }
            />
        ).find('MessageComponent').first().find('.link').simulate('click')
        expect(onMarkAsReadMessage).toHaveBeenCalled()

    })

    it('should trigger onSelectMessage', () => {

        mount( <
            MessagesComponent messages = { messages } selectedMessageIds = {
                [0] } onMarkAsReadMessage = { onMarkAsReadMessage } onSelectMessage = { onSelectMessage } onDeselectMessage = { onDeselectMessage } onStarMessage = { onStarMessage } onUnstarMessage = { onUnstarMessage }
            />
        ).find('MessageComponent').first().find('.checkbox').simulate('change')
        expect(onSelectMessage).toHaveBeenCalled()

    })
    it('should trigger onDeselectMessage', () => {

        mount( <
            MessagesComponent messages = { messages } selectedMessageIds = {
                ['recAsyFVioyCnnn34'] } onMarkAsReadMessage = { onMarkAsReadMessage } onSelectMessage = { onSelectMessage } onDeselectMessage = { onDeselectMessage } onStarMessage = { onStarMessage } onUnstarMessage = { onUnstarMessage }
            />
        ).find('MessageComponent').first().find('.checkbox').simulate('change')
        expect(onDeselectMessage).toHaveBeenCalled()

    })
    it('should trigger onStarMessage', () => {

        mount( <
            MessagesComponent messages = { messages } selectedMessageIds = {
                [1] } onMarkAsReadMessage = { onMarkAsReadMessage } onSelectMessage = { onSelectMessage } onDeselectMessage = { onDeselectMessage } onStarMessage = { onStarMessage } onUnstarMessage = { onUnstarMessage }
            />
        ).find('MessageComponent').first().find('.star').simulate('click')
        expect(onStarMessage).toHaveBeenCalled()

    })
    it('should trigger onUnstarMessage', () => {

        mount( <
            MessagesComponent messages = {
                [{
                        body: 'one',
                        date: '8/11 23:39',
                        id: 'recAsyFVioyCnnn34',
                        labels: [],
                        read: false,
                        starred: true,
                        subject: 'one'

                    },
                    {
                        body: 'three',
                        date: '8/11 23:40',
                        id: 'recI9XEmwy0qMBXXQ',
                        labels: [],
                        read: true,
                        starred: true,
                        subject: 'three'
                    },
                    {
                        body: 'two',
                        date: '8/11 23:39',
                        id: 'recTU4BS8KgCrRBzp',
                        labels: [],
                        read: true,
                        starred: true,
                        subject: 'two'
                    }

                ]
            }
            selectedMessageIds = {
                [1] } onMarkAsReadMessage = { onMarkAsReadMessage } onSelectMessage = { onSelectMessage } onDeselectMessage = { onDeselectMessage } onStarMessage = { onStarMessage } onUnstarMessage = { onUnstarMessage }
            />
        ).find('MessageComponent').first().find('.star').simulate('click')
        expect(onUnstarMessage).toHaveBeenCalled()

    })


})