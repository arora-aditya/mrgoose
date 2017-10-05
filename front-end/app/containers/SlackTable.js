import React, { Component } from 'react';
import { connect } from 'react-redux';
import SlackTableRow from '../components/SlackTableRow';
import * as SlackActions from '../actions/slack';

class SlackTable extends Component {
  componentWillMount() {
    this.props.loadMembers();
  }
  render() {
    return (
      <div>
      {
        this.props.members.map(member =>
          <SlackTableRow
            usr= {{
              url: 'imgur.com',
              Name: member.fullName,
              Role: member.bio,
            }}
            api={{
              kick: () => {
                this.props.kickMember(member);
              },
            }}
            key = {member._id}
          />)
      }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  members: state.slack.members,
});

const mapDispatchToProps = {
  kickMember: SlackActions.kickMember,
  loadMembers: SlackActions.loadMembers,
};

export default connect(mapStateToProps, mapDispatchToProps)(SlackTable);
