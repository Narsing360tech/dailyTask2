import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-item-list-componant',
  templateUrl: './item-list-componant.component.html',
  styleUrls: ['./item-list-componant.component.scss'],
  animations: [
    trigger('itemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(10px)' }))
      ])
    ])
  ]
})
export class ItemListComponantComponent {
  items: string[] = [];
  newItem: string = '';
  activeItem: string | null = null;

  constructor() { }

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  sortItems(order: 'asc' | 'desc') {
    this.items.sort((a, b) => {
      if (order === 'asc') {
        return a.localeCompare(b)
      }
      else {
        return b.localeCompare(a)
      }
    }
    );
  }

  setActiveItem(item: string) {
    this.activeItem = item;
  }

}
