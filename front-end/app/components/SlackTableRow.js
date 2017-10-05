import React from 'react';
import '../styles/sass/SlackTable.scss';

const SlackTableRow = (props) => (
  <div className="flex">
    <div className="flex-v-center table-cell">
      <img
        height="20"
        width="20"
        src = {props.usr.url}
      />
    </div>
    <div className="flex-v-center table-cell">
      {props.usr.Name}
    </div>
    <div className="flex-v-center table-cell">
      {props.usr.Role}
    </div>
    <div className="flex-v-center table-cell">
      <button onClick={props.api.kick}>
        Kick
      </button>
    </div>
  </div>
);

export default SlackTableRow;
