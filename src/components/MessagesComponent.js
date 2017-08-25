import React from 'react'
import MessageComponent from './MessageComponent'

function MessagesComponent({items,selectedMessageIds}){
	return (
		<div className='MessagesComponent'>
	{items.map((item,index)=><MessageComponent key={index} selected={selectedMessageIds.includes(item.id)} message={item} />)}
	</div>
	)
}
export default (MessagesComponent)