import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;
  public items: MenuItem[] | undefined;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.Blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.Black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.Red,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.Green,
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.Green,
    },
  ];

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
    ];
  }

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero): void {
    this.orderBy = value;
  }
}
