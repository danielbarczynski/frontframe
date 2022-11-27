import * as actionTypes from '../my-app/actions/actionTypes/userTypes';
import { ISingleUser } from './entities/users';

export interface IUsersReducer {
    users: ISingleUser[],
    currentUser: ISingleUser
}

const defaultState = (): IUsersReducer => ({
    users: [],
    currentUser: undefined
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_USERS: {
            const payload: actionTypes.IUserTypes['GET USER'] = action;
            return {
                ...state,
                users: payload.users,
                currentUser: payload.users[0]
            };

            default: {
                return state;
            }
        }
    }

