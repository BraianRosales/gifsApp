import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent {
  constructor(private GifsService: GifsService) {}

  get lsGifs() {
    return this.GifsService.lsGifs;
  }
}
