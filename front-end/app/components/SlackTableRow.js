import React from 'react';

const SlackTableRow = (props) => (
  <div className="flex">
    <div className="Image">
      <img
        src = {props.usr.url}
      />
    </div>
    <div className="Name">
      <p>{props.usr.Name}</p>
    </div>
    <div className="Role">
      <p>{props.usr.Role}</p>
    </div>
    <div className="Functions">
      <a href={props.api.kick}><p>Kick</p></a>
    </div>
  </div>
);

export default SlackTableRow;
