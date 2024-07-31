import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Util {
  title: string,
  iconClasses: string,
  url: string
}

@Component({
  selector: 'app-utils-modal',
  standalone: true,
  imports: [],
  templateUrl: './utils-modal.component.html',
  styleUrl: './utils-modal.component.css'
})
export class UtilsModalComponent {
  public utils: Util[];

  constructor(
    private _router: Router
  ) {
    this.utils = [
      {
        title: 'BAAR data visualizer',
        iconClasses: 'bi bi-file-earmark-spreadsheet fa-lg text-success',
        url: 'baar-data-visualizer'
      }
    ]
  }

  public navigateToUtilUrl(index: number) {
    this._router.navigate(['/', this.utils[index]['url']]).then(() => { window.location.reload(); });
  }
}
