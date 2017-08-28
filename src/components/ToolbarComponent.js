import React from 'react'


function ToolbarComponent({messages,selectedMessageCount}){

const symbol = messages.map(a=>a.read==false).length > 0 ? (messages.filter(a=>a.read==false).length === messages.length?"fa fa-check-square-o":"fa fa-minus-square-o"):"fa fa-square-o"


  return (
<div className="row toolbar">
  <div className="col-md-12">
    <p className="pull-right">
      <span className="badge badge">{messages.map(a=>a.read==false).length}</span>
      unread messages
    </p>

    <button className="btn btn-default">
      <i className={symbol}></i>
    </button>

    <button className="btn btn-default">
      Mark As Read
    </button>

    <button className="btn btn-default">
      Mark As Unread
    </button>

    <select className="form-control label-select">
      <option>Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select className="form-control label-select">
      <option>Remove label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <button className="btn btn-default">
      <i className="fa fa-trash-o"></i>
    </button>
  </div>
</div>
	
	)
}
export default (ToolbarComponent)