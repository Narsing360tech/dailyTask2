import { createAction, props } from "@ngrx/store";

export const fetchUsers = createAction(
    '[users] Fetch All Users',
);

export const fetchUsersSuccess = createAction(
    '[users] Fetch All Users Success',
    props<{ user: any }>()
);

export const fetchUsersFailure = createAction(
    '[users] Fetch All Users Failure',
    props<{ error: any }>()
);

export const addUser = createAction(
    '[users] Add User',
    props<{ user: any }>()
);
export const addUserSuccess = createAction(
    '[users] Add User Success',
    props<{ user: any }>()
);
export const addUserFailure = createAction(
    '[users] Add User Failure',
    props<{ error: any }>()
);

export const updateUser = createAction(
    '[users] Update User',
    props<{ user: any }>()
);
export const updateUserSuccess = createAction(
    '[users] Update User Success',
    props<{ user: any }>()
);
export const updateUserFailure = createAction(
    '[users] Update User Failure',
    props<{ error: any }>()
);

export const deleteUser = createAction(
    '[users] Delete User',
    props<{ userId: string }>()
);
export const deleteUserSuccess = createAction(
    '[users] Delete User Success',
    props<{ userId: string }>()
);
export const deleteUserFailure = createAction(
    '[users] Delete User Failure',
    props<{ error: any }>()
);





