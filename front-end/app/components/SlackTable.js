import React, { Component } from 'react';
import SlackTableRow from '../components/SlackTableRow';

const usrName = 'aditya';
const usrRole = 'Software';
const usrApi = '?';

export default class SlackTable extends Component {
  render() {
    return (
      <SlackTableRow
        usr= {{
          url: 'imgur.com',
          Name: {usrName},
          Role: {usrRole},
        }}
        api={{
          kick: {usrApi},
        }}
      />
    );
  }
}
