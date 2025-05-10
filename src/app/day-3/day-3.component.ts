import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from '../State/day3.action';
import { Observable } from 'rxjs';
import { selectUsersData } from '../State/day3.selecter';



@Component({
  selector: 'app-day-3',
  templateUrl: './day-3.component.html',
  styleUrls: ['./day-3.component.scss']
})
export class Day3Component implements OnInit {
  users$: Observable<any[]> | undefined;
  newListItem = '';
  updatedUser = '';
  updaatUserPayload: any;
  activeItem: string | null = null;
  constructor(private store: Store) {

  }
  ngOnInit(): void {
    this.fetchAllUsers();
    this.users$ = this.store.select(selectUsersData);
  }

  fetchAllUsers() {
    this.store.dispatch(UserActions.fetchUsers());
  }

  addUser() {
    const payload = {
      id: this.newListItem + 1,
      name: this.newListItem,
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    };
    this.store.dispatch(UserActions.addUserSuccess({ user: payload }));
    this.newListItem = '';
  }


  selectUser(user: any) {
    this.updatedUser = user.name;
    this.setUpdatePayload(user);
  }

  setUpdatePayload(user: any) {
    this.updaatUserPayload = {
      id: user.id,
      name: this.updatedUser,
      username: user.username,
      email: user.email,
      address: {
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode,
        geo: {
          lat: user.address.geo.lat,
          lng: user.address.geo.lng
        }
      },
      phone: user.phone,
      website: user.website,
      company: {
        name: user.company.name,
        catchPhrase: user.company.catchPhrase,
        bs: user.company.bs
      }
    };
  }

  onNameChange(newName: string) {
    this.updatedUser = newName;
    this.updaatUserPayload.name = newName;
  }


  updateUser() {
    console.log(this.updaatUserPayload);
    this.store.dispatch(UserActions.updateUserSuccess({ user: this.updaatUserPayload }));
  }

  deleteUser(userId: string) {
    this.store.dispatch(UserActions.deleteUserSuccess({ userId }));
  }
  setActiveItem(item: string) {
    this.activeItem = item;
  }
}
