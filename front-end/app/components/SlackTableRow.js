import React from 'react';

const style = {
  display: 'inline-block',
  fontFamily: 'monospace',
  fontSize: 20,
  textAlign: 'center',
  color: 'white',
  margin: '0px 0px 0px 0px',
  padding: '0% 5% 0% 5%',
  border: '1px solid #BA55D3'
};

const SlackTableRow = (props) => (
  <div className="flex">
    <div style={style} className="Image">
      <img
        height="20"
        width="20"
        src = {props.usr.url}
      />
    </div>
    <div style={style} className="Name">
      <p>{props.usr.Name}</p>
    </div>
    <div style={style} className="Role">
      <p>{props.usr.Role}</p>
    </div>
    <div style={style} className="Functions">
      <a href={props.api.kick}><p>Kick</p></a>
    </div>
  </div>
);

export default SlackTableRow;
