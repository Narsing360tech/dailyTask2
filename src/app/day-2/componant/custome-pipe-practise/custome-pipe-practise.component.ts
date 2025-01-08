import { Component } from '@angular/core';

@Component({
  selector: 'app-custome-pipe-practise',
  templateUrl: './custome-pipe-practise.component.html',
  styleUrls: ['./custome-pipe-practise.component.scss']
})
export class CustomePipePractiseComponent {

  itTeam = [
    { id: 0, name: 'Vikas Sir' },
    { id: 1, name: 'Vivek' },
    { id: 2, name: 'Chinmay' },
    { id: 3, name: 'Narsing' },
  ];
}
