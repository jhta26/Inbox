import React from 'react'



export default function MessageComponent({selected,message,onReadMessage,onSelectMessage,onStarMessage}){
	const read = message.read ? 'read' : 'unread'
  const check = selected ? 'checked' : ''
  const star = message.starred ? 'fa fa-star':'fa fa-star-o'


	return(
<div className={`row message ${read} ${selected?'selected':'unselected'}`}>
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" checked={check} />
      </div>
      <div className="col-xs-2">
        <i className={`star ${star}`}></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    {message.labels.map((item,index)=><span className="label label-warning"> {item} </span>)}
    <a href="#">
      {message.subject}
    </a>
  </div>
</div>

		)



}

