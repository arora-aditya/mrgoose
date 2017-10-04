import React, { Component } from 'react';
import SlackTableRow from '../components/SlackTableRow';

export default class SlackTable extends Component {
  constructor() {
    super();
    this.members = [{
      '_id': '59d406ca56549426b127ea07',
      'username': '1234',
      'fullName': 'Test User',
      'email': 'test1@abc.ca',
      'bio': 'WOW',
      '__v': 0,
      'teams': [],
      'joinDate': '2017-10-03T21:53:04.120Z'
    },
    {
      '_id': '59d406ca56549426b127eeerro07',
      'username': '1234',
      'fullName': 'Test User',
      'email': 'test1@abc.ca',
      'bio': 'WOW',
      '__v': 0,
      'teams': [],
      'joinDate': '2017-10-03T21:53:04.120Z'
    }
    ];
  }
  render() {
    return (
      <div>
      {this.members.map(member => <SlackTableRow
        usr= {{
          url: 'imgur.com',
          Name: member.fullName,
          Role: member.bio,
        }}
        api={{
          kick: member._id,
        }}
       key = {member._id}/>)
      }
      </div>
    );
  }
}
