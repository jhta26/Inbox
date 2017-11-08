import React from 'react';

function InboxPageLayout(props) {
  return (
    <div className="InboxPageLayout">
      <div className="headerEmail">Jmail<span className="titleBox"></span></div>
      {props.children[0]}
      <div className='row inboxLayoutRow'>
      <div className='col-lg-2'>
      {props.children[1]}
      </div>
      <div className='border col'></div>
      <div className='col-lg-10'>
      {props.children[2]}
      </div>
      
      </div>
       
    </div>
  );
}
export default InboxPageLayout;
