import React from 'react'
import ToolbarComponent from './ToolbarComponent'
import MessagesComponent from './MessagesComponent'



function InboxPageLayout(props){
	return (
<div className='InboxPageLayout'>
{props.children[0]}
{props.children[1]}

</div>

	
	)
}
export default (InboxPageLayout)