import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _lsGifStory: string[] = ['DBZ', 'pokemon', 'digimon'];

  public get lsGifStory(): string[] {
    return [...this._lsGifStory];
  }

  addGif(gif: string): void {
    gif = gif.trim().toLocaleLowerCase();
    if (!this._lsGifStory.includes(gif) && gif.length > 0) {
      this._lsGifStory.unshift(gif);
      // Solo agrega hasta el numero 10 de strings pasados a botones.
      this._lsGifStory = this._lsGifStory.splice(0, 10);
    }
  }
}
