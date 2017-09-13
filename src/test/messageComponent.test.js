import React from 'react'
import {shallow,mount} from 'enzyme'
import MessageComponent from '../components/MessageComponent'
import MessagesComponent from '../components/MessagesComponent'

const message={
	subject:'Hi',
	body:'Hello',
	starred:false,
	read:true,
	labels:['gschool','dev']
}

const onMarkAsReadMessage = jest.fn()
const onSelectMessage = jest.fn()
const onDeselectMessage = jest.fn()
const onStarMessage = jest.fn()
const onUnstarMessage = jest.fn()

const selectedMessageIds = [1,2]

const messages =[
{
	'id':1,
	'subject':'Hi',
	'body':'Hello',
	'starred':false,
	'read':false,
	'labels':['gschool','dev']
},
{
	'id':2,
	'subject':'Bye',
	'body': 'Bye, Bye',
	'starred':true,
	'read':false,
	'labels':[]
},
{
	'id':3,
	'subject':'whatevs',
	'body': 'testing',
	'starred':true,
	'read':true,
	'labels':['dev']
}

]

var selected = true

describe('tests the messageComponent', ()=>{

it('should appear with a subject',()=>{
	let shallowWrapper = shallow(
		<MessageComponent message={message} 
		selected={selected} 
		onMarkAsReadMessage={onMarkAsReadMessage}
        onSelectMessage={onSelectMessage}
        onDeselectMessage={onDeselectMessage}
        onStarMessage={onStarMessage}
        onUnstarMessage={onUnstarMessage}/>)
	expect(shallowWrapper.find('a')).toHaveLength(1)
})
it('should appear as read when read',()=>{
	let shallowWrapper = shallow(<MessageComponent message={messages[2]} 
		selected={selected} 
		onMarkAsReadMessage={onMarkAsReadMessage}
        onSelectMessage={onSelectMessage}
        onDeselectMessage={onDeselectMessage}
        onStarMessage={onStarMessage}
        onUnstarMessage={onUnstarMessage}/>)
	expect(shallowWrapper.find('.read')).toHaveLength(1)
})
it('should appear as unread when unread',()=>{
	let shallowWrapper = shallow(<MessageComponent message={messages[0]} 
		selected={selected} 
		onMarkAsReadMessage={onMarkAsReadMessage}
        onSelectMessage={onSelectMessage}
        onDeselectMessage={onDeselectMessage}
        onStarMessage={onStarMessage}
        onUnstarMessage={onUnstarMessage}/>)
	expect(shallowWrapper.find('.read')).toHaveLength(0)

})
it('should be starred when starred',()=>{
	let shallowWrapper = shallow(<MessageComponent message={messages[1]} 
		selected={selected} 
		onMarkAsReadMessage={onMarkAsReadMessage}
        onSelectMessage={onSelectMessage}
        onDeselectMessage={onDeselectMessage}
        onStarMessage={onStarMessage}
        onUnstarMessage={onUnstarMessage}/>)
	expect(shallowWrapper.find('.star')).toHaveLength(1)
})
it('should be unstarred when unstarred',()=>{
	let shallowWrapper = shallow(<MessageComponent message={messages[0]} 
		selected={selected} 
		onMarkAsReadMessage={onMarkAsReadMessage}
        onSelectMessage={onSelectMessage}
        onDeselectMessage={onDeselectMessage}
        onStarMessage={onStarMessage}
        onUnstarMessage={onUnstarMessage}/>)
	expect(shallowWrapper.find('.star')).toHaveLength(1)
})

it('should have selected class when selected is true',()=>{
	let shallowWrapper = shallow(<MessageComponent message={messages[0]} 
		selected={selected} 
		onMarkAsReadMessage={onMarkAsReadMessage}
        onSelectMessage={onSelectMessage}
        onDeselectMessage={onDeselectMessage}
        onStarMessage={onStarMessage}
        onUnstarMessage={onUnstarMessage}/>)
	expect(shallowWrapper.find('.selected')).toHaveLength(1)

})
it('should be checked if checked',()=>{
	let shallowWrapper = shallow(<MessageComponent message={message} 
		selected={selected} 
		onMarkAsReadMessage={onMarkAsReadMessage}
        onSelectMessage={onSelectMessage}
        onDeselectMessage={onDeselectMessage}
        onStarMessage={onStarMessage}
        onUnstarMessage={onUnstarMessage}/>)
	expect(shallowWrapper.find({checked:true})).toHaveLength(1)

})
it('should test onMarkAsReadMessage',()=>{
	mount(<MessageComponent message={messages[0]} 
		selected={selected} 
		onMarkAsReadMessage={onMarkAsReadMessage}
        onSelectMessage={onSelectMessage}
        onDeselectMessage={onDeselectMessage}
        onStarMessage={onStarMessage}
        onUnstarMessage={onUnstarMessage}/>).find('.link').simulate('click')
	
	expect(onMarkAsReadMessage).toHaveBeenCalled()

})
it('should test onSelectMessage',()=>{
	mount(<MessageComponent message={messages[0]} 
		selected={selected=false} 
		selectedMessageIds={[2]}
		onMarkAsReadMessage={onMarkAsReadMessage}
        onSelectMessage={onSelectMessage}
        onDeselectMessage={onDeselectMessage}
        onStarMessage={onStarMessage}
        onUnstarMessage={onUnstarMessage}/>).find('.checkbox').simulate('change')
	
	expect(onSelectMessage).toHaveBeenCalled()
})
it('should test onDeselectMessage',()=>{
	mount(<MessageComponent message={messages[0]} 
		selected={selected=true} 
		selectedMessageIds={[1]}
		onMarkAsReadMessage={onMarkAsReadMessage}
        onSelectMessage={onSelectMessage}
        onDeselectMessage={onDeselectMessage}
        onStarMessage={onStarMessage}
        onUnstarMessage={onUnstarMessage}/>).find('.checkbox').simulate('change')
	
	expect(onDeselectMessage).toHaveBeenCalled()
})
it('should test onStarMessage',()=>{
	mount(<MessageComponent message={messages[0]} 
		selected={selected} 
		onMarkAsReadMessage={onMarkAsReadMessage}
        onSelectMessage={onSelectMessage}
        onDeselectMessage={onDeselectMessage}
        onStarMessage={onStarMessage}
        onUnstarMessage={onUnstarMessage}/>).find('.star').simulate('click')
	
	expect(onStarMessage).toHaveBeenCalled()
})
it('should test onUnstarMessage',()=>{
	mount(<MessageComponent message={messages[1]} 
		selected={selected} 
		onMarkAsReadMessage={onMarkAsReadMessage}
        onSelectMessage={onSelectMessage}
        onDeselectMessage={onDeselectMessage}
        onStarMessage={onStarMessage}
        onUnstarMessage={onUnstarMessage}/>).find('.star').simulate('click')
	
	expect(onUnstarMessage).toHaveBeenCalled()
})



})