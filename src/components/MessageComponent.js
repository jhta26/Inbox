import React from 'react'



export default function MessageComponent({selected,message}){
	if(message.labels.length>0 && message.read==true && selected==true){
	return(
<div className="row message read selected">
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" checked='checked' />
      </div>
      <div className="col-xs-2">
        <i className="star fa fa-star"></i>
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
if(message.labels.length>0 && message.read==false && selected==false){
	return(
		<div className="row message unread">
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" />
      </div>
      <div className="col-xs-2">
        <i className="star fa fa-star"></i>
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
if(message.labels.length>0 && message.read==true && selected==false){
  return(
    <div className="row message read">
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" checked='checked' />
      </div>
      <div className="col-xs-2">
        <i className="star fa fa-star"></i>
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
if(message.labels.length>0 && message.read==false && selected==true){
  return(
    <div className="row message unread selected">
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" />
      </div>
      <div className="col-xs-2">
        <i className="star fa fa-star"></i>
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
	if(message.labels.length==0 && message.read==true && selected ==true){
	return(
<div className="row message read selected">
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" />
      </div>
      <div className="col-xs-2">
        <i className="star fa fa-star-o"></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    <a href="#">
      {message.subject}
    </a>
  </div>
</div>

		)
}
	if(message.labels.length==0 && message.read==false && selected==false){
	return(
<div className="row message unread">
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" />
      </div>
      <div className="col-xs-2">
        <i className="star fa fa-star-o"></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    <a href="#">
      {message.subject}
    </a>
  </div>
</div>

		)
}
if(message.labels.length==0 && message.read==false && selected==true){
  return(
<div className="row message unread">
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" checked='checked' />
      </div>
      <div className="col-xs-2">
        <i className="star fa fa-star-o"></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    <a href="#">
      {message.subject}
    </a>
  </div>
</div>

    )
}
if(message.labels.length==0 && message.read==true && selected==false){
  return(
<div className="row message read">
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" />
      </div>
      <div className="col-xs-2">
        <i className="star fa fa-star-o"></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    <a href="#">
      {message.subject}
    </a>
  </div>
</div>

    )
}

}

