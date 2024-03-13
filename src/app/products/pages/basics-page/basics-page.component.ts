import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: `
    .p-panel-title {
      font-size: 4rem !important;
    }
  `,
})
export class BasicsPageComponent {
  public nameLower: string = 'marcelo';
  public nameUpper: string = 'MARCELO';
  public fullName: string = 'maRCelO viZcARRa';

  public customDate: Date = new Date();
}
