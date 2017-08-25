import React from 'react'
import { storiesOf } from '@storybook/react'
import InboxPageLayout from './InboxPageLayout'
import './InboxPageLayout.story.css'
import ToolbarComponent from './ToolbarComponent'
import MessagesComponent from './MessagesComponent'

export default function InboxPage(messages,items,selectedMessageIds){
	return(
<div className='InboxPage'>
<InboxPageLayout>
<ToolbarComponent messages={messages} selectedMessageCount = {3} />
<MessagesComponent items={items} selectedMessageIds={[1,4,5]}/>
</InboxPageLayout>
</div>

		)

}