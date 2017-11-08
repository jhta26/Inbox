import React from 'react';

function InboxPageLayout(props) {
  return (
    <div className="InboxPageLayout">
      <div className="headerEmail">Jmail<span className="titleBox"></span></div>
      {props.children[0]}
      {props.children[1]}
      {props.children[2]}
    </div>
  );
}
export default InboxPageLayout;
