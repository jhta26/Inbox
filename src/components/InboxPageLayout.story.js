import React from 'react'
import { storiesOf } from '@storybook/react'
import InboxPageLayout from './InboxPageLayout'
import './InboxPageLayout.story.css'


storiesOf('InboxPageLayout',module)
.add('Happy path',()=><InboxPageLayout />)