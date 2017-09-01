import React from 'react';


function InboxPageLayout(props) {
  return (
    <div className="InboxPageLayout">
      {props.children[0]}
      {props.children[1]}
      {props.children[2]}
    </div>
  );
}
export default InboxPageLayout;
