import { slackActions } from '../constants/actions';

const initState = {
  members: [{
    '_id': '59d406ca56549426b127ea07',
    'username': '1234',
    'fullName': 'Test User',
    'email': 'test1@abc.ca',
    'bio': 'WOW',
    '__v': 0,
    'teams': [],
    'joinDate': '2017-10-03T21:53:04.120Z'
  }, {
    '_id': '59d406ca56549426b127eeerro07',
    'username': '1234',
    'fullName': 'Test User',
    'email': 'test1@abc.ca',
    'bio': 'WOW',
    '__v': 0,
    'teams': [],
    'joinDate': '2017-10-03T21:53:04.120Z'
  }],
  isFetching: false,
  error: null,
};

const slackReducers = (state = initState, action) => {
  switch (action.type) {
    case slackActions.START_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case slackActions.FETCHING_MEMBERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        members: action.payload.members,
      };
    case slackActions.FETCHING_MEMBERS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    case slackActions.KICKING_MEMBER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        members: [...state.members].splice(state.members.findIndex(member => action.member._id === member._id), 1),
      };
    default:
      return state;
  }
};

export default slackReducers;
