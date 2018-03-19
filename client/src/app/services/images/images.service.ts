import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class Image {

}

@Injectable()
export class ImagesService {

  url:string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getImages() {
      return this.http.get<Image[]>(`${this.url}/api/images`)
        .map(res => res);
  }

}
