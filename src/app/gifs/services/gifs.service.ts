import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _lsGifStory: string[] = [];
  public lsGifs: any[] = [];

  private apikey: string = '7Vu7TplowOZPjHV8varYRlrzxuh78XVW';

  public get lsGifStory(): string[] {
    return [...this._lsGifStory];
  }

  constructor(private http: HttpClient) {}

  searchGif(gif: string): void {
    gif = gif.trim().toLocaleLowerCase();

    if (!this._lsGifStory.includes(gif) && gif.length > 0) {
      this._lsGifStory.unshift(gif);
      this._lsGifStory = this._lsGifStory.splice(0, 10); // Solo agrega hasta el numero 10 de strings pasados a botones.
    }

    this.http
      .get(
        `http://api.giphy.com/v1/gifs/search?api_key=7Vu7TplowOZPjHV8varYRlrzxuh78XVW&q=${gif}&limit=20`
      )
      .subscribe((res: any) => {
        console.log(res.data);
        this.lsGifs = res.data;
      });
  }
}
