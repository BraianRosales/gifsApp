import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GifsSearchResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _lsGifStory: string[] = [];
  public lsGifs: Gif[] = [];
  public serviceURL: string = 'http://api.giphy.com/v1/gifs';

  private _apikey: string = '7Vu7TplowOZPjHV8varYRlrzxuh78XVW';

  public get lsGifStory(): string[] {
    return [...this._lsGifStory];
  }

  constructor(private http: HttpClient) {
    this._lsGifStory = JSON.parse(localStorage.getItem('Historial')!) || [];
    this.lsGifs = JSON.parse(localStorage.getItem('Resultado')!) || [];
  }

  searchGif(gif: string): void {
    gif = gif.trim().toLocaleLowerCase();

    if (!this._lsGifStory.includes(gif) && gif.length > 0) {
      this._lsGifStory.unshift(gif);
      this._lsGifStory = this._lsGifStory.splice(0, 10); // Solo agrega hasta el numero 10 de strings pasados a botones.
      localStorage.setItem('Historial', JSON.stringify(this._lsGifStory));
    }

    const params = new HttpParams()
      .set('api_key', this._apikey)
      .set('q', gif)
      .set('limit', '20');

    this.http
      .get<GifsSearchResponse>(`${this.serviceURL}/search`, { params })
      .subscribe((res) => {
        this.lsGifs = res.data;
        localStorage.setItem('Resultado', JSON.stringify(res.data));
      });
  }
}
