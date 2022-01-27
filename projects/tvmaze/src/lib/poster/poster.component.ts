import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TvmazeService } from '../tvmaze.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  @Input() showId!: number;

  posterUrl$: Observable<string> | undefined

  constructor(private _service: TvmazeService) { }

  ngOnInit(): void {
    this.posterUrl$ = this._service.getShow(this.showId)
      .pipe(map((show) => show.image.medium))
  }

}
