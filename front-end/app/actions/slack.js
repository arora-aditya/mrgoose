import { get, remove } from '../helpers/api';
import { slackActions } from '../constants/actions';

export const startFetching = () => ({
  type: slackActions.START_FETCHING,
});

export const fetchingMembersSuccess = members => ({
  type: slackActions.FETCHING_MEMBERS_SUCCESS,
  payload: { members },
});

export const fetchingMembersFail = error => ({
  type: slackActions.FETCHING_MEMBERS_FAIL,
  payload: { error },
});

export const kickingMemberSuccess = member => ({
  type: slackActions.KICKING_MEMBER_SUCCESS,
  payload: { member },
});

export const kickingMemberFail = error => ({
  type: slackActions.KICKING_MEMBER_FAIL,
  payload: { error },
});

export const clearError = () => ({
  type: slackActions.CLEAR_ERROR,
});

export const loadMembers = () => dispatch => {
  dispatch(startFetching());
  get('members').then(response => {
    dispatch(fetchingMembersSuccess(response.members));
  }).catch(err => dispatch(fetchingMembersFail(err)));
};

export const kickMember = member => dispatch => {
  dispatch(startFetching());
  remove('kick', { id: member.id }).then(() => {
    dispatch(kickingMemberSuccess(member));
  }).catch(err => dispatch(kickingMemberFail(err)));
};


