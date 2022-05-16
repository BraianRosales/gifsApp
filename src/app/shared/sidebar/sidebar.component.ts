import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private GifsService: GifsService) {}

  get lsGifStory() {
    return this.GifsService.lsGifStory;
  }

  searchBtn(gif: string) {
    this.GifsService.searchGif(gif);
  }
}
