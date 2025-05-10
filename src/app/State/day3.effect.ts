import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";

import * as UserActions from './day3.action';
import { RootServiceService } from "../service/root-service.service";

@Injectable()
export class UserEffects {
    fetchAddresses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.fetchUsers),
            mergeMap(() =>
                this.rootService.getAllUser().pipe(
                    map((users: any) =>
                        UserActions.fetchUsersSuccess({ user: users })
                    ),
                    catchError((error) => {
                        return of(UserActions.fetchUsersFailure({ error }));
                    })
                )
            )
        )
    );




    constructor(
        private actions$: Actions,
        private rootService: RootServiceService
    ) { }
}