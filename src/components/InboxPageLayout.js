import React from 'react';

function InboxPageLayout(props) {
  return (
    <div className="InboxPageLayout">
      <div className="headerEmail">Jmail<span className="titleBox"></span></div>
      {props.children[0]}
      {props.children[1]}
      <div className='border'></div>
      
      {props.children[2]}
      
       <div className="footerEmail">Jmail</div>
    </div>
  );
}
export default InboxPageLayout;
