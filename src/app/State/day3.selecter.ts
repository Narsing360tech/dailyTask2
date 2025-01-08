import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./day3.reducer";

export const selectAddressState =
    createFeatureSelector<UserState>('users');

export const selectUsersData = createSelector(
    selectAddressState,
    (state: UserState) => state.users
);