import React from 'react';

function ComposeFormComponent({ onSubmit, onCancel }) {
  const _handleClick = event => {
    event.preventDefault();
    var subject = event.target.subject.value.trim();
    var body = event.target.body.value.trim();
    var newDate = new Date();
    var month = newDate.getMonth();
    var date = newDate.getDate();
    var minutes = newDate.getMinutes();
    var hour = newDate.getHours();
    date = `${month}/${date} ${hour}:${minutes}`;
    onSubmit({ subject, body, date });
  };
  const _handleClickCancel = event => {
    event.preventDefault();
    onCancel();
  };

  return (
    <div className="ComposeFormComponent">
      <form className="form-horizontal well" onSubmit={_handleClick}>
        <div className="form-group">
          <div className="col-sm-8 col-sm-offset-2">
            <h4>Compose Message</h4>
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Subject</label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Enter a subject"
              name="subject"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Body</label>
          <div className="col-sm-8">
            <textarea name="body" id="body" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-8 col-sm-offset-2">
            <input type="submit" value="Send" className="btn btn-primary" />
            <input
              type="reset"
              value="Cancel"
              className="btn btn-default"
              onClick={_handleClickCancel}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default ComposeFormComponent;
