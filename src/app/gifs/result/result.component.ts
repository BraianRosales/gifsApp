import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interface/gifs.interface';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent {
  constructor(private GifsService: GifsService) {}

  get lsGifs(): Gif[] {
    return this.GifsService.lsGifs;
  }
}
