import { createReducer, on } from "@ngrx/store";
import * as UserActions from './day3.action';

export interface UserState {
    users: any[];
    isLoading: boolean;
    error: any;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: null,
};

export const constUserReducer = createReducer(
    initialState,

    on(UserActions.fetchUsers, (state) => ({
        ...state,
        isLoading: true,
        isLoaded: false
    })),
    on(UserActions.fetchUsersSuccess, (state, { user }) => ({
        ...state,
        users: user,
        isLoading: false,
        isLoaded: true,
        error: null,
    })),
    on(UserActions.fetchUsersFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),

    on(UserActions.addUserSuccess, (state, { user }) => ({
        ...state,
        users: [...state.users, user],
        isLoading: false,
        error: null,
    })),


    on(UserActions.addUserFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),

    on(UserActions.updateUserSuccess, (state, { user }) => ({
        ...state,
        users: state.users.map(u => u.id === user.id ? user : u),
        isLoading: false,
        error: null,
    })),


    on(UserActions.updateUserFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),

    on(UserActions.deleteUserSuccess, (state, { userId }) => ({
        ...state,
        users: state.users.filter(u => u.id !== userId),
        isLoading: false,
        error: null,
    })),
    on(UserActions.deleteUserFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    }))










)
