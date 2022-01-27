import { Component } from '@angular/core';
import { Show, TvmazeService } from 'tvmaze';
import { Observable } from 'rxjs';

@Component({
  selector: 'ld-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  show$: Observable<Show> | undefined;

  constructor(private _service: TvmazeService) {
    this.show$ = this._service.getShow(335)
  }
}
